import { getApiUrl } from "@/lib/get-urls";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface PinterestProfile {
  pinterestId: string;
  username: string;
  accountType: string;
  profileImage: string;
  isDefault?: boolean;
}

export const fetchPinterestAccounts = async (): Promise<PinterestProfile[]> => {
  const response = await axios.get<PinterestProfile[]>(
    `${getApiUrl()}/pinterest/accounts`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const useLinkedPinterestAccounts = () => {
  const pinterestAccountsQuery = useQuery<PinterestProfile[]>({
    queryKey: ["pinterestAccounts"],
    queryFn: fetchPinterestAccounts,
  });

  const { data, isLoading, isError, ...restPinterestAccountsQuery } =
    pinterestAccountsQuery;

  return {
    pinterestAccountsData: data || [],
    isPinterestAccountsLoading: isLoading,
    isPinterestAccountsError: isError,
    ...restPinterestAccountsQuery,
  };
};
