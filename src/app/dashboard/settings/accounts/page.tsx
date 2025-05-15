// components/pinterest/Account.tsx
"use client";

import { useRouter } from "next/navigation";
import { PlusIcon, Loader } from "lucide-react";
import { getCookie } from "cookies-next";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { getApiUrl } from "@/lib/get-urls";
import PinterestAccountSkeletonCard from "@/components/loading-sekelton/cards/pinterest-account-skeleton-card";
import { Filters, PinterestAccount } from "@/types/accounts";
import ConnectedAccountCard from "@/components/cards/connected-account-card";
import { COOKIE_KEY } from "@/constants";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SimplePagination from "@/components/ui/simple-pagination";
import { ScrollArea } from "@/components/ui/scroll-area";

const Accounts = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [filters, setFilters] = useState<Filters>({ search: "", status: "" });

  const handleFiltersChange = (
    key: keyof Filters,
    value: string | number | Date
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const {
    data: accounts = [
      {
        id: "1",
        username: "my_pinterest",
        avatarUrl:
          "https://i.pinimg.com/75x75_RS/00/00/00/00/00000000000000000000000000000000.jpg",
        connectedAt: new Date("2023-10-15"),
        isDefault: true,
      },
    ],
    isLoading,
  } = useQuery<PinterestAccount[], Error>({
    queryKey: ["pinterest-accounts"],
    queryFn: async () => {
      const userToken = getCookie(COOKIE_KEY);
      const response = await fetch(`${getApiUrl()}/pinterest/accounts`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch Pinterest accounts");
      return response.json();
    },
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : "Failed to fetch accounts";
      toast.error(message);
    },
  });

  const connectAccountMutation = useMutation({
    mutationFn: async () => {
      const userToken = getCookie(COOKIE_KEY);
      const response = await fetch(`${getApiUrl()}/pinterest/auth/callback`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      if (!response.ok)
        throw new Error("Failed to initiate Pinterest connection");
      return response.json();
    },
    onSuccess: (data) => {
      window.location.href = data.authUrl;
    },
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : "Failed to connect account";
      toast.error(message);
    },
  });

  const removeAccountMutation = useMutation({
    mutationFn: async (accountId: string) => {
      const userToken = getCookie(COOKIE_KEY);
      const response = await fetch(
        `${getApiUrl()}/pinterest/accounts/${accountId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (!response.ok) throw new Error("Failed to remove account");
      return accountId;
    },
    onSuccess: (accountId) => {
      queryClient.setQueryData<PinterestAccount[]>(
        ["pinterest-accounts"],
        (old) => old?.filter((acc) => acc.id !== accountId) || []
      );
      toast.success("Account removed successfully");
    },
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : "Failed to remove account";
      toast.error(message);
    },
  });

  const setDefaultAccountMutation = useMutation({
    mutationFn: async (accountId: string) => {
      const userToken = getCookie(COOKIE_KEY);
      const response = await fetch(
        `${getApiUrl()}/pinterest/accounts/${accountId}/default`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (!response.ok) throw new Error("Failed to set as default");
      return accountId;
    },
    onSuccess: (accountId) => {
      queryClient.setQueryData<PinterestAccount[]>(
        ["pinterest-accounts"],
        (old) =>
          old?.map((acc) => ({
            ...acc,
            isDefault: acc.id === accountId,
          })) || []
      );
      toast.success("Default account updated");
    },
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : "Failed to update default";
      toast.error(message);
    },
  });

  const handleConnectAccount = () => connectAccountMutation.mutate();
  const handleRemoveAccount = (accountId: string) =>
    removeAccountMutation.mutate(accountId);
  const handleSetDefault = (accountId: string) =>
    setDefaultAccountMutation.mutate(accountId);

  let dx = new Date("10-12-2023");
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Typography type="h2">Pinterest Accounts</Typography>
        <Button
          onClick={handleConnectAccount}
          disabled={connectAccountMutation.isPending}
        >
          {connectAccountMutation.isPending ? (
            <span className="flex items-center">
              <Loader className="animate-spin mr-2 h-4 w-4" />
              Connecting...
            </span>
          ) : (
            <>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Pinterest Account
            </>
          )}
        </Button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex flex-1 flex-wrap items-center gap-2">
          <Input
            placeholder={`Search `}
            value={filters?.search}
            onChange={(event) => {
              handleFiltersChange("search", event?.target?.value);
            }}
            className={`w-[150px] lg:w-[250px]`}
          />
          <Select
            onValueChange={(selected) => {
              handleFiltersChange("status", selected);
            }}
            defaultValue={filters?.status}
            value={filters?.status}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="connected">Connected</SelectItem>
              <SelectItem value="disconnected">Disconnected</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            onClick={() => {
              const keys = Object.keys(filters) as Array<keyof Filters>;
              const emptyFilters = keys.reduce((acc, key) => {
                acc[key] = key === "status" ? "" : "";
                return acc;
              }, {} as Filters);
              setFilters(emptyFilters);
            }}
          >
            Reset
            {/* <Inco className="ml-2 h-4 w-4" /> */}
          </Button>
        </div>

        <div className="flex items-center gap-2"></div>
      </div>

      <ScrollArea className="h-[52vh] w-full">
        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, idx) => (
              <PinterestAccountSkeletonCard key={idx} />
            ))}
          </div>
        ) : Array.isArray(accounts) && accounts.length === 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>
                <Typography type="h4">
                  No Pinterest accounts connected
                </Typography>
              </CardTitle>
              <CardDescription>
                Connect your Pinterest account to start pinning content directly
                from our platform.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button onClick={handleConnectAccount}>
                <PlusIcon className="mr-2 h-4 w-4" />
                Connect Account
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Array.isArray(accounts) &&
                accounts.map((account) => {
                  return (
                    <ConnectedAccountCard
                      account={account}
                      handleSetDefault={handleSetDefault}
                      handleRemoveAccount={handleRemoveAccount}
                      isRemoving={
                        removeAccountMutation.variables === account.id &&
                        removeAccountMutation.isPending
                      }
                      isSettingDefault={setDefaultAccountMutation.isPending}
                    />
                  );
                })}
            </div>
          </>
        )}
      </ScrollArea>
      <SimplePagination
        currentPage={1}
        totalRows={20}
        rowsPerPage={10}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />
    </div>
  );
};

export default Accounts;
