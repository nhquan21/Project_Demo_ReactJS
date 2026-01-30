import { cartRoutes } from "./cart/cart.routes";
import { EmailRoutes } from "./email/email.routes";


export const UserRoutes = [
    ...cartRoutes,
    ...EmailRoutes
];