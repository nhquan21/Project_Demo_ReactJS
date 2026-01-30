import { createContext, useContext } from "react";
import type { AuthenticationResponse } from "../features/auth/authType";

export type AuthContextType = {
  user: AuthenticationResponse | null;
  login: (data: AuthenticationResponse) => void;
  logout: () => void;
  isAuthenticated: boolean;
  authLoading: boolean;
};

//Tạo Context API 
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook để dùng dễ hơn
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthContext missing Provider");
  return ctx;
};


