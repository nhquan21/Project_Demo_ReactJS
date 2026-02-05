import { AdminLayout } from '../layouts/AdminLayout'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../features/admin/Dashboard';
import { AuthGuard } from '../guards/AuthGuard';
import { Error403 } from '../components/error/Error-403';
import { Error400 } from '../components/error/Error-400';
import { Error404 } from '../components/error/Error-404';
import { UserRoutes } from '../features/user/user.routes';
import { Checkout } from '../features/user/checkout/Checkout';
import { UserLayout } from '../layouts/UserLayout';
import { Profile } from '../components/main/Profile';
import { authRoutes } from '../features/auth/auth.routes';
import { Home } from '../features/user/Home';
import { AdminRoutes } from '../features/admin/admin.routes';
import { ProductDetails } from '../features/admin/product/pages/ProductDetails';


export const AppRoutes = () => {
  return (
    <Routes>
      {authRoutes.map((r, i) => (
        <Route key={i} path={r.path} element={r.element} />
      ))}
      <Route element={<AuthGuard roles={["ROLE_USER"]} />}>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='products-details/:publicId' element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          {UserRoutes.map((r, i) => (
            <Route key={i} path={r.path} element={r.element} />
          ))}
        </Route>
      </Route>

      <Route element={<AuthGuard roles={["ROLE_ADMIN"]} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          {AdminRoutes.map((r, i) => (
            <Route key={i} path={r.path} element={r.element} />
          ))}
        </Route>
      </Route>
      <Route path="400" element={<Error400 />} />
      <Route path="403" element={<Error403 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

