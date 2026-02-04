import type { CartRequest, CartResponse } from "../features/user/cart/cart.type";
import { apiPost } from "./api";

export const cartApi = {
    add: (order:CartRequest) => apiPost<CartResponse,CartRequest>('api/order/add',order)
}