import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/auth/authSlice";
import cartReducer from "../features/user/cart/cartSlice"; 
import productReducer from "../features/admin/product/ProductSlice"; 
import languageReducer from "../i18n/languageSlice"; 
import { saveCart } from "../utils/cartStorage";

//Tạo Redux store
export const store = configureStore({
  reducer: {
    auth: reducer,
    cart: cartReducer,
    product: productReducer,
    language: languageReducer
  }
})

//subscribe() chạy sau mọi dispatch. Không cần gọi save thủ công trong component.
store.subscribe(() => {
  saveCart(store.getState().cart);
});

// Khai báo Typing RTK
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;