import { OrderCreate } from "./component/OrderCreate";
import { Order } from "./pages/Order";
import { OrderDetails } from "./pages/OrderDetails";


export const orderRoutes = [
    {
        path: "order",
        element: <Order />
    },
    {
        path: "order-details",
        element: <OrderDetails />
    },
    {
        path: "order-create",
        element: <OrderCreate />
    }
]