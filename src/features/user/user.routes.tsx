import { cartRoutes } from "./cart/cart.routes";
import { emailRoutes } from "./email/email.routes";


export const UserRoutes = [
    ...cartRoutes,
    ...emailRoutes
];