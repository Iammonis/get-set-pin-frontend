import { COOKIE_KEY, TOKEN_EXPIRED_AT } from "@/constants";
import { deleteCookie, setCookie, useGetCookie } from "cookies-next/client";

export async function createSession(token: string) {
  // Set the cookie using cookies-next (on the client side)
  if (token) {
    console.log("Setting token cookie...");
    setCookie(COOKIE_KEY, token, {
      maxAge: TOKEN_EXPIRED_AT,
      path: "/",
    });
  }
}

export async function deleteSession() {
  deleteCookie(COOKIE_KEY);
}

// used to check if the user is logged in or not
export async function isLoggedInSession() {
  const getCookie = useGetCookie();
  return getCookie(COOKIE_KEY) ? true : false;
}
