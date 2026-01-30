import type { ApiResponse, PageResponse } from "../types/api";
import type { CreatedProduct, DisplayCardProduct, DisplayListingProduct } from "../features/admin/product/product";
import axiosClient from "./axiosClient";

export const apiProduct = {
    getAll: () => axiosClient.get<ApiResponse<DisplayCardProduct[]>>('/api/products'),
    findById: (publicId: string) => axiosClient.get<ApiResponse<DisplayListingProduct>>('/api/products/findByPublicId', { params: { publicId } }),
    findByCategoryPublicId: (publicId: string) => axiosClient.get<ApiResponse<DisplayCardProduct[]>>('/api/products/findByCategoryPublicId', { params: { publicId } }),
    created: (formData: FormData) => axiosClient.post<ApiResponse<CreatedProduct>>('/api/products/created', formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }),
    search: (params: {
        keyword?: string;
        categoryId?: string;
        minPrice?: number;
        maxPrice?: number;
        page?: number;
        size?: number;
        sortField?: string;
        sortDir?: string;
    },signal?: AbortSignal) => axiosClient.get<ApiResponse<PageResponse<DisplayCardProduct>>>("/api/products/search", { params ,signal}),
    updated: (data: FormData, publicId: string) =>
    axiosClient.put<ApiResponse<DisplayListingProduct>>(
        '/api/products/updated',
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            params: { publicId }
        }
    ),

    
    deleted: (publicId: string) => axiosClient.delete<ApiResponse<void>>('/api/products/deleted', { params: { publicId } }),
}