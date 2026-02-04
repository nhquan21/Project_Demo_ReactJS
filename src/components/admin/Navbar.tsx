import { NavLink } from 'react-router-dom'
import { useAuth } from '../../guards/AuthContext';

export const Navbar = () => {
    const {user,logout} = useAuth();
    return (
        <div className="sidenav-menu">
            {/* <!-- Brand Logo --> */}
            <div className="logo">
                <span className="logo logo-light">
                    <span className="logo-lg"><img src="/src/assets/images/logo.png" alt="logo" /></span>
                    <span className="logo-sm"><img src="/src/assets/images/logo-sm.png" alt="small logo" /></span>
                </span>

                <span className="logo logo-dark">
                    <span className="logo-lg"><img src="/src/assets/images/logo-black.png" alt="dark logo" /></span>
                    <span className="logo-sm"><img src="/src/assets/images/logo-sm.png" alt="small logo" /></span>
                </span>
            </div>

            {/* <!-- Sidebar Hover Menu Toggle Button --> */}
            <button className="button-on-hover">
                <i className="ti ti-circle align-middle"></i>
            </button>

            {/* <!-- Full Sidebar Menu Close Button --> */}
            <button className="button-close-offcanvas">
                <i className="ti ti-menu-4 align-middle"></i>
            </button>

            <div className="scrollbar" data-simplebar="">
                <div id="user-profile-settings" className="sidenav-user" style={{ background: "url(/src/assets/images/user-bg-pattern.svg)" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <NavLink to={"/"} className="link-reset">
                                <img src="/src/assets/images/users/user-1.jpg" alt="user-image" className="rounded-circle mb-2 avatar-md" />
                                <span className="sidenav-user-name fw-bold">David Dev</span>
                                <span className="fs-12 fw-semibold" data-lang="user-role">Art Director</span>
                            </NavLink>
                        </div>
                        <div>
                            <a className="dropdown-toggle drop-arrow-none link-reset sidenav-user-set-icon" data-bs-toggle="dropdown" data-bs-offset="0,12" href="#!" aria-haspopup="false" aria-expanded="false">
                                <i className="ti ti-settings fs-24 align-middle ms-1"></i>
                            </a>

                            <div className="dropdown-menu">
                                {/* <!-- Header --> */}
                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Welcome back!</h6>
                                </div>

                                {/* <!-- My Profile --> */}
                                {user?.role == "ROLE_USER" && <NavLink to={"/profile"} className="dropdown-item">
                                    <i className="ti ti-user-circle me-1 fs-lg align-middle"></i>
                                    <span className="align-middle">Profile</span>
                                </NavLink>}

                                {/* <!-- Logout --> */}
                                <a className="dropdown-item text-danger fw-semibold" onClick={() => logout()}>
                                    <i className="ti ti-logout me-1 fs-lg align-middle"></i>
                                    <span className="align-middle">Log Out</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--- Sidenav Menu --> */}
                <div id="sidenav-menu">
                    <ul className="side-nav">
                        <li className="side-nav-title mt-2" data-lang="apps">Apps</li>
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#ecommerce" aria-expanded="false" aria-controls="ecommerce" className="side-nav-link">
                                <span className="menu-icon"><i className="ti ti-basket"></i></span>
                                <span className="menu-text" data-lang="ecommerce">LaptopHub</span>
                                <span className="menu-arrow"></span>
                            </a>
                            <div className="collapse" id="ecommerce">
                                <ul className="sub-menu">
                                    {user?.role == "ROLE_ADMIN" && <li className="side-nav-item">
                                        <a data-bs-toggle="collapse" href="#products" aria-expanded="false" aria-controls="products" className="side-nav-link">
                                            <span className="menu-text" data-lang="products">Products</span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <div className="collapse" id="products">
                                            <ul className="sub-menu">
                                                <li className="side-nav-item">
                                                    <NavLink to={"/admin/products"} className="side-nav-link">
                                                        <span className="menu-text" data-lang="apps-ecommerce-products">Products</span>
                                                    </NavLink>
                                                </li>
                                                <li className="side-nav-item">
                                                    <NavLink to={"/admin/products-add"} className="side-nav-link">
                                                        <span className="menu-text" data-lang="apps-ecommerce-product-add">Add Product</span>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>}
                                    {user?.role == "ROLE_ADMIN" && <li className="side-nav-item">
                                        <NavLink to="/admin/categories" className="side-nav-link">
                                            <span className="menu-text" data-lang="apps-ecommerce-categories">Categories</span>
                                        </NavLink>
                                    </li>}
                                    {user?.role == "ROLE_ADMIN" && <li className="side-nav-item">
                                        <a data-bs-toggle="collapse" href="#orders" aria-expanded="false" aria-controls="orders" className="side-nav-link">
                                            <span className="menu-text" data-lang="orders">Orders</span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <div className="collapse" id="orders">
                                            <ul className="sub-menu">
                                                <li className="side-nav-item">
                                                    <NavLink to={"/admin/order"} className="side-nav-link">
                                                        <span className="menu-text" data-lang="apps-ecommerce-orders">Orders</span>
                                                    </NavLink>
                                                </li>
                                                <li className="side-nav-item">
                                                    <NavLink to={"/admin/order-details"} className="side-nav-link">
                                                        <span className="menu-text" data-lang="apps-ecommerce-order-details">Order Details</span>
                                                    </NavLink>
                                                </li>
                                                <li className="side-nav-item">
                                                    <NavLink to={"/admin/order-create"} className="side-nav-link">
                                                        <span className="menu-text" data-lang="apps-ecommerce-order-add">Add/Edit Order</span>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>}
                                    {user?.role == "ROLE_ADMIN" && <li className="side-nav-item">
                                        <NavLink to={"/admin/customer"} className="side-nav-link">
                                            <span className="menu-text" data-lang="apps-ecommerce-customers">Customers</span>
                                        </NavLink>
                                    </li>}
                                    {user?.role == "ROLE_USER" && <li className="side-nav-item">
                                        <NavLink to={"/"} className="side-nav-link">
                                            <span className="menu-text" data-lang="apps-ecommerce-cart">Home</span>
                                        </NavLink>
                                    </li>}
                                    {user?.role == "ROLE_USER" && <li className="side-nav-item">
                                        <NavLink to={"/cart"} className="side-nav-link">
                                            <span className="menu-text" data-lang="apps-ecommerce-cart">Cart</span>
                                        </NavLink>
                                    </li>}
                                    {user?.role == "ROLE_USER" && <li className="side-nav-item">
                                        <NavLink to={"/checkout"} className="side-nav-link">
                                            <span className="menu-text" data-lang="apps-ecommerce-checkout">Checkout</span>
                                        </NavLink>
                                    </li>}
                                </ul>
                            </div>
                        </li>
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#invoice" aria-expanded="false" aria-controls="invoice" className="side-nav-link">
                                <span className="menu-icon"><i className="ti ti-invoice"></i></span>
                                <span className="menu-text" data-lang="invoice">Invoice</span>
                                <span className="menu-arrow"></span>
                            </a>
                            <div className="collapse" id="invoice">
                                <ul className="sub-menu">
                                    <li className="side-nav-item">
                                        <NavLink to="apps-invoice-list.html" className="side-nav-link">
                                            <span className="menu-text" data-lang="apps-invoice-list">Invoices</span>
                                        </NavLink>
                                    </li>
                                    <li className="side-nav-item">
                                        <NavLink to="apps-invoice-details.html" className="side-nav-link">
                                            <span className="menu-text" data-lang="apps-invoice-details">Single Invoice</span>
                                        </NavLink>
                                    </li>
                                    <li className="side-nav-item">
                                        <NavLink to="apps-invoice-create.html" className="side-nav-link">
                                            <span className="menu-text" data-lang="apps-invoice-create">New Invoice</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {user?.role == "ROLE_USER" && <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#email" aria-expanded="false" aria-controls="email" className="side-nav-link">
                                <span className="menu-icon"><i className="ti ti-mailbox"></i></span>
                                <span className="menu-text" data-lang="email">Email</span>
                                <span className="badge text-bg-danger ms-auto">New</span>
                            </a>
                            <div className="collapse" id="email">
                                <ul className="sub-menu">
                                    <li className="side-nav-item">
                                        <NavLink to={"/email"} className="side-nav-link">
                                            <span className="menu-text" data-lang="apps-email-details">Inbox</span>
                                        </NavLink>
                                    </li>
                                    <li className="side-nav-item">
                                        <NavLink to={"/email-details"} className="side-nav-link">
                                            <span className="menu-text" data-lang="apps-email-details">Details</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>}

                    </ul>
                </div>
            </div>
        </div>
    )
}
