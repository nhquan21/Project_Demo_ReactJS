import { EmailDetails } from "./pages/EmailDetails";
import { EmailPage } from "./pages/EmailPage";

export const emailRoutes = [
    {
        path: "/email",
        element: <EmailPage />
    },
    {
        path: "/email-details",
        element: <EmailDetails />
    }
]