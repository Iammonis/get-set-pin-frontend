import { deleteCookie, setCookie, useGetCookie } from "cookies-next/client";

export const TOKEN_EXPIRED_AT = 7 * 24 * 60 * 60 * 1000; // 1 day in millisecond

export async function createSession(token: string) {
  // Set the cookie using cookies-next (on the client side)
  if (token) {
    console.log("Setting token cookie...");
    setCookie("token", token, {
      maxAge: TOKEN_EXPIRED_AT / 1000,
      path: "/",
    });
  }
}

export async function deleteSession() {
  deleteCookie("token");
}

// used to check if the user is logged in or not
export async function isLoggedInSession() {
  const getCookie = useGetCookie();
  return getCookie("token") ? true : false;
}
