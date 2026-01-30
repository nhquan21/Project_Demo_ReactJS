import { Navigate, Outlet } from "react-router-dom";
import { clearItem, getUserStorage, saveUserStorage } from "../utils/auth"
import { useEffect, useState, type ReactNode } from "react";
import { AuthContext, useAuth } from "./AuthContext";
import type { AuthenticationResponse } from "../features/auth/authType";

type AuthGuardProps = {
  roles?: string[]
}

export const AuthGuard = ({ roles }: AuthGuardProps) => {
  const { user, isAuthenticated } = useAuth();

   if (!isAuthenticated) {
    return <Navigate to="/signIn" replace />;
  }

  if (roles && !roles.includes(user!.role)) {
    return <Navigate to="/403" replace />;
  }
  
  return <Outlet />;
};

type Props = {
  children: ReactNode;
}
export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthenticationResponse | null>(null);

  useEffect(() => {
    const fetchUser = () => {
      const userStorage: AuthenticationResponse | null = getUserStorage();
      setUser(userStorage)
    }
    fetchUser();
  }, [])

  const login = (data: AuthenticationResponse) => {
    saveUserStorage(data);
    setUser(data)
  }

  const logout = () => {
    clearItem();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user?.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

