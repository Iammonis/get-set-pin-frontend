import { getApiUrl } from "@/lib/get-urls";

export const login = async (email: string, password: string) => {
  const response = await fetch(`${getApiUrl()}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

export const register = async (email: string, password: string) => {
  const response = await fetch(`${getApiUrl()}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};
