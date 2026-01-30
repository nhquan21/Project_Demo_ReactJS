import { categoryRoutes } from "./category/category.routes";
import { customerRoutes } from "./customer/customer.routes";
import { orderRoutes } from "./order/order.routes";
import { productRoutes } from "./product/product.routes";


export const AdminRoutes = [
    ...productRoutes,
    ...categoryRoutes,
    ...orderRoutes,
    ...customerRoutes
];