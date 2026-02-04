

export const OrderDetails = () => {
    return (
        <>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Order Details</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                <li className="breadcrumb-item active">Order Details</li>
                            </ol>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="row">
                                {/* <!-- Project Main Details --> */}
                                <div className="col-xl-9">
                                    <div className="card">
                                        <div className="card-header align-items-start p-4">
                                            <div>
                                                <h3 className="mb-1 d-flex fs-xl align-items-center">Order #WB20100</h3>
                                                <p className="text-muted mb-3"><i className="ti ti-calendar"></i> 24 Apr, 2025 <small className="text-muted">10:10 AM</small></p>
                                                <span className="badge badge-soft-success fs-xxs badge-label"><i className="ti ti-circle-filled fs-sm align-middle"></i> Paid</span>
                                                <span className="badge badge-soft-info fs-xxs badge-label"><i className="ti ti-truck fs-sm align-middle"></i> Shipped</span>
                                            </div>
                                            <div className="ms-auto">
                                                <a href="javascript: void(0);" className="btn btn-light"><i className="ti ti-pencil me-1"></i> Modify</a>
                                                <a href="javascript: void(0);" className="btn btn-danger"><i className="ti ti-trash me-1"></i> Delete</a>
                                            </div>
                                        </div>
                                        <div className="card-body px-4">
                                            <h4 className="fs-sm mb-3">Order Summary</h4>
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-custom table-nowrap align-middle mb-1">
                                                    <thead className="bg-light align-middle bg-opacity-25 thead-sm">
                                                        <tr className="text-uppercase fs-xxs">
                                                            <th>Product</th>
                                                            <th>Price</th>
                                                            <th>QTY</th>
                                                            <th className="text-end">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* <!-- Product 1 --> */}
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <div className="avatar-md me-3">
                                                                        <img src="/src/assets/images/products/1.png" alt="Wireless Earbuds" className="img-fluid rounded" />
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="mb-1">
                                                                            <a href="apps-ecommerce-product-details.html" className="link-reset">Wireless Earbuds</a>
                                                                        </h5>
                                                                        <p className="text-muted mb-0 fs-xxs">by: My Furniture</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>$79.99</td>
                                                            <td>2</td>
                                                            <td className="text-end">$159.98</td>
                                                        </tr>

                                                        {/* <!-- Product 2 --> */}
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <div className="avatar-md me-3">
                                                                        <img src="/src/assets/images/products/2.png" alt="Smart Watch" className="img-fluid rounded" />
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="mb-1">
                                                                            <a href="apps-ecommerce-product-details.html" className="link-reset">Smart Watch</a>
                                                                        </h5>
                                                                        <p className="text-muted mb-0 fs-xxs">by: Tech World</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>$199.00</td>
                                                            <td>1</td>
                                                            <td className="text-end">$199.00</td>
                                                        </tr>

                                                        {/* <!-- Product 3 --> */}
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <div className="avatar-md me-3">
                                                                        <img src="/src/assets/images/products/3.png" alt="Gaming Mouse" className="img-fluid rounded" />
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="mb-1">
                                                                            <a href="apps-ecommerce-product-details.html" className="link-reset">Gaming Mouse</a>
                                                                        </h5>
                                                                        <p className="text-muted mb-0 fs-xxs">by: Pro Gamerz</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>$49.50</td>
                                                            <td>3</td>
                                                            <td className="text-end">$148.50</td>
                                                        </tr>

                                                        {/* <!-- Subtotal --> */}
                                                        <tr className="border-top">
                                                            <td colSpan={3} className="text-end fw-semibold">Subtotal</td>
                                                            <td className="text-end">$507.48</td>
                                                        </tr>

                                                        {/* <!-- Tax --> */}
                                                        <tr>
                                                            <td colSpan={3} className="text-end fw-semibold">Tax (10%)</td>
                                                            <td className="text-end">$50.75</td>
                                                        </tr>

                                                        {/* <!-- Discount --> */}
                                                        <tr>
                                                            <td colSpan={3} className="text-end fw-semibold">Discount (5%)</td>
                                                            <td className="text-end text-danger fw-semibold">-$25.37</td>
                                                        </tr>

                                                        {/* <!-- Shipping --> */}
                                                        <tr>
                                                            <td colSpan={3} className="text-end fw-semibold">Shipping fee</td>
                                                            <td className="text-end">$10.00</td>
                                                        </tr>

                                                        {/* <!-- Grand Total --> */}
                                                        <tr className="border-top">
                                                            <td colSpan={3} className="text-end fw-bold text-uppercase">Grand Total</td>
                                                            <td className="fw-bold text-end table-active">$543.86</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* <!-- end card-body --> */}
                                    </div>
                                    {/* <!-- end card --> */}

                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Shipping Activity</h4>
                                        </div>
                                        <div className="card-body p-4">
                                            <div className="timeline">
                                                {/* <!-- Event 1 --> */}
                                                <div className="timeline-item d-flex align-items-stretch">
                                                    <div className="timeline-time pe-3 text-muted"></div>
                                                    <div className="timeline-dot bg-light"></div>
                                                    <div className="timeline-content ps-3 pb-5">
                                                        <h5 className="mb-1">Pending Delivery</h5>
                                                        <p className="mb-1 text-muted">The package is out for delivery and will reach you shortly.</p>
                                                        <p className="mb-1 text-muted fs-xxs">Tracking No: <a href="#!" className="link-primary fw-semibold text-decoration-underline">TRK123456789</a></p>
                                                        <span className="fw-semibold fs-xxs">By Delivery Agent</span>
                                                    </div>
                                                </div>

                                                {/* <!-- Event 2 --> */}
                                                <div className="timeline-item d-flex align-items-stretch">
                                                    <div className="timeline-time pe-3 text-muted">Today, 9:00 AM</div>
                                                    <div className="timeline-dot bg-success"></div>
                                                    <div className="timeline-content ps-3 pb-5">
                                                        <h5 className="mb-1">Out for Delivery</h5>
                                                        <p className="mb-1 text-muted">Courier picked up the package for final delivery.</p>
                                                        <p className="mb-1 text-muted fs-xxs">Tracking No: <a href="#!" className="link-primary fw-semibold text-decoration-underline">TRK123456789</a></p>
                                                        <span className="fs-xxs fw-semibold">By Local Courier</span>
                                                    </div>
                                                </div>

                                                {/* <!-- Event 3 --> */}
                                                <div className="timeline-item d-flex align-items-stretch">
                                                    <div className="timeline-time pe-3 text-muted">Yesterday, 3:15 PM</div>
                                                    <div className="timeline-dot bg-success"></div>
                                                    <div className="timeline-content ps-3 pb-5">
                                                        <h5 className="mb-1">Arrived at Local Hub</h5>
                                                        <p className="mb-1 text-muted">Shipment arrived at the nearest delivery center.</p>
                                                        <p className="mb-1 text-muted fs-xxs">Tracking No: <a href="#!" className="link-primary fw-semibold text-decoration-underline">TRK123456789</a></p>
                                                        <span className="fs-xxs fw-semibold">By Sorting Facility</span>
                                                    </div>
                                                </div>

                                                {/* <!-- Event 4 --> */}
                                                <div className="timeline-item d-flex align-items-stretch">
                                                    <div className="timeline-time pe-3 text-muted">Monday, 6:00 PM</div>
                                                    <div className="timeline-dot bg-success"></div>
                                                    <div className="timeline-content ps-3 pb-5">
                                                        <h5 className="mb-1">Departed Transit Facility</h5>
                                                        <p className="mb-1 text-muted">Package left the main transit facility and is en route to the local hub.</p>
                                                        <p className="mb-1 text-muted fs-xxs">Tracking No: <a href="#!" className="link-primary fw-semibold text-decoration-underline">TRK123456789</a></p>
                                                        <span className="fs-xxs fw-semibold">By Central Logistics</span>
                                                    </div>
                                                </div>

                                                {/* <!-- Event 5 --> */}
                                                <div className="timeline-item d-flex align-items-stretch">
                                                    <div className="timeline-time pe-3 text-muted">Monday, 8:00 AM</div>
                                                    <div className="timeline-dot bg-success"></div>
                                                    <div className="timeline-content ps-3 pb-5">
                                                        <h5 className="mb-1">Arrived at Transit Facility</h5>
                                                        <p className="mb-1 text-muted">Package arrived at the central distribution hub for processing.</p>
                                                        <p className="mb-1 text-muted fs-xxs">Tracking No: <a href="#!" className="link-primary fw-semibold text-decoration-underline">TRK123456789</a></p>
                                                        <span className="fs-xxs fw-semibold">By Transit Center</span>
                                                    </div>
                                                </div>

                                                {/* <!-- Event 6 --> */}
                                                <div className="timeline-item d-flex align-items-stretch">
                                                    <div className="timeline-time pe-3 text-muted">Last Saturday, 2:00 PM</div>
                                                    <div className="timeline-dot bg-success"></div>
                                                    <div className="timeline-content ps-3 pb-5">
                                                        <h5 className="mb-1">Dispatched from Warehouse</h5>
                                                        <p className="mb-1 text-muted">Package was picked up and dispatched by carrier from warehouse.</p>
                                                        <p className="mb-1 text-muted fs-xxs">Tracking No: <a href="#!" className="link-primary fw-semibold text-decoration-underline">TRK123456789</a></p>
                                                        <span className="fs-xxs fw-semibold">By Fulfillment Center</span>
                                                    </div>
                                                </div>

                                                {/* <!-- Event 7 --> */}
                                                <div className="timeline-item d-flex align-items-stretch">
                                                    <div className="timeline-time pe-3 text-muted">Last Friday, 5:00 PM</div>
                                                    <div className="timeline-dot bg-success"></div>
                                                    <div className="timeline-content ps-3">
                                                        <h5 className="mb-1">Order Confirmed</h5>
                                                        <p className="mb-1 text-muted">The order was successfully placed and is now being processed.</p>
                                                        <p className="mb-1 text-muted fs-xxs">Tracking No: <a href="#!" className="link-primary fw-semibold text-decoration-underline">TRK123456789</a></p>
                                                        <span className="fs-xxs fw-semibold">By Order System</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end col-xl-9 --> */}

                                {/* <!-- Sidebar --> */}
                                <div className="col-xl-3">
                                    <div className="card">
                                        <div className="card-header justify-content-between border-dashed">
                                            <h4 className="card-title">Customer Details</h4>
                                            <a href="#!" className="btn btn-default btn-sm btn-icon rounded-circle"><i className="ti ti-pencil fs-lg"></i></a>
                                        </div>
                                        {/* <!-- end card-header--> */}

                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-4">
                                                <div className="me-2">
                                                    <img src="/src/assets/images/users/user-5.jpg" alt="avatar" className="rounded-circle avatar-lg" />
                                                </div>
                                                <div>
                                                    <h5 className="mb-1 d-flex align-items-center">
                                                        <a href="#!" className="link-reset">Sophia Carter</a>
                                                        <img src="/src/assets/images/flags/gb.svg" alt="UK" className="ms-2 rounded-circle" height="16" />
                                                    </h5>
                                                    <p className="text-muted mb-0">Since 2020</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-icon btn-ghost-light text-muted" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical fs-xl"></i>
                                                        </a>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a className="dropdown-item" href="#"><i className="ti ti-share me-2"></i> Share</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#"><i className="ti ti-edit me-2"></i> Edit</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#"><i className="ti ti-ban me-2"></i> Block</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item text-danger" href="#"><i className="ti ti-trash me-2"></i> Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="list-unstyled text-muted mb-0">
                                                <li className="mb-2">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar-xs avatar-img-size fs-24">
                                                            <span className="avatar-title text-bg-light fs-sm rounded-circle">
                                                                <i className="ti ti-mail"></i>
                                                            </span>
                                                        </div>
                                                        <h5 className="fs-base mb-0 fw-medium"><a href="#" className="link-reset">sophia@designhub.com</a></h5>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar-xs avatar-img-size fs-24">
                                                            <span className="avatar-title text-bg-light fs-sm rounded-circle">
                                                                <i className="ti ti-phone"></i>
                                                            </span>
                                                        </div>
                                                        <h5 className="fs-base mb-0 fw-medium"><a href="#" className="link-reset">+44 7911 123456</a></h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar-xs avatar-img-size fs-24">
                                                            <span className="avatar-title text-bg-light fs-sm rounded-circle">
                                                                <i className="ti ti-map-pin"></i>
                                                            </span>
                                                        </div>
                                                        <h5 className="fs-base mb-0 fw-medium">London, UK</h5>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- end card-body--> */}
                                    </div>
                                    {/* <!-- end card--> */}

                                    <div className="card">
                                        <div className="card-header justify-content-between border-dashed">
                                            <h4 className="card-title">Shipping Address</h4>
                                            <a href="#!" className="btn btn-default btn-sm btn-icon rounded-circle"><i className="ti ti-pencil fs-lg"></i></a>
                                        </div>
                                        {/* <!-- end card-header --> */}

                                        <div className="card-body">
                                            <iframe
                                                src="https://www.google.com/maps/embed/v1/place?q=New+York+University&key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4"
                                                style={{
                                                    width: "100%",
                                                    height: "180px",
                                                    overflow: "hidden",
                                                    border: 0
                                                }}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="Google Map"
                                            />

                                            <div className="d-flex align-items-start my-3">
                                                <div className="flex-grow-1">
                                                    <h5 className="mb-2">John Doe</h5>
                                                    <p className="text-muted mb-1">
                                                        1234 Elm Street,<br />
                                                        Apt 567,<br />
                                                        Springfield, IL 62704,<br />
                                                        United States
                                                    </p>
                                                    <p className="mb-0 text-muted">
                                                        <strong>Phone:</strong> (123) 456-7890<br />
                                                        <strong>Email:</strong> john.doe@example.com
                                                    </p>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="badge bg-success-subtle text-success">Primary Address</span>
                                                </div>
                                            </div>

                                            <div className="alert alert-warning mb-0">
                                                <h6 className="mb-2">Delivery Instructions:</h6>
                                                <p className="fst-italic mb-0">Please leave the package at the front door if no one is home. Call upon arrival.</p>
                                            </div>
                                        </div>
                                        {/* <!-- end card-body --> */}
                                    </div>
                                    {/* <!-- end card --> */}

                                    <div className="card">
                                        <div className="card-header justify-content-between border-dashed">
                                            <h4 className="card-title">Billing Details</h4>
                                            <a href="#!" className="btn btn-default btn-sm btn-icon rounded-circle"><i className="ti ti-pencil fs-lg"></i></a>
                                        </div>
                                        {/* <!-- end card-header --> */}

                                        <div className="card-body">
                                            {/* <!-- Billing Address --> */}
                                            <div className="d-flex align-items-start mb-0">
                                                <div className="flex-grow-1">
                                                    <h5 className="mb-2">John Doe</h5>
                                                    <p className="text-muted mb-0">
                                                        5678 Oak Avenue,<br />
                                                        Suite 101,<br />
                                                        Chicago, IL 60611,<br />
                                                        United States
                                                    </p>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="badge bg-primary-subtle text-primary">Billing Address</span>
                                                </div>
                                            </div>

                                            <hr />

                                            {/* <!-- Card Details --> */}
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-sm me-2">
                                                    <img src="/src/assets/images/cards/mastercard.svg" alt="Mastercard" className="img-fluid rounded" />
                                                </div>
                                                <div>
                                                    <h5 className="fs-xs mb-1">Mastercard Ending in 4242</h5>
                                                    <p className="text-muted mb-0 fs-xs">Expiry: 08/26</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="badge bg-success-subtle text-success">Paid</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end card-body --> */}
                                    </div>
                                    {/* <!-- end card --> */}
                                </div>
                                {/* <!-- end col-xl-3 --> */}
                            </div>
                            {/* <!-- end row --> */}
                        </div>
                        {/* <!-- end col-xxl-10 --> */}
                    </div>
                    {/* <!-- end row --> */}
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
