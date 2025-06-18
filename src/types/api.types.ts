import { AxiosRequestConfig } from 'axios';

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
  data?: unknown;
}

export interface ApiClient {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>>;

  post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>>;

  put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>>;

  patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>>;

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>>;
}

// export type ApiRequestInterceptor = (
//   config: AxiosRequestConfig,
// ) => AxiosRequestConfig;
// export type ApiResponseInterceptor = (response: AxiosResponse) => AxiosResponse;
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export type ApiErrorInterceptor = (error: any) => Promise<never>;
