import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "./cart.type";
import { loadCart } from "../../../utils/cartStorage";

type CartState = {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
};

//lấy các danh sách các cart state lưu trong storage tránh khi reload page mất dữ liệu
const persistedCart = loadCart();

//Khai báo type State
const initialState: CartState = persistedCart || {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

//Hàm tính tổng
const calculateTotals = (items: CartItem[]) => {
  const totalQuantity = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalAmount = items.reduce((sum, i) => sum + i.quantity * i.price, 0);
  return { totalQuantity, totalAmount };
};

//Tạo slice
const cartSlice = createSlice({
  name: "cart", //Prefix cho action type
  initialState, //State ban đầu
  reducers: { //Nơi viết logic thay đổi state
    
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existing = state.items.find(i => i.publicId === action.payload.publicId);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      const totals = calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalQuantity = totals.totalQuantity;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(i => i.publicId !== action.payload);
      const totals = calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalQuantity = totals.totalQuantity;
    },

    increaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.publicId === action.payload);
      if (item) item.quantity += 1;

      const totals = calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalQuantity = totals.totalQuantity;
    },

    decreaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.publicId === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;

      const totals = calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalQuantity = totals.totalQuantity;
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.publicId === id);
      if (item) item.quantity = quantity;
    },

    incrementQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.publicId === action.payload);
      if (item) item.quantity += 1;

      const totals = calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalQuantity = totals.totalQuantity;
    },

    decrementQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.publicId === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;

      const totals = calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalQuantity = totals.totalQuantity;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
export const { incrementQty, decrementQty, updateQuantity } = cartSlice.actions;