import type { AxiosRequestConfig } from "axios";
import type { ApiResponse } from "../types/api";
import axiosClient from "./axiosClient";

// GET
export async function apiGet<T>(url: string): Promise<ApiResponse<T>> {
  const res = await axiosClient.get<ApiResponse<T>>(url);
  return res.data;
}

// FIND
export async function apiFindBy<T>(url: string,params?: Record<string, any>): Promise<ApiResponse<T>> {
  const res = await axiosClient.get<ApiResponse<T>>(url, { params });
  return res.data;
}


// POST
export async function apiPost<T, B = unknown>(
  url: string,
  body: B,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  const res = await axiosClient.post<ApiResponse<T>>(url, body, config);
  return res.data;
}


// PUT
export async function apiPut<T, B = unknown>(
  url: string,
  body: B,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  const res = await axiosClient.put<ApiResponse<T>>(url, body, config);
  return res.data;
}

//SEARCH
export async function apiSearch<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  const res = await axiosClient.get<ApiResponse<T>>(url, config);
  return res.data;
}


// DELETE
export async function apiDelete<T>(url: string,params?: Record<string, any>): Promise<ApiResponse<T>> {
  const res = await axiosClient.delete<ApiResponse<T>>(url, {params});
  return res.data;
}
