import { ProductCreate } from "./components/ProductCreate";
import { Product } from "./pages/Product";
import { ProductDetails } from "./pages/ProductDetails";


export const productRoutes = [
  {
    path: 'products',
    element: <Product />
  },
  {
    path: 'products-add',
    element: <ProductCreate />
  },
   {
    path: 'products-edit/:publicId',
    element: <ProductCreate />
  },
  {
    path: 'products-details/:publicId',
    element: <ProductDetails />
  }

];