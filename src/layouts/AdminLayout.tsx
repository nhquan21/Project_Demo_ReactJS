import { Outlet } from "react-router-dom";
import { Header } from "../components/admin/Header";
import { Navbar } from "../components/admin/Navbar";

export const AdminLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};
