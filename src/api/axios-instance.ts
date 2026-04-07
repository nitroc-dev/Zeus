import Axios from "axios";

export const axiosClient = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000",
});

export const axiosInstance = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const { method = "GET", body, headers, signal } = options ?? {};

  const { data } = await axiosClient.request<T>({
    url,
    method: method as string,
    data: body,
    headers: headers as Record<string, string>,
    signal: signal as AbortSignal,
  });

  return data;
};
