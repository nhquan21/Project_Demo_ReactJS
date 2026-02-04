import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiProduct } from "../../../api/product.api";
import type { DisplayCardProduct } from "./product";
import type { ProductFilter } from "./pages/Product";
import type { PageResponse } from "../../../types/api";

export const fetchProducts = createAsyncThunk<
    DisplayCardProduct[],   // payload khi fulfilled
    void,                   // tham số truyền vào thunk
    { rejectValue: string } // payload khi rejectWithValue
>(
    "product/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await apiProduct.getAll(); // res đã là ApiResponse<T>
            return res.data.data; // lấy T
        } catch (err: any) {
            return rejectWithValue(
                err.response?.data?.message || "Fetch products failed"
            );
        }
    }
);

export const searchProducts = createAsyncThunk<
    PageResponse<DisplayCardProduct>,
    ProductFilter,
    { rejectValue: string }
>(
    "product/search",
    async (filter, { rejectWithValue, signal }) => {
        try {
            const res = await apiProduct.search(filter, signal);
            return res.data; // đúng
        } catch (err: any) {
            return rejectWithValue(
                err.response?.data?.message || "Search products failed"
            );
        }
    }
);

export const deleteProduct = createAsyncThunk<
    void,
    string,
    { rejectValue: string }
>(
    "product/delete",
    async (publicId, { rejectWithValue }) => {
        try {
            const res = await apiProduct.deleted(publicId);
            return res.data;
        } catch (err: any) {
            return rejectWithValue(
                err.response?.data?.message || "Delete products failed"
            );
        }
    }
)

export type ProductState = {
    items: DisplayCardProduct[];
    totalPages: number;
    totalElements: number;
    loading: boolean;
    error: string | null;
};

const initialState: ProductState = {
    items: [],
    totalPages: 0,
    totalElements: 0,
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: "product", // thống nhất với selector
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.content;
                state.totalPages = action.payload.totalPages;
                state.totalElements = action.payload.totalElements;
            })
            .addCase(searchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Search failed";
            })
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true; state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false; state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false; state.error = action.payload || "Fetch failed";
            });
    },
});

export default productSlice.reducer;