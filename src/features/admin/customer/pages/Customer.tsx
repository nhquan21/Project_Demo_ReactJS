

export const Customer = () => {
    return (
        <>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Customers</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                <li className="breadcrumb-item active">Customers</li>
                            </ol>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xxl-12">
                            <div data-table data-table-rows-per-page="8" className="card">
                                <div className="card-header border-light d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div className="d-flex gap-2">
                                        <div className="app-search">
                                            <input data-table-search type="search" className="form-control" placeholder="Search customer..." />
                                            <i className="ti ti-search app-search-icon text-muted"></i>
                                        </div>
                                        <button data-table-delete-selected className="btn btn-danger d-none">Delete</button>
                                    </div>

                                    <div className="d-flex align-items-center gap-2">
                                        {/* <!-- Records Per Page --> */}
                                        <div>
                                            <select data-table-set-rows-per-page className="form-select form-control my-1 my-md-0">
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="15">15</option>
                                                <option value="20">20</option>
                                            </select>
                                        </div>

                                        {/* <!-- Export Dropdown --> */}
                                        <div className="dropdown">
                                            <button className="btn btn-default dropdown-toggle drop-arrow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-download me-1"></i> Export <i className="ti ti-chevron-down align-middle ms-1"></i></button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><a className="dropdown-item" href="#">Export as PDF</a></li>
                                                <li><a className="dropdown-item" href="#">Export as CSV</a></li>
                                                <li><a className="dropdown-item" href="#">Export as Excel</a></li>
                                            </ul>
                                        </div>

                                        {/* <!-- Add New Button --> */}
                                        <a href="#!" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCustomerModal"> <i className="ti ti-plus me-1 fs-sm"></i> Add Customer </a>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-custom table-centered table-select table-hover w-100 mb-0">
                                        <thead className="bg-light bg-opacity-25 thead-sm">
                                            <tr className="text-uppercase fs-xxs">
                                                <th className="ps-3" style={{width: "1%"}}>
                                                    <input data-table-select-all className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" id="select-all-products" />
                                                </th>
                                                <th data-table-sort="customer">Clients Name</th>
                                                <th data-table-sort>Email</th>
                                                <th data-table-sort>Phone</th>
                                                <th data-table-sort>Country</th>
                                                <th data-table-sort>Joined</th>
                                                <th data-table-sort>Orders</th>
                                                <th data-table-sort>Total Spends</th>
                                                <th className="text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        {/* <!-- end table-head --> */}
                                        <tbody>
                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="/src/assets/images/users/user-7.jpg" alt="avatar-7" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="customer" href="#!" className="link-reset">Carlos Méndez</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>carlos@techlaunch.mx</td>
                                                <td>+1 (415) 992-3412</td>
                                                <td><img src="/src/assets/images/flags/us.svg" alt="" className="rounded-circle me-1" height="16" /> United States</td>
                                                <td>2 Feb, 2024 <small className="text-muted">08:34 AM</small></td>
                                                <td>58</td>
                                                <td>$198.25</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"> <i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="/src/assets/images/users/user-2.jpg" alt="avatar-2" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="customer" href="#!" className="link-reset">Sophie Laurent</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>sophie.laurent@eurotech.fr</td>
                                                <td>+33 6 12 34 56 78</td>
                                                <td><img src="/src/assets/images/flags/fr.svg" alt="" className="rounded-circle me-1" height="16" /> France</td>
                                                <td>15 Mar, 2024 <small className="text-muted">10:22 AM</small></td>
                                                <td>42</td>
                                                <td>$245.80</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"> <i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="/src/assets/images/users/user-3.jpg" alt="avatar-3" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="customer" href="#!" className="link-reset">Akira Tanaka</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>akira.tanaka@techjapan.co.jp</td>
                                                <td>+81 90-1234-5678</td>
                                                <td><img src="/src/assets/images/flags/jp.svg" alt="" className="rounded-circle me-1" height="16" /> Japan</td>
                                                <td>28 Jan, 2024 <small className="text-muted">03:15 PM</small></td>
                                                <td>75</td>
                                                <td>$320.50</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"> <i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="/src/assets/images/users/user-4.jpg" alt="avatar-4" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="customer" href="#!" className="link-reset">Emma Watson</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>emma.watson@britinnovate.uk</td>
                                                <td>+44 7700 900123</td>
                                                <td><img src="/src/assets/images/flags/gb.svg" alt="" className="rounded-circle me-1" height="16" /> United Kingdom</td>
                                                <td>10 Apr, 2024 <small className="text-muted">09:47 AM</small></td>
                                                <td>29</td>
                                                <td>$175.30</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"> <i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="/src/assets/images/users/user-5.jpg" alt="avatar-5" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="customer" href="#!" className="link-reset">Lucas Schmidt</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>lucas.schmidt@techdeutsch.de</td>
                                                <td>+49 151 23456789</td>
                                                <td><img src="/src/assets/images/flags/de.svg" alt="" className="rounded-circle me-1" height="16" /> Germany</td>
                                                <td>20 Feb, 2024 <small className="text-muted">02:10 PM</small></td>
                                                <td>63</td>
                                                <td>$280.75</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"> <i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="/src/assets/images/users/user-6.jpg" alt="avatar-6" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="customer" href="#!" className="link-reset">Isabella Rossi</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>isabella.rossi@italiatech.it</td>
                                                <td>+39 333 4567890</td>
                                                <td><img src="/src/assets/images/flags/it.svg" alt="" className="rounded-circle me-1" height="16" /> Italy</td>
                                                <td>5 Mar, 2024 <small className="text-muted">11:25 AM</small></td>
                                                <td>51</td>
                                                <td>$210.40</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"> <i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="/src/assets/images/users/user-8.jpg" alt="avatar-8" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="customer" href="#!" className="link-reset">Mateo Vargas</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>mateo.vargas@latamtech.ar</td>
                                                <td>+54 9 11 2345 6789</td>
                                                <td><img src="/src/assets/images/flags/ar.svg" alt="" className="rounded-circle me-1" height="16" /> Argentina</td>
                                                <td>18 Apr, 2024 <small className="text-muted">04:50 PM</small></td>
                                                <td>37</td>
                                                <td>$190.20</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"> <i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="/src/assets/images/users/user-9.jpg" alt="avatar-9" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="customer" href="#!" className="link-reset">Priya Sharma</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>priya.sharma@indotech.in</td>
                                                <td>+91 98765 43210</td>
                                                <td><img src="/src/assets/images/flags/in.svg" alt="" className="rounded-circle me-1" height="16" /> India</td>
                                                <td>10 Jan, 2024 <small className="text-muted">06:30 AM</small></td>
                                                <td>82</td>
                                                <td>$350.90</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"> <i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="/src/assets/images/users/user-10.jpg" alt="avatar-10" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="customer" href="#!" className="link-reset">Liam O’Connor</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>liam.oconnor@ausinnovate.au</td>
                                                <td>+61 400 123 456</td>
                                                <td><img src="/src/assets/images/flags/au.svg" alt="" className="rounded-circle me-1" height="16" /> Australia</td>
                                                <td>25 Mar, 2024 <small className="text-muted">01:15 PM</small></td>
                                                <td>45</td>
                                                <td>$230.65</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"> <i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="/src/assets/images/users/user-1.jpg" alt="avatar-1" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="customer" href="#!" className="link-reset">Olga Petrova</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>olga.petrova@rus-tech.ru</td>
                                                <td>+7 912 345 67 89</td>
                                                <td><img src="/src/assets/images/flags/ru.svg" alt="" className="rounded-circle me-1" height="16" /> Russia</td>
                                                <td>8 Feb, 2024 <small className="text-muted">07:40 AM</small></td>
                                                <td>68</td>
                                                <td>$295.15</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default btn-icon btn-sm"> <i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"> <i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        {/* <!-- end table-body --> */}
                                    </table>
                                    {/* <!-- end table --> */}
                                </div>
                                <div className="card-footer border-0">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div data-table-pagination-info="customers"></div>

                                        <div data-table-pagination></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}

                    {/* <!-- Add New Customer Modal --> */}
                    <div className="modal fade" id="addCustomerModal" tabIndex={-1} aria-labelledby="addCustomerModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="addCustomerModalLabel">Add New Customer</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <form id="addCustomerForm">
                                    <div className="modal-body">
                                        <div className="row g-3">
                                            {/* <!-- Full Name --> */}
                                            <div className="col-md-6">
                                                <label htmlFor="customerName" className="form-label">Full Name</label>
                                                <input type="text" className="form-control" id="customerName" placeholder="e.g. Carlos Méndez" required />
                                            </div>

                                            {/* <!-- Email --> */}
                                            <div className="col-md-6">
                                                <label htmlFor="customerEmail" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="customerEmail" placeholder="e.g. carlos@domain.com" required />
                                            </div>

                                            {/* <!-- Phone --> */}
                                            <div className="col-md-6">
                                                <label htmlFor="customerPhone" className="form-label">Phone</label>
                                                <input type="tel" className="form-control" id="customerPhone" placeholder="+1 (415) 992-3412" required />
                                            </div>

                                            {/* <!-- Country --> */}
                                            <div className="col-md-6">
                                                <label htmlFor="customerCountry" className="form-label">Country</label>
                                                <select className="form-select" id="customerCountry" required>
                                                    <option value="">Select Country</option>
                                                    <option value="United States">🇺🇸 United States</option>
                                                    <option value="Canada">🇨🇦 Canada</option>
                                                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                                                    <option value="India">🇮🇳 India</option>
                                                    {/* <!-- Add more countries as needed --> */}
                                                </select>
                                            </div>

                                            {/* <!-- Avatar Upload --> */}
                                            <div className="col-md-6">
                                                <label htmlFor="customerAvatar" className="form-label">Avatar</label>
                                                <input type="file" className="form-control" id="customerAvatar" accept="image/*" />
                                            </div>

                                            {/* <!-- Joined Date --> */}
                                            <div className="col-md-6">
                                                <label htmlFor="joinedDate" className="form-label">Join Date</label>
                                                <input type="date" className="form-control" id="joinedDate" data-provider="flatpickr" data-date-format="d M, Y" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                        <button type="submit" className="btn btn-primary">Add Customer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end modal--> */}
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
