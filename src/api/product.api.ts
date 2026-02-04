import type { ApiResponse, PageResponse } from "../types/api";
import type { CreatedProduct, DisplayCardProduct, DisplayListingProduct } from "../features/admin/product/product";
import { apiDelete, apiFindBy, apiGet, apiPost, apiPut, apiSearch } from "./api";

export const apiProduct = {
    getAll: () => apiGet<ApiResponse<DisplayCardProduct[]>>('/api/products'),
    findById: (publicId: string) => apiFindBy<DisplayListingProduct>('/api/products/findByPublicId', { publicId }),
    findByCategoryPublicId: (publicId: string) => apiFindBy<DisplayCardProduct[]>('/api/products/findByCategoryPublicId', { publicId }),
    created: (formData: FormData) => apiPost<CreatedProduct, FormData>('/api/products/created', formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }),
    search: (
        params: {
            keyword?: string;
            categoryId?: string;
            minPrice?: number;
            maxPrice?: number;
            page?: number;
            size?: number;
            sortField?: string;
            sortDir?: string;
        },
        signal?: AbortSignal
    ) =>
        apiSearch<PageResponse<DisplayCardProduct>>(
            "/api/products/search",
            {
                params,
                signal
            }
        )
    ,
    updated: (data: FormData, publicId: string) =>
        apiPut<DisplayListingProduct>(
            '/api/products/updated',
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                params: { publicId }
            }
        ),


    deleted: (publicId: string) => apiDelete<void>('/api/products/deleted', { publicId }),
}