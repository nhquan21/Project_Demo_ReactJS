

export const OrderCreate = () => {
    return (
        <>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Add/Edit Order</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                <li className="breadcrumb-item active">Add/Edit Order</li>
                            </ol>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">Create Order</h4>
                                </div>
                                <div className="card-body">
                                    <form id="orderForm">
                                        <div className="row g-3">
                                            {/* <!-- Order ID --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Order ID</label>
                                                <input type="text" className="form-control" id="orderId" placeholder="#WB20100" disabled />
                                            </div>

                                            {/* <!-- Order Date --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Order Date</label>
                                                <input type="datetime-local" data-provider="flatpickr" data-altFormat="F j, Y" className="form-control flatpickr-input" id="orderDate" required />
                                            </div>

                                            {/* <!-- Customer Name --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Customer Name</label>
                                                <input type="text" className="form-control" id="customerName" placeholder="Mason Carter" required />
                                            </div>

                                            {/* <!-- Customer Email --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Customer Email</label>
                                                <input type="email" className="form-control" id="customerEmail" placeholder="mason.carter@shopmail.com" required />
                                            </div>

                                            {/* <!-- Product Name --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Product Name</label>
                                                <select className="form-select" id="productName" required>
                                                    <option value="" selected disabled>Select Product</option>
                                                    <option value="iPhone 15 Pro">iPhone 15 Pro</option>
                                                    <option value="MacBook Air M3">MacBook Air M3</option>
                                                    <option value="iPad Pro 13″ (M4)">iPad Pro 13″ (M4)</option>
                                                    <option value="Apple Watch Ultra 2">Apple Watch Ultra 2</option>
                                                    <option value="AirPods Pro (2nd Gen)">AirPods Pro (2nd Gen)</option>
                                                </select>
                                            </div>

                                            {/* <!-- Quantity --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Quantity</label>
                                                <input type="number" className="form-control" id="quantity" min="1" value="1" required />
                                            </div>

                                            {/* <!-- Amount --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Amount ($)</label>
                                                <input type="number" step="0.01" className="form-control" id="amount" placeholder="129.45" required />
                                            </div>

                                            {/* <!-- Payment Status --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Payment Status</label>
                                                <select className="form-select" id="paymentStatus" required>
                                                    <option value="Paid">Paid</option>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Failed">Failed</option>
                                                </select>
                                            </div>

                                            {/* <!-- Order Status --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Order Status</label>
                                                <select className="form-select" id="orderStatus" required>
                                                    <option value="Ordered">Ordered</option>
                                                    <option value="Processing">Processing</option>
                                                    <option value="Delivered">Delivered</option>
                                                    <option value="Cancelled">Cancelled</option>
                                                    <option value="Returned">Returned</option>
                                                </select>
                                            </div>

                                            {/* <!-- Payment Method --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Payment Method</label>
                                                <select className="form-select" id="paymentMethod" required>
                                                    <option value="Visa">Visa</option>
                                                    <option value="Mastercard">Mastercard</option>
                                                    <option value="PayPal">PayPal</option>
                                                    <option value="COD">Cash on Delivery</option>
                                                </select>
                                            </div>

                                            {/* <!-- Card Number --> */}
                                            <div className="col-md-6">
                                                <label className="form-label">Card Last 4 Digits</label>
                                                <input type="text" maxLength={4} className="form-control" id="cardNumber" placeholder="7832" />
                                            </div>

                                            {/* <!-- Action Buttons --> */}
                                            <div className="col-12 text-center">
                                                <button type="button" className="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Save Order</button>
                                            </div>
                                        </div>
                                        {/* <!-- end row --> */}
                                    </form>
                                </div>
                                {/* <!-- end card-body--> */}
                            </div>
                            {/* <!-- end card--> */}
                        </div>
                        {/* <!-- end col--> */}
                    </div>
                    {/* <!-- end row--> */}
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
