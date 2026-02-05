import { createSlice } from "@reduxjs/toolkit";
import type { Language } from "./Language";

interface LanguageState {
  language: Language;
}

const initialState: LanguageState = {
  language: (localStorage.getItem("lang") as Language) || "vi"
};

const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("lang", action.payload);
    }
  }
});
export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer;