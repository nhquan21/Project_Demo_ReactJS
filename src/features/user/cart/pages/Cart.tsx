import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../app/store";
import { incrementQty, decrementQty, removeFromCart } from "../cartSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Cart = () => {
    const dispatch = useDispatch();//Gửi hành động thay đổi dữ liệu
    const cartItems = useSelector((state: RootState) => state.cart.items); //Đồng bộ UI theo state
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
    const totalQty = useSelector((state: RootState) => state.cart.totalQuantity)
    const FREE_SHIPPING_THRESHOLD = 1000000
    const {t} = useTranslation("common")

    // % tiến độ Free Shipping
    const percent = Math.min((totalAmount / FREE_SHIPPING_THRESHOLD) * 100, 100);

    // Số tiền còn thiếu
    const remaining = Math.max(FREE_SHIPPING_THRESHOLD - totalAmount, 0);

    const totalPriceItem = (price: number, qty: number) => price * qty;

    return (
        <>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Cart</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                <li className="breadcrumb-item active">Cart</li>
                            </ol>
                        </div>
                    </div>


                    {/* <!-- Free Shipping Progress --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="alert alert-info border border-info border-opacity-25">
                                {remaining > 0 ? (
                                    <h6 className="mb-2">
                                        Buy{" "}
                                        <span className="fw-bold text-warning">
                                            ${remaining.toLocaleString('vi-VN')}
                                        </span>{" "}
                                        more to get <span className="fw-semibold">Free Shipping</span>
                                    </h6>
                                ) : (
                                    <h6 className="mb-2 text-success fw-semibold">
                                        {t("app.freeShipping")}
                                    </h6>
                                )}

                                <div className="progress" style={{ height: "4px" }}>
                                    <div
                                        className="progress-bar bg-warning"
                                        style={{ width: `${percent}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Cart Layout --> */}
                    <div className="row">
                        {/* <!-- Cart Items --> */}
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title flex-grow-1">{t("app.shoppingCart")}</h4>
                                    <a href="#" className="text-decoration-underline link-offset-2 fw-medium">{t("app.clearCart")}</a>
                                </div>

                                <div className="card-body">
                                    {/* <!-- Cart Table --> */}
                                    <div className="table-responsive">
                                        <table className="table table-custom align-middle mb-0">
                                            <thead className="bg-light align-middle bg-opacity-25 thead-sm">
                                                <tr className="text-uppercase fs-xxs">
                                                    <th>{t("app.product")}</th>
                                                    <th>{t("product.price")}</th>
                                                    <th>{t("product.quantity")}</th>
                                                    <th>{t("app.total")}</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <!-- Product 1 --> */}
                                                {cartItems.map(e => (
                                                    <tr>
                                                        <td className="d-flex align-items-center">
                                                            <img src={e.image} className="me-3 rounded" width="60" alt="iPhone" />
                                                            <div>
                                                                <h6 className="mb-1 fs-sm">{e.name}</h6>
                                                                {/* <small className="text-muted d-block">Color: White</small>
                                                                <small className="text-muted d-block">Model: 128GB</small> */}
                                                            </div>
                                                        </td>
                                                        <td>${e.price?.toLocaleString('vi-VN')}</td>
                                                        <td>
                                                            <div className="input-group" data-touchspin style={{ maxWidth: "130px" }}>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-primary floating"
                                                                    onClick={() => dispatch(decrementQty(e.publicId))}
                                                                >
                                                                    <i className="ti ti-minus"></i>
                                                                </button>

                                                                <input
                                                                    type="number"
                                                                    className="form-control form-control-sm border-0"
                                                                    value={e.quantity}
                                                                    max={800000}
                                                                    readOnly
                                                                />

                                                                <button
                                                                    type="button"
                                                                    className="btn btn-primary floating"
                                                                    onClick={() => dispatch(incrementQty(e.publicId))}
                                                                >
                                                                    <i className="ti ti-plus"></i>
                                                                </button>

                                                            </div>
                                                        </td>
                                                        <td className="fw-semibold">${totalPriceItem(e.price, e.quantity).toLocaleString('vi-VN')}</td>
                                                        <td>
                                                            <a href="#" className="text-muted"><i className="ti ti-x fs-lg" onClick={() => dispatch(removeFromCart(e.publicId))}></i></a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* <!-- Continue Shopping --> */}
                                    <div className="mt-4">
                                        <a href="apps-ecommerce-products-grid.html" className="fw-medium d-inline-flex align-items-center gap-1"> <i className="ti ti-arrow-left"></i> {t("app.continueShopping")} </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Order Summary --> */}
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">{t("app.orderSummary")}</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-3">
                                        <li className="d-flex justify-content-between mb-2">
                                            <span className="text-muted">{t("app.subtotal")} ({totalQty} items):</span>
                                            <span>${totalAmount.toLocaleString('vi-VN')}</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span className="text-muted">Saving:</span>
                                            <span className="text-danger">- $110.00</span>
                                        </li>
                                        <li className="d-flex justify-content-between border-bottom pb-3 mb-3">
                                            <span className="text-muted">Shipping:</span>
                                            <span>Calculated at checkout</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <h6 className="text-uppercase text-muted">{t("app.estimatedtotal")}:</h6>
                                            <h5 className="fw-bold">${totalAmount.toLocaleString('vi-VN')}</h5>
                                        </li>
                                    </ul>

                                    <Link to={"/checkout"} className="btn btn-lg btn-danger w-100 mb-3"> {t("app.proceedtoCheckout")} </Link>
                                    <p className="text-muted text-center mb-0"><a href="#" className="fw-semibold">{t("auth.createAnAccount")}</a> and get 239 bonuses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- container --> */}

                {/* <!-- Footer Start --> */}
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start">
                                ©
                                <script>
                                    document.write(new Date().getFullYear())
                                </script>
                                Paces By
                                <span className="fw-semibold">Coderthemes</span>
                            </div>
                            <div className="col-md-6">
                                <div className="text-md-end d-none d-md-block">
                                    10GB of
                                    <span className="fw-bold">250GB</span>
                                    Free.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- end Footer --> */}

            </div>
        </>
    )
}
