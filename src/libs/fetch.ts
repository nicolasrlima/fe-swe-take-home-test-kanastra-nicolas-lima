const BASE_URL = import.meta.env.VITE_API_URL;
const PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC_KEY;

export default async function fetcher<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const apiKeyQueryParam = input.toString().includes("?")
    ? `&apikey=${PUBLIC_KEY}`
    : `?apikey=${PUBLIC_KEY}`;
  const res = await fetch(`${BASE_URL}${input}${apiKeyQueryParam}`, init);
  return res.json().then((data) => {
    if (data.data) {
      return data.data;
    }
    return Promise.reject(data);
  });
}
