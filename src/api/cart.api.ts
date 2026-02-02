import type { CartRequest, CartResponse } from "../features/user/cart/cart.type";
import type { ApiResponse } from "../types/api";
import axiosClient from "./axiosClient";

export const cartApi = {
    add: (order:CartRequest) => axiosClient.post<ApiResponse<CartResponse>>('api/order/add')
}