import type { CartState } from "../features/user/cart/cart.type";

const KEY = "cart_state";

export const loadCart = (): CartState | undefined => {
    try {
        const data = window.localStorage.getItem(KEY);
        return data ? JSON.parse(data) : undefined
    } catch (error) {
        return undefined;
    }
}

export const saveCart = (state: CartState) => {
    try {
        localStorage.setItem(KEY, JSON.stringify(state));
    } catch { }
}