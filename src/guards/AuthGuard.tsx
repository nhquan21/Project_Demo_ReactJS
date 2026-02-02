import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { clearItem, getUserStorage, saveUserStorage } from "../utils/auth"
import { useEffect, useState, type ReactNode } from "react";
import { AuthContext, useAuth, type AuthContextType } from "./AuthContext";
import type { AuthenticationResponse } from "../features/auth/authType";
import { Loading } from "../components/ui/Loading";

type AuthGuardProps = {
  roles?: string[]
}
export const isTokenExpired = (token: string): boolean => {
  try {
    const payloadBase64 = token.split(".")[1];
    const payloadJson = atob(payloadBase64);
    const payload = JSON.parse(payloadJson);

    if (!payload.exp) return true;

    const currentTime = Date.now() / 1000; // seconds
    return payload.exp < currentTime;
  } catch (error) {
    return true;
  }
};


export const AuthGuard = ({ roles }: AuthGuardProps) => {

  const { user, isAuthenticated, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) return <Loading isLoading />;

  const publicPaths = ["/signIn", "/signUp"];
  const isPublic = publicPaths.includes(location.pathname);

  // chưa login
  if (!isAuthenticated && !isPublic) {
    return <Navigate to="/signIn" replace state={{ from: location }} />;
  }

  // đã login mà vào trang public → đá về home
  if (isAuthenticated && isPublic) {
    return <Navigate to="/" replace />;
  }

  // check role
  if (roles && user && !roles.some(r => user.role.includes(r))) {
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
};


type Props = {
  children: ReactNode;
}

//Tạo AuthProvider
export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthenticationResponse | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const userStorage = getUserStorage();

    if (userStorage?.token && !isTokenExpired(userStorage.token)) {
      setUser(userStorage);
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }

    setAuthLoading(false);
  }, []);


  const login = (data: AuthenticationResponse) => {
    saveUserStorage(data);
    setUser(data);
    setIsAuthenticated(true);
  };


  const logout = () => {
    clearItem();
    setUser(null);
    setIsAuthenticated(false);
    navigate("/signIn", { replace: true });
  };

  useEffect(() => {
    if (!user?.token) return;

    const interval = setInterval(() => {
      if (isTokenExpired(user.token)) {
        clearItem();
        setUser(null);
        setIsAuthenticated(false);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [user]);

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    authLoading,
  };

  return (
    <AuthContext.Provider
      value={
        value // thêm vào context
      }
    >
      {children}
    </AuthContext.Provider>
  );
};



