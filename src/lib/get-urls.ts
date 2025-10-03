export const getApiUrl = (): string => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  if (!url) {
    console.error("NEXT_PUBLIC_API_URL is not defined");
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }
  return url;
};
