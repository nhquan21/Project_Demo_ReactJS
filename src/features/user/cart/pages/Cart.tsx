

export const Cart = () => {
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
                                <h6 className="mb-2">Buy <span className="fw-bold text-warning">$250</span> more to get <span className="fw-semibold">Free Shipping</span></h6>
                                <div className="progress" style={{height: "4px"}}>
                                    <div className="progress-bar bg-warning" style={{width: "70%"}}></div>
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
                                    <h4 className="card-title flex-grow-1">Shopping Cart</h4>
                                    <a href="#" className="text-decoration-underline link-offset-2 fw-medium">Clear cart</a>
                                </div>

                                <div className="card-body">
                                    {/* <!-- Cart Table --> */}
                                    <div className="table-responsive">
                                        <table className="table table-custom align-middle mb-0">
                                            <thead className="bg-light align-middle bg-opacity-25 thead-sm">
                                                <tr className="text-uppercase fs-xxs">
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <!-- Product 1 --> */}
                                                <tr>
                                                    <td className="d-flex align-items-center">
                                                        <img src="/src/assets/images/products/1.png" className="me-3 rounded" width="60" alt="iPhone" />
                                                        <div>
                                                            <h6 className="mb-1 fs-sm">Apple iPhone 14 128GB</h6>
                                                            <small className="text-muted d-block">Color: White</small>
                                                            <small className="text-muted d-block">Model: 128GB</small>
                                                        </div>
                                                    </td>
                                                    <td>$899.00</td>
                                                    <td>
                                                        <div className="input-group" data-touchspin style={{maxWidth: "130px"}}>
                                                            <button type="button" className="btn btn-primary floating" data-minus>
                                                                <i className="ti ti-minus"></i>
                                                            </button>
                                                            <input type="number" className="form-control form-control-sm border-0" value="1" max="800000" />
                                                            <button type="button" className="btn btn-primary floating" data-plus>
                                                                <i className="ti ti-plus"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="fw-semibold">$899.00</td>
                                                    <td>
                                                        <a href="#" className="text-muted"><i className="ti ti-x fs-lg"></i></a>
                                                    </td>
                                                </tr>

                                                {/* <!-- Product 2 --> */}
                                                <tr>
                                                    <td className="d-flex align-items-center">
                                                        <img src="/src/assets/images/products/2.png" className="me-3 rounded" width="60" alt="iPad" />
                                                        <div>
                                                            <span className="badge bg-danger-subtle text-danger mb-1">-10%</span>
                                                            <h6 className="mb-1 fs-sm">Tablet Apple iPad Pro M2</h6>
                                                            <small className="text-muted d-block">Color: Black</small>
                                                            <small className="text-muted d-block">Model: 256GB</small>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">$989.00</span><br />
                                                        <small className="text-decoration-line-through text-muted">$1,099.00</small>
                                                    </td>
                                                    <td>
                                                        <div className="input-group" data-touchspin style={{maxWidth: "130px"}}>
                                                            <button type="button" className="btn btn-primary floating" data-minus>
                                                                <i className="ti ti-minus"></i>
                                                            </button>
                                                            <input type="number" className="form-control form-control-sm border-0" value="3" max="800000" />
                                                            <button type="button" className="btn btn-primary floating" data-plus>
                                                                <i className="ti ti-plus"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="fw-semibold">$989.00</td>
                                                    <td>
                                                        <a href="#" className="text-muted"><i className="ti ti-x fs-lg"></i></a>
                                                    </td>
                                                </tr>

                                                {/* <!-- Product 3 --> */}
                                                <tr>
                                                    <td className="d-flex align-items-center">
                                                        <img src="/src/assets/images/products/3.png" className="me-3 rounded" width="60" alt="Watch" />
                                                        <div>
                                                            <h6 className="mb-1 fs-sm">Smart Watch Series 7</h6>
                                                            <small className="text-muted d-block">Color: White</small>
                                                            <small className="text-muted d-block">Model: 44mm</small>
                                                        </div>
                                                    </td>
                                                    <td>$429.00</td>
                                                    <td>
                                                        <div className="input-group" data-touchspin style={{maxWidth: "130px"}}>
                                                            <button type="button" className="btn btn-primary floating" data-minus>
                                                                <i className="ti ti-minus"></i>
                                                            </button>
                                                            <input type="number" className="form-control form-control-sm border-0" value="2" max="800000" />
                                                            <button type="button" className="btn btn-primary floating" data-plus>
                                                                <i className="ti ti-plus"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="fw-semibold">$429.00</td>
                                                    <td>
                                                        <a href="#" className="text-muted"><i className="ti ti-x fs-lg"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* <!-- Continue Shopping --> */}
                                    <div className="mt-4">
                                        <a href="apps-ecommerce-products-grid.html" className="fw-medium d-inline-flex align-items-center gap-1"> <i className="ti ti-arrow-left"></i> Continue Shopping </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Order Summary --> */}
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Order Summary</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-3">
                                        <li className="d-flex justify-content-between mb-2">
                                            <span className="text-muted">Subtotal (3 items):</span>
                                            <span>$2,427.00</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span className="text-muted">Saving:</span>
                                            <span className="text-danger">- $110.00</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span className="text-muted">Tax collected:</span>
                                            <span>$73.40</span>
                                        </li>
                                        <li className="d-flex justify-content-between border-bottom pb-3 mb-3">
                                            <span className="text-muted">Shipping:</span>
                                            <span>Calculated at checkout</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <h6 className="text-uppercase text-muted">Estimated total:</h6>
                                            <h5 className="fw-bold">$2,390.40</h5>
                                        </li>
                                    </ul>

                                    <a href="apps-ecommerce-checkout.html" className="btn btn-lg btn-danger w-100 mb-3"> Proceed to Checkout </a>
                                    <p className="text-muted text-center mb-0"><a href="#" className="fw-semibold">Create an account</a> and get 239 bonuses</p>
                                </div>
                            </div>

                            {/* <!-- Apply Promo Code --> */}
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Apply Coupon Code</h4>
                                </div>
                                <div className="card-body">
                                    <div className="alert alert-warning fs-xs py-2">Use <span className="fw-bold">ADMINPRO</span> to get 10% off.</div>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Enter code" />
                                        <button className="btn btn-primary" type="button">Apply</button>
                                    </div>
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

            </div></>
    )
}
