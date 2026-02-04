import type { CategoryRequest, CategoryResponse } from "../features/admin/category/category";

import { apiDelete, apiFindBy, apiGet, apiPost, apiPut } from "./api";

export const apiCategory = {
    getAll: () => apiGet<CategoryResponse[]>('/api/categories'),
    findById: (publicId:string) => apiFindBy<CategoryResponse>('/api/categories/findById',{ publicId }),
    created: (formData :FormData) => apiPost<CategoryResponse,FormData>('/api/categories/created',formData,{
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }),
    updated: (category:CategoryRequest,publicId:string) => apiPut<CategoryResponse>('/api/categories/updated',category,{
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                params: { publicId }
            }),
    deleted: (publicId:string) => apiDelete<CategoryResponse>('/api/categories/deleted',{ publicId }),
}