import { LoginPage } from "./pages/pages/LoginPage";
import { RegisterPage } from "./pages/pages/RegisterPage";


export const authRoutes = [
    {
        path: 'signUp',
        element: <RegisterPage />
    },
    {
        path: 'signIn',
        element: <LoginPage />
    }
];