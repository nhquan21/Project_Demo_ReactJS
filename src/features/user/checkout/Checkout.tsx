import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { useAuth } from "../../../guards/AuthContext";


export const Checkout = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
    const totalPriceItem = (price: number, qty: number) => price * qty;
    const { user } = useAuth();
    return (
        <>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Checkout</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                <li className="breadcrumb-item active">Checkout</li>
                            </ol>
                        </div>
                    </div>


                    {/* <!-- Cart Layout --> */}
                    <div className="row">
                        {/* <!-- Cart Items --> */}
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="ins-wizard" data-wizard>
                                        {/* <!-- Navigation Tabs --> */}
                                        <ul className="nav nav-tabs nav-justified wizard-tabs" data-wizard-nav role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link py-2 active" data-bs-toggle="tab" href="#stuInfo">
                                                    <span className="d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-user-circle fs-24"></i>
                                                        <span className="ms-2 text-truncate">
                                                            <span className="mb-0 lh-base d-block fw-semibold text-body fs-md">Billing Info</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link py-2" data-bs-toggle="tab" href="#addrInfo">
                                                    <span className="d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-truck fs-24"></i>
                                                        <span className="ms-2 text-truncate">
                                                            <span className="mb-0 lh-base d-block fw-semibold text-body fs-md">Shipping Info</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link py-2" data-bs-toggle="tab" href="#courseInfo">
                                                    <span className="d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-credit-card fs-24"></i>
                                                        <span className="ms-2 text-truncate">
                                                            <span className="mb-0 lh-base d-block fw-semibold text-body fs-md">Payment Info</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link py-2" data-bs-toggle="tab" href="#parentInfo">
                                                    <span className="d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-checks fs-24"></i>
                                                        <span className="ms-2 text-truncate">
                                                            <span className="mb-0 lh-base d-block fw-semibold text-body fs-md">Finish</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>

                                        {/* <!-- Content --> */}
                                        <div className="tab-content pt-3" data-wizard-content>
                                            {/* <!-- Step 1: Billing Info --> */}
                                            <div className="tab-pane fade show active" id="stuInfo">
                                                <h5 className="my-1 fs-md">Billing Information</h5>

                                                <p className="text-muted fs-sm mb-4">Fill the form below in order to send you the order's invoice.</p>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="billing-first-name" className="form-label">First Name</label>
                                                                <input className="form-control" type="text" placeholder="Enter your first name" value={user?.username} id="billing-first-name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Country</label>
                                                                <select className="form-select">
                                                                    <option value="0">Select Country</option>
                                                                    <option value="AF">Afghanistan</option>
                                                                    <option value="AL">Albania</option>
                                                                    <option value="DZ">Algeria</option>
                                                                    <option value="AS">American Samoa</option>
                                                                    <option value="AD">Andorra</option>
                                                                    <option value="AO">Angola</option>
                                                                </select>
                                                            </div>
                                                    </div>
                                                    </div>
                                                    {/* <!-- end row --> */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="billing-email-address" className="form-label">Email <span className="text-danger">*</span></label>
                                                                <input className="form-control" type="email" placeholder="Enter your email" id="billing-email-address" value={user?.email}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="billing-phone" className="form-label">Phone <span className="text-danger">*</span></label>
                                                                <input className="form-control" type="text" placeholder="(xx) xxx xxxx xxx" id="billing-phone" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* <!-- end row --> */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="billing-town-city" className="form-label">Town / City</label>
                                                                <input className="form-control" type="text" placeholder="Enter your city name" id="billing-town-city" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="billing-zip-postal" className="form-label">Zip / Postal Code</label>
                                                                <input className="form-control" type="text" placeholder="Enter your zip code" id="billing-zip-postal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- end row --> */}

                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="mb-3">
                                                                <label htmlFor="billing-address" className="form-label">Address <span className="text-danger">*</span></label>
                                                                <textarea className="form-control" id="billing-address" rows={2} placeholder="Enter your address"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- end row --> */}
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="mb-3">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="customCheck2" />
                                                                    <label className="form-check-label" htmlFor="customCheck2">Ship to different address ?</label>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3 mt-3">
                                                                <label htmlFor="example-textarea" className="form-label">Order Notes:</label>
                                                                <textarea className="form-control" id="example-textarea" rows={3} placeholder="Write some note.."></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- end row --> */}
                                                </form>
                                                <div className="d-flex justify-content-end mt-3">
                                                    <button type="button" className="btn btn-primary" data-wizard-next>Proceed to Shipping <i className="ti ti-truck ms-1 fs-lg"></i></button>
                                                </div>
                                            </div>

                                            {/* <!-- Step 2: Address Info --> */}
                                            <div className="tab-pane fade" id="addrInfo">
                                                <h5 className="my-1 fs-md">Saved Address</h5>
                                                <p className="text-muted fs-sm mb-4">Provide your address details to receive the order invoice.</p>

                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="mb-3">
                                                            <div className="form-check card-radio card-radio-bordered">
                                                                <input className="form-check-input" type="radio" name="deli-address" id="add-home" checked />
                                                                <label className="form-check-label p-3 w-100" htmlFor="add-home">
                                                                    <span className="fw-bold text-muted mb-1 d-block text-uppercase">Home</span>
                                                                    <span className="fw-semibold d-block">Evelyn Carter</span>
                                                                    2418 Maple Street, Apt 12B<br />
                                                                    Brooklyn, NY 11215<br />
                                                                    <abbr title="Phone">P:</abbr> (917) 432-7784 <br />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="mb-3">
                                                            <div className="form-check card-radio card-radio-bordered">
                                                                <input className="form-check-input" type="radio" name="deli-address" id="add-office" />
                                                                <label className="form-check-label p-3 w-100" htmlFor="add-office">
                                                                    <span className="fw-bold text-muted mb-1 d-block text-uppercase">Office</span>
                                                                    <span className="fw-semibold d-block">Marcus Reynolds</span>
                                                                    500 Howard Street, Floor 8<br />
                                                                    San Francisco, CA 94105<br />
                                                                    <abbr title="Phone">P:</abbr> (415) 392-6400 <br />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <h5 className="my-1 fs-md">Add New Address</h5>
                                                <p className="text-muted fs-sm mb-4">Provide your address details to receive the order invoice.</p>

                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="shipping-add-first-name" className="form-label">Full Name</label>
                                                                <input className="form-control" type="text" value={user?.username} placeholder="Enter your first name" id="shipping-add-first-name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- end row --> */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="shipping-add-email-address" className="form-label">Email <span className="text-danger">*</span></label>
                                                                <input className="form-control" type="email" placeholder="Enter your email" id="shipping-add-email-address" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="shipping-add-phone" className="form-label">Phone <span className="text-danger">*</span></label>
                                                                <input className="form-control" type="text" placeholder="(xx) xxx xxxx xxx" id="shipping-add-phone" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- end row --> */}
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="mb-3">
                                                                <label htmlFor="shipping-add-address" className="form-label">Address <span className="text-danger">*</span></label>
                                                                <textarea className="form-control" id="shipping-add-address" rows={2} placeholder="Enter your address"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- end row --> */}
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label htmlFor="shipping-add-town-city" className="form-label">Town / City</label>
                                                                <input className="form-control" type="text" placeholder="Enter your city name" id="shipping-add-town-city" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label htmlFor="shipping-add-state" className="form-label">State</label>
                                                                <input className="form-control" type="text" placeholder="Enter your state" id="shipping-add-state" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label htmlFor="shipping-add-zip-postal" className="form-label">Zip / Postal Code</label>
                                                                <input className="form-control" type="text" placeholder="Enter your zip code" id="shipping-add-zip-postal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- end row --> */}
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="mb-3">
                                                                <label className="form-label">Country</label>
                                                                <select className="form-select">
                                                                    <option value="0">Select Country</option>
                                                                    <option value="AE">United Arab Emirates</option>
                                                                    <option value="GB">United Kingdom</option>
                                                                    <option value="US">United States</option>
                                                                    <option value="UY">Uruguay</option>
                                                                    <option value="UZ">Uzbekistan</option>
                                                                    <option value="VU">Vanuatu</option>
                                                                    <option value="VE">Venezuela</option>
                                                                    <option value="VN">Viet Nam</option>
                                                                    <option value="VG">Virgin Islands (British)</option>
                                                                    <option value="VI">Virgin Islands (U.S.)</option>
                                                                    <option value="WF">Wallis and Futuna Islands</option>
                                                
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- end row --> */}
                                                    <div className="d-flex justify-content-end">
                                                        <button type="button" className="btn btn-sm btn-success">Save</button>
                                                    </div>
                                                </form>

                                                <h5 className="my-1 fs-md">Shipping Method</h5>
                                                <p className="text-muted fs-sm mb-3">Choose your preferred shipping method to receive your order on time.</p>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="border p-3 rounded mb-3 mb-md-0">
                                                            <div className="form-check">
                                                                <input type="radio" id="shippingMethodRadio1" name="shippingOptions" className="form-check-input" checked />
                                                                <label className="form-check-label font-16 fw-bold" htmlFor="shippingMethodRadio1">Standard Delivery - FREE</label>
                                                            </div>
                                                            <p className="mb-0 ps-3 pt-1 text-muted">Estimated 5-7 days shipping (Duties and tax may be due upon delivery)</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="border p-3 rounded">
                                                            <div className="form-check">
                                                                <input type="radio" id="shippingMethodRadio2" name="shippingOptions" className="form-check-input" />
                                                                <label className="form-check-label font-16 fw-bold" htmlFor="shippingMethodRadio2">Fast Delivery - $25</label>
                                                            </div>
                                                            <p className="mb-0 ps-3 pt-1 text-muted">Estimated 1-2 days shipping (Duties and tax may be due upon delivery)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end row--> */}

                                                <div className="d-flex justify-content-between mt-3">
                                                    <button type="button" className="btn btn-secondary" data-wizard-prev>← Billing Info</button>
                                                    <button type="button" className="btn btn-primary" data-wizard-next>Payment Info →</button>
                                                </div>
                                            </div>

                                            {/* <!-- Step 3: Course Info --> */}
                                            <div className="tab-pane fade" id="courseInfo">
                                                <h5 className="my-1 fs-md">Payment Method</h5>
                                                <p className="text-muted fs-sm mb-3">Select your preferred payment method to complete your purchase securely.</p>

                                                {/* <!-- Pay with Paypal box--> */}
                                                <div className="border p-3 mb-3 rounded">
                                                    <div className="row">
                                                        <div className="col-sm-8">
                                                            <div className="form-check">
                                                                <input type="radio" id="BillingOptRadio2" name="billingOptions" className="form-check-input" />
                                                                <label className="form-check-label font-16 fw-bold" htmlFor="BillingOptRadio2">Pay with Paypal</label>
                                                            </div>
                                                            <p className="mb-0 ps-3 pt-1 text-muted">You will be redirected to PayPal website to complete your purchase securely.</p>
                                                        </div>
                                                        <div className="col-sm-4 text-sm-end mt-3 mt-sm-0">
                                                            <img src="/src/assets/images/cards/paypal.svg" height="32" alt="paypal-img" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end Pay with Paypal box--> */}

                                                {/* <!-- Credit/Debit Card box--> */}
                                                <div className="border p-3 mb-3 rounded">
                                                    <div className="row">
                                                        <div className="col-sm-8">
                                                            <div className="form-check">
                                                                <input type="radio" id="BillingOptRadio1" name="billingOptions" className="form-check-input" checked />
                                                                <label className="form-check-label font-16 fw-bold" htmlFor="BillingOptRadio1">Credit / Debit Card</label>
                                                            </div>
                                                            <p className="mb-0 ps-3 pt-1 text-muted">Safe money transfer using your bank account. We support Mastercard, Visa, Discover and Stripe.</p>
                                                        </div>
                                                        <div className="col-sm-4 text-sm-end mt-3 mt-sm-0">
                                                            <img src="/src/assets/images/cards/mastercard.svg" height="32" alt="master-card-img" />
                                                            <img src="/src/assets/images/cards/discover-card.svg" height="32" alt="discover-card-img" />
                                                            <img src="/src/assets/images/cards/visa.svg" height="32" alt="visa-card-img" />
                                                            <img src="/src/assets/images/cards/stripe.svg" height="32" alt="stripe-card-img" />
                                                        </div>
                                                    </div>
                                                    {/* <!-- end row --> */}
                                                    <div className="row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="alert alert-warning fs-xs py-2">Enjoy an extra <span className="fw-bold">10% discount</span> when you pay with your <span className="fw-bold">Credit Card</span>.</div>

                                                            <div className="mb-3">
                                                                <label htmlFor="card-number" className="form-label">Card Number</label>
                                                                <input type="text" id="card-number" className="form-control" data-toggle="input-mask" data-mask-format="0000 0000 0000 0000" placeholder="4242 4242 4242 4242" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- end row --> */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3 mb-md-0">
                                                                <label htmlFor="card-name-on" className="form-label">Name on card</label>
                                                                <input type="text" id="card-name-on" className="form-control" placeholder="Master Dhanu" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="mb-3 mb-md-0">
                                                                <label htmlFor="card-expiry-date" className="form-label">Expiry date</label>
                                                                <input type="text" id="card-expiry-date" className="form-control" data-toggle="input-mask" data-mask-format="00/00" placeholder="MM/YY" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="mb-0">
                                                                <label htmlFor="card-cvv" className="form-label">CVV code</label>
                                                                <input type="text" id="card-cvv" className="form-control" data-toggle="input-mask" data-mask-format="000" placeholder="012" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- end row --> */}
                                                </div>
                                                {/* <!-- end Credit/Debit Card box--> */}

                                                {/* <!-- Pay with Payoneer box--> */}
                                                <div className="border p-3 mb-3 rounded">
                                                    <div className="row">
                                                        <div className="col-sm-8">
                                                            <div className="form-check">
                                                                <input type="radio" id="BillingOptRadio3" name="billingOptions" className="form-check-input" />
                                                                <label className="form-check-label font-16 fw-bold" htmlFor="BillingOptRadio3">Pay with Payoneer</label>
                                                            </div>
                                                            <p className="mb-0 ps-3 pt-1 text-muted">You will be redirected to Payoneer website to complete your purchase securely.</p>
                                                        </div>
                                                        <div className="col-sm-4 text-sm-end mt-3 mt-sm-0">
                                                            <img src="/src/assets/images/cards/payoneer.svg" height="32" alt="payoneer" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end Pay with Payoneer box--> */}

                                                {/* <!-- Cash on Delivery box--> */}
                                                <div className="border p-3 mb-3 rounded">
                                                    <div className="row">
                                                        <div className="col-sm-8">
                                                            <div className="form-check">
                                                                <input type="radio" id="BillingOptRadio4" name="billingOptions" className="form-check-input" />
                                                                <label className="form-check-label font-16 fw-bold" htmlFor="BillingOptRadio4">Cash on Delivery</label>
                                                            </div>
                                                            <p className="mb-0 ps-3 pt-1 text-muted">Pay with cash when your order is delivered.</p>
                                                        </div>
                                                        <div className="col-sm-4 text-sm-end mt-3 mt-sm-0">
                                                            <img src="/src/assets/images/cards/cod.png" height="24" alt="COD-img" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end Cash on Delivery box--> */}

                                                <div className="d-flex justify-content-between mt-3">
                                                    <button type="button" className="btn btn-secondary" data-wizard-prev>← Shipping Info</button>
                                                    <button type="button" className="btn btn-primary" data-wizard-next>Proceed →</button>
                                                </div>
                                            </div>

                                            {/* <!-- Step 4: Parent Info --> */}
                                            <div className="tab-pane fade" id="parentInfo">
                                                <div className="p-4">
                                                    <div className="d-flex align-items-center gap-3 mb-3">
                                                        <div className="avatar-md flex-shrink-0">
                                                            <span className="avatar-title text-bg-success rounded-circle fs-22">
                                                                <i className="ti ti-check"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="text-muted mb-0">Order #234000</p>
                                                            <h4 className="m-0">Thank you for your order!</h4>
                                                        </div>
                                                        <a href="#" className="link-reset text-decoration-underline link-offset-2 fw-semibold ms-auto">Track Order</a>
                                                    </div>

                                                    <hr className="border-top border-dashed" />

                                                    <div className="mt-4">
                                                        <h6 className="text-uppercase text-muted fw-bold">Delivery Address</h6>
                                                        <span className="fw-semibold d-block mb-1">Marcus Reynolds</span>
                                                        500 Howard Street, Floor 8<br />
                                                        San Francisco, CA 94105<br />
                                                        <abbr title="Phone">P:</abbr> (415) 392-6400 <br />
                                                    </div>

                                                    <div className="mt-4">
                                                        <h6 className="text-uppercase text-muted fw-bold">Payment Info</h6>
                                                        <p>Credit card: xxxx xxxx xxxx 8521</p>
                                                    </div>

                                                    <div className="mt-4">
                                                        <a href="#!" className="btn btn-success"><i className="ti ti-download me-1"></i> Download Invoice</a>
                                                        <a href="apps-ecommerce-products-grid.html" className="btn btn-link fw-semibold text-muted"><i className="ti ti-arrow-left me-1"></i> Continue Shopping</a>
                                                    </div>

                                                    <div className="p-4 alert alert-info mt-4 mb-0">
                                                        <h4 className="text-center pb-2 mb-1 text-dark">🎁 Great News! You’ve unlocked 25% off your next order!</h4>
                                                        <p className="text-center fst-italic mb-4">Apply the code below at checkout or find it anytime in your account.</p>
                                                        <div className="d-flex gap-2 mx-auto">
                                                            <input type="text" className="form-control border-0" value="SAVE25NOW" />
                                                            <button type="button" className="btn btn-dark text-nowrap">Copy Code</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- tab-content --> */}
                                    </div>
                                    {/* <!-- ins-wizard --> */}
                                </div>
                            </div>
                        </div>

                        {/* <!-- Order Summary --> */}
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Order Summary</h4>
                                    <span className="badge badge-soft-success ms-auto">{cartItems.length} Items</span>
                                </div>
                                <div className="card-body">
                                    {cartItems.map(item => (
                                        <div className="d-flex align-items-center gap-3 mb-3">
                                            <img src={item.image} className="me-1 rounded" width="42" alt="MacBook Air" />
                                            <div>
                                                <p className="mb-1 fw-semibold">
                                                    <a href="apps-ecommerce-product-details.html" className="link-reset">{item.name}</a>
                                                </p>
                                                <p className="text-muted d-block mb-0">{item.quantity} x ${item.price.toLocaleString('vi-VN')}</p>
                                            </div>
                                            <h5 className="mb-0 ms-auto">${totalPriceItem(item.price, item.quantity).toLocaleString('vi-VN')}</h5>
                                        </div>
                                    ))}

                                    <hr />

                                    <ul className="list-unstyled mb-0">
                                        <li className="d-flex justify-content-between mb-2">
                                            <span className="text-muted">Subtotal:</span>
                                            <span>$1,947.00</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span className="text-muted">Discount:</span>
                                            <span className="text-danger">- $120.00</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span className="text-muted">Tax collected:</span>
                                            <span>$65.85</span>
                                        </li>
                                        <li className="d-flex justify-content-between border-bottom pb-3 mb-3">
                                            <span className="text-muted">Shipping:</span>
                                            <span>Free</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <h6 className="text-uppercase text-muted mb-0">Estimated total:</h6>
                                            <h4 className="fw-bold mb-0">${totalAmount.toLocaleString('vi-VN')}</h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* <!-- Promo --> */}
                            <div className="card">
                                <div className="card-body">
                                    <p className="text-muted mb-0">🎉 Congratulations! You’ve earned <span className="fw-bold text-success">239 bonus points</span>!</p>
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
