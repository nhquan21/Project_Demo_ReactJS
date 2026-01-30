import { EmailDetails } from "./pages/EmailDetails";
import { EmailPage } from "./pages/EmailPage";

export const EmailRoutes = [
    {
        path: "/",
        element: <EmailPage />
    },
    {
        path: "/details",
        element: <EmailDetails />
    }
]