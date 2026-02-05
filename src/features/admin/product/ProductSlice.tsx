import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { apiProduct } from "../../../api/product.api";
import type { CreatedProduct, DisplayCardProduct, DisplayListingProduct } from "./product";
import type { ProductFilter } from "./pages/Product";
import type { ApiResponse, PageResponse } from "../../../types/api";

export type ProductState = {
    items: DisplayCardProduct[];
    response: ApiResponse<any> | null;
    item: DisplayListingProduct | null;
    totalPages: number;
    totalElements: number;
    loading: boolean;
    error: string | null;
};

const initialState: ProductState = {
    items: [],
    response: null,
    item: null,
    totalPages: 0,
    totalElements: 0,
    loading: false,
    error: null,
};

type EditProductPayload = {
    data: FormData;
    publicId: string;
};

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

export const editProduct = createAsyncThunk<
    ApiResponse<DisplayCardProduct>,
    EditProductPayload,
    { rejectValue: string }
>(
    "product/edit",
    async ({ data, publicId }, { rejectWithValue }) => {
        try {
            const res = await apiProduct.updated(data, publicId);
            return res;
        } catch (err: any) {
            return rejectWithValue(
                err.response?.data?.message || "Edit products failed"
            );
        }
    }
)

export const createProduct = createAsyncThunk<
    ApiResponse<CreatedProduct>,
    FormData,
    { rejectValue: string }
>("product/create", async (data, { rejectWithValue }) => {
    try {
        const res = await apiProduct.created(data);
        return res;
    } catch (err: any) {
        return rejectWithValue(err.response?.data?.message);
    }
});

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

export const productDetails = createAsyncThunk<
    DisplayListingProduct,
    string,
    { rejectValue: string }
>(
    "product/findbyId",
    async (publicId, { rejectWithValue }) => {
        try {
            const res = await apiProduct.findById(publicId);
            return res.data;
        } catch (err: any) {
            return rejectWithValue(
                err.response?.data?.message || "Delete products failed"
            );
        }
    }
)

const productSlice = createSlice({
    name: "product", // thống nhất với selector
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.items = action.payload.content;
                state.totalElements = action.payload.totalElements;
                state.totalPages = action.payload.totalPages
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                const deleteId = action.meta.arg;
                state.items = state.items.filter(e => e.publicId !== deleteId);
            })
            .addCase(editProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.response = action.payload;

                const index = state.items.findIndex(
                    p => p.publicId === action.payload.data.publicId
                );

                if (index !== -1) {
                    state.items[index] = action.payload.data;
                }
            })
            .addCase(productDetails.fulfilled, (state,action) => {
                state.item = action.payload;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.response = action.payload;
            })
            .addMatcher(isPending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(isRejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || action.error.message || "Something went wrong";
            })
            .addMatcher(isFulfilled, (state) => {
                state.loading = false;
            })
    },
});

export default productSlice.reducer;