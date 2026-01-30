import type { ApiResponse } from "../types/api";
import type { CategoryRequest, CategoryResponse } from "../features/admin/category/category";
import axiosClient from "./axiosClient";

export const apiCategory = {
    getAll: () => axiosClient.get<ApiResponse<CategoryResponse[]>>('/api/categories'),
    findById: (publicId:string) => axiosClient.get<ApiResponse<CategoryResponse>>('/api/categories/findById',{params: { publicId }}),
    created: (formData :FormData) => axiosClient.post<ApiResponse<CategoryResponse>>('/api/categories/created',formData,{
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }),
    updated: (category:CategoryRequest,publicId:string) => axiosClient.put<ApiResponse<CategoryResponse>>('/api/categories/updated',category,{params: { publicId }}),
    deleted: (publicId:string) => axiosClient.delete<ApiResponse<CategoryResponse>>('/api/categories/deleted',{params: { publicId }}),
}