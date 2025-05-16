"use client";

import { useLinkedPinterestAccounts } from "@/hooks/use-linked-accounts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Plus, PlusIcon, RefreshCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import PinterestprofileSkeletonCard from "@/components/loading-sekelton/h/pinterest-profile-skeleton";
import PinterestProfileCard from "@/components/cards/pinterest-profile-card";
import SimplePagination from "@/components/ui/simple-pagination";

interface Filters {
  search: string;
}

export default function Accounts() {
  const [filters, setFilters] = useState<Filters>({ search: "" });

  const handleFiltersChange = <K extends keyof Filters>(
    key: K,
    value: Filters[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const {
    pinterestAccountsData,
    isPinterestAccountsLoading,
    isPinterestAccountsError,
    error: pinterestAccountsError,
  } = useLinkedPinterestAccounts();

  const handleAddAccount = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/pinterest/auth`;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Typography type="h2">Linked Pinterest Accounts</Typography>
        <Button
          onClick={handleAddAccount}
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Pinterest Account
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

          <Button
            variant="outline"
            onClick={() => {
              const keys = Object.keys(filters) as Array<keyof Filters>;
              const emptyFilters = keys.reduce((acc, key) => {
                acc[key] = "";
                return acc;
              }, {} as Filters);
              setFilters(emptyFilters);
            }}
          >
            Reset
            <RefreshCcw className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2"></div>
      </div>

      <ScrollArea className="h-[52vh] w-full">
        {isPinterestAccountsLoading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, idx) => (
              <PinterestprofileSkeletonCard key={idx} />
            ))}
          </div>
        ) : Array.isArray(pinterestAccountsData) &&
          pinterestAccountsData.length === 0 ? (
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
              <Button onClick={handleAddAccount}>
                <PlusIcon className="mr-2 h-4 w-4" />
                Connect Account
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Array.isArray(pinterestAccountsData) &&
                pinterestAccountsData.map((account) => {
                  return (
                    <PinterestProfileCard
                      account={account}
                      handleSetDefault={() => {}}
                      handleRemoveAccount={() => {}}
                      isRemoving={false}
                      isSettingDefault={false}
                    />
                  );
                })}
            </div>
          </>
        )}
      </ScrollArea>
      <SimplePagination
        currentPage={1}
        totalRows={500}
        rowsPerPage={10}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />
    </div>
  );
}
