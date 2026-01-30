import { createContext, useContext } from "react";
import type { AuthenticationResponse } from "../features/auth/authType";

export type AuthContextType = {
  user: AuthenticationResponse | null;
  login: (data: AuthenticationResponse) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthContext missing Provider");
  return ctx;
};


