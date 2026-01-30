

export const Dashboard = () => {
    return (
        <div className="content-page">
            <div className="container-fluid">
                <div className="page-title-head d-flex align-items-center">
                    <div className="flex-grow-1">
                        <h4 className="page-main-title m-0">CRM</h4>
                    </div>

                    <div className="text-end">
                        <ol className="breadcrumb m-0 py-0">
                            <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                            <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                            <li className="breadcrumb-item active">CRM</li>
                        </ol>
                    </div>
                </div>


                <div className="row">
                    {/* <!-- Leads Generated --> */}
                    <div className="col-md-6 col-xxl-3">
                        <div className="card card-h-100">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <h5 className="text-muted fs-sm text-uppercase text-truncate" title="Leads Generated">Leads Generated</h5>
                                        <div className="d-flex align-items-center gap-2 my-3">
                                            <div className="avatar-md flex-shrink-0">
                                                <span className="avatar-title text-bg-light rounded-circle fs-22">
                                                    <i className="ti ti-users"></i>
                                                </span>
                                            </div>
                                            {/* <!-- avatar-md --> */}
                                            <h3 className="mb-0 fw-bold"><span data-target="48.2">0</span>k</h3>
                                        </div>
                                        {/* <!-- stat-container --> */}
                                        <p className="mb-0 text-muted">
                                            <span className="text-success me-2">5.12% <i className="ti ti-trending-up ms-1"></i></span>
                                            <span className="text-nowrap">2.3k Up</span>
                                        </p>
                                    </div>
                                    {/* <!-- col-6 --> */}

                                    <div className="col-6">
                                        <div className="text-end">
                                            <div id="leads-generated-chart"></div>
                                        </div>
                                        {/* <!-- text-end --> */}
                                    </div>
                                    {/* <!-- col-6 --> */}
                                </div>
                                {/* <!-- row align-items-center --> */}
                            </div>
                            {/* <!-- card-body --> */}
                        </div>
                        {/* <!-- card --> */}
                    </div>
                    {/* <!-- col --> */}

                    {/* <!-- Qualified Leads --> */}
                    <div className="col-md-6 col-xxl-3">
                        <div className="card card-h-100">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <h5 className="text-muted fs-sm text-uppercase text-truncate" title="Qualified Leads">Qualified Leads</h5>
                                        <div className="d-flex align-items-center gap-2 my-3">
                                            <div className="avatar-md flex-shrink-0">
                                                <span className="avatar-title text-bg-light rounded-circle fs-22">
                                                    <i className="ti ti-user-check"></i>
                                                </span>
                                            </div>
                                            {/* <!-- avatar-md --> */}
                                            <h3 className="mb-0 fw-bold"><span data-target="12.8">0</span>k</h3>
                                        </div>
                                        {/* <!-- stat-container --> */}
                                        <p className="mb-0 text-muted">
                                            <span className="text-danger me-2">3.45% <i className="ti ti-trending-down ms-1"></i></span>
                                            <span className="text-nowrap">0.4k Down</span>
                                        </p>
                                    </div>
                                    {/* <!-- col-6 --> */}

                                    <div className="col-6">
                                        <div className="d-flex justify-content-end">
                                            <div id="qualified-leads-chart" className="text-end"></div>
                                        </div>
                                        {/* <!-- text-end --> */}
                                    </div>
                                    {/* <!-- col-6 --> */}
                                </div>
                                {/* <!-- row align-items-center --> */}
                            </div>
                            {/* <!-- card-body --> */}
                        </div>
                        {/* <!-- card --> */}
                    </div>
                    {/* <!-- col --> */}

                    {/* <!-- Deals Closed --> */}
                    <div className="col-md-6 col-xxl-3">
                        <div className="card card-h-100">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <h5 className="text-muted fs-sm text-uppercase text-truncate" title="Deals Closed">Deals Closed</h5>
                                        <div className="d-flex align-items-center gap-2 my-3">
                                            <div className="avatar-md flex-shrink-0">
                                                <span className="avatar-title text-bg-light rounded-circle fs-22">
                                                    <i className="ti ti-briefcase"></i>
                                                </span>
                                            </div>
                                            {/* <!-- avatar-md --> */}
                                            <h3 className="mb-0 fw-bold"><span data-target="9.75">0</span>k</h3>
                                        </div>
                                        {/* <!-- stat-container --> */}
                                        <p className="mb-0 text-muted">
                                            <span className="text-success me-2">2.94% <i className="ti ti-trending-up ms-1"></i></span>
                                            <span className="text-nowrap">1.1k Up</span>
                                        </p>
                                    </div>
                                    {/* <!-- col-6 --> */}

                                    <div className="col-6">
                                        <div className="text-end">
                                            <div id="deals-closed-chart"></div>
                                        </div>
                                        {/* <!-- text-end --> */}
                                    </div>
                                    {/* <!-- col-6 --> */}
                                </div>
                                {/* <!-- row align-items-center --> */}
                            </div>
                            {/* <!-- card-body --> */}
                        </div>
                        {/* <!-- card --> */}
                    </div>
                    {/* <!-- col --> */}

                    {/* <!-- Revenue Generated --> */}
                    <div className="col-md-6 col-xxl-3">
                        <div className="card card-h-100">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <h5 className="text-muted fs-sm text-uppercase text-truncate" title="Revenue Generated">Revenue Generated</h5>
                                        <div className="d-flex align-items-center gap-2 my-3">
                                            <div className="avatar-md flex-shrink-0">
                                                <span className="avatar-title text-bg-light rounded-circle fs-22">
                                                    <i className="ti ti-currency-dollar"></i>
                                                </span>
                                            </div>
                                            {/* <!-- avatar-md --> */}
                                            <h3 className="mb-0 fw-bold">$<span data-target="5.63">0</span>M</h3>
                                        </div>
                                        {/* <!-- stat-container --> */}
                                        <p className="mb-0 text-muted">
                                            <span className="text-success me-2">4.21% <i className="ti ti-trending-up ms-1"></i></span>
                                            <span className="text-nowrap">$32.4k Up</span>
                                        </p>
                                    </div>
                                    {/* <!-- col-6 --> */}

                                    <div className="col-6">
                                        <div className="text-end">
                                            <div id="revenue-generated-chart"></div>
                                        </div>
                                        {/* <!-- text-end --> */}
                                    </div>
                                    {/* <!-- col-6 --> */}
                                </div>
                                {/* <!-- row align-items-center --> */}
                            </div>
                            {/* <!-- card-body --> */}
                        </div>
                        {/* <!-- card --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
                {/* <!-- row --> */}

                {/* <!-- end row --> */}

                <div className="row">
                    <div className="col-xl-8">
                        <div className="card card-h-100">
                            <div className="card-header justify-content-between">
                                <h4 className="card-title">Overview <span className="text-muted fw-normal fs-base">(Current Year)</span></h4>
                                <div>
                                    <button type="button" className="btn btn-light btn-sm">All</button>
                                    <button type="button" className="btn btn-light btn-sm">1M</button>
                                    <button type="button" className="btn btn-light btn-sm">6M</button>
                                    <button type="button" className="btn btn-light active btn-sm">1Y</button>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="alert alert-warning d-flex align-items-center mb-3" role="alert">
                                            <i className="ti ti-database fs-28 me-2"></i>
                                            <div>
                                                We regret to inform you that our server is down. <strong><a href="#!" className="alert-link">Refresh</a></strong>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-1">Revenue</p>
                                                <h4 className="mb-2">
                                                    <i className="ti ti-cash text-success me-1"></i>
                                                    <span>$<span data-target="56.63">0</span>k</span>
                                                </h4>
                                                <span className="badge fs-12 badge-soft-danger"><i className="ti ti-chevron-down"></i> 3.91%</span>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-1">Orders</p>
                                                <h4 className="mb-2">
                                                    <i className="ti ti-truck text-info me-1"></i>
                                                    <span data-target="9,842">0</span>
                                                </h4>
                                                <span className="badge fs-12 badge-soft-success"><i className="ti ti-chevron-up"></i> 8.72%</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="text-muted mt-3 mb-1">New Users</p>
                                                <h4 className="mb-2">
                                                    <i className="ti ti-users-group me-1"></i>
                                                    <span data-target="95.3">0</span>k
                                                </h4>
                                                <span className="badge fs-12 badge-soft-success"><i className="ti ti-chevron-up"></i> 11.2%</span>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mt-3 mb-1">New Contract</p>
                                                <h4 className="mb-2">
                                                    <i className="ti ti-heart-handshake me-1"></i>
                                                    <span data-target="851">0</span>
                                                </h4>
                                                <span className="badge fs-12 text-bg-light"> 0.00%</span>
                                            </div>
                                        </div>

                                        <button type="button" className="btn btn-primary btn-sm mt-3" data-action="card-refresh"><i className="ti ti-refresh me-1"></i> Refresh Data</button>
                                    </div>
                                    {/* <!-- end col --> */}
                                    <div className="col-xl-8">
                                        <div dir="ltr">
                                            <div id="dash-revenue-chart" className="apex-charts"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end card-body--> */}
                        </div>
                        {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col--> */}

                    <div className="col-xl-4">
                        <div className="card card-h-100">
                            <div className="card-header justify-content-between">
                                <h4 className="card-title">Lead Source</h4>
                                <div>
                                    <a href="#" className="btn btn-sm btn-default"><i className="ti ti-cloud-upload me-1"></i> Export</a>
                                    <a href="#" className="btn btn-sm btn-light"><i className="ti ti-download me-1"></i> Import</a>
                                </div>
                            </div>

                            <div className="card-body">
                                <div id="most-leads-chart" className="apex-charts"></div>

                                <div className="row mt-2">
                                    <div className="col">
                                        <div className="d-flex justify-content-between align-items-center p-1">
                                            <div>
                                                <i className="ti ti-speakerphone fs-16 align-middle me-1 text-primary"></i>
                                                <span className="align-middle fw-semibold">Newsletter</span>
                                            </div>
                                            <span className="fw-semibold text-muted float-end"> <i className="ti ti-chevron-up text-success"></i> 6.37% </span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center p-1">
                                            <div>
                                                <i className="ti ti-user-hexagon fs-16 align-middle me-1 text-danger"></i>
                                                <span className="align-middle fw-semibold">Instagram</span>
                                            </div>
                                            <span className="fw-semibold text-muted float-end"> <i className="ti ti-chevron-up text-success"></i> 34.8% </span>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex justify-content-between align-items-center p-1">
                                            <div>
                                                <i className="ti ti-settings-2 fs-16 align-middle me-1 text-success"></i>
                                                <span className="align-middle fw-semibold">WhatsApp</span>
                                            </div>
                                            <span className="fw-semibold text-muted float-end"> <i className="ti ti-chevron-down text-danger"></i> 8.9% </span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center p-1">
                                            <div>
                                                <i className="ti ti-world fs-16 align-middle me-1 text-warning"></i>
                                                <span className="align-middle fw-semibold">Website</span>
                                            </div>
                                            <span className="fw-semibold text-muted float-end"> <i className="ti ti-chevron-up text-success"></i>44.3% </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end card body--> */}
                        </div>
                        {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col--> */}
                </div>
                {/* <!-- end row--> */}

                <div className="row">
                    <div className="col-xl-12">
                        <div data-table data-table-rows-per-page="5" className="card">
                            <div className="card-header border-light justify-content-between">
                                <h4 className="card-title">Deal Status</h4>

                                <div className="d-flex align-items-center gap-2">
                                    <span className="me-2 fw-semibold">Filter By:</span>

                                    {/* <!-- Deal Status Filter --> */}
                                    <div className="app-search">
                                        <select data-table-filter="order-status" className="form-select form-control my-1 my-md-0">
                                            <option value="All">Deal Status</option>
                                            <option value="Paused">Paused</option>
                                            <option value="New">New</option>
                                            <option value="Cold Lead">Cold Lead</option>
                                            <option value="Canceled">Canceled</option>
                                            <option value="Deal Won">Deal Won</option>
                                        </select>
                                        <i className="ti ti-briefcase app-search-icon text-muted"></i>
                                    </div>

                                    <div className="app-search">
                                        <input data-table-search type="search" className="form-control" placeholder="Search deals..." />
                                        <i className="ti ti-search app-search-icon text-muted"></i>
                                    </div>

                                    {/* <!-- Records Per Page --> */}
                                    <div>
                                        <select data-table-set-rows-per-page className="form-select form-control my-1 my-md-0">
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-custom table-nowrap table-centered table-select table-hover w-100 mb-0">
                                    <thead className="bg-light align-middle bg-opacity-25 thead-sm">
                                        <tr className="text-uppercase fs-xxs">
                                            <th data-table-sort>Deal ID</th>
                                            <th data-table-sort>Deal Name</th>
                                            <th data-table-sort>Company</th>
                                            <th style={{width: "12%"}}>Pipeline</th>
                                            <th data-table-sort>Closing Date</th>
                                            <th data-table-sort>User Responsible</th>
                                            <th data-table-sort>Deal Value</th>
                                            <th data-table-sort data-column="order-status">Deal Status</th>
                                            <th>•••</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href="#!" className="fw-medium text-reset">#DH874</a>
                                            </td>
                                            <td>
                                                <div className="avatar-xs d-inline-block me-1">
                                                    <span className="avatar-title bg-primary-subtle text-primary fw-bold rounded-circle"> A </span>
                                                </div>
                                                <a href="#!" className="text-reset">AdamM09</a>
                                            </td>
                                            <td>Rex Audio</td>
                                            <td>
                                                <div className="progress progress-lg progress-with-border rounded-0">
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Strategy Development" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Target Identification" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Valuation Analysis" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" data-bs-toggle="tooltip" data-bs-title="Negotiations" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" data-bs-toggle="tooltip" data-bs-title="Deal Closure" role="progressbar" style={{width: "20%"}}></div>
                                                </div>
                                            </td>
                                            <td>20 Apr, 2024</td>
                                            <td>
                                                <img src="/src/assets/images/users/user-1.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                <a href="javascript: void(0);" className="text-body fw-medium">Alexa Newsome</a>
                                            </td>
                                            <td>
                                                <div className="text-nowrap">USD $100.1K</div>
                                            </td>
                                            <td><span className="badge bg-info-subtle text-info p-1">Paused</span></td>
                                            <td>
                                                <a href="javascript: void(0);" className="text-muted fs-20"> <i className="ti ti-edit"></i></a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <a href="#!" className="fw-medium text-reset">#DH809</a>
                                            </td>
                                            <td>
                                                <div className="avatar-xs d-inline-block me-1">
                                                    <span className="avatar-title bg-success-subtle text-success fw-bold rounded-circle"> S </span>
                                                </div>
                                                <a href="#!" className="text-reset">Sensor Lecto</a>
                                            </td>
                                            <td>Morville</td>
                                            <td>
                                                <div className="progress progress-lg progress-with-border rounded-0">
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Strategy Development" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Target Identification" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" data-bs-toggle="tooltip" data-bs-title="Valuation Analysis" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" data-bs-toggle="tooltip" data-bs-title="Negotiations" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" data-bs-toggle="tooltip" data-bs-title="Deal Closure" role="progressbar" style={{width: "20%"}}></div>
                                                </div>
                                            </td>
                                            <td>31 Dec, 2024</td>
                                            <td>
                                                <img src="/src/assets/images/users/user-2.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                <a href="javascript: void(0);" className="text-body fw-medium">David Lee</a>
                                            </td>
                                            <td>
                                                <div className="text-nowrap">CAD $95K</div>
                                            </td>
                                            <td><span className="badge text-bg-light p-1">New</span></td>
                                            <td>
                                                <a href="javascript: void(0);" className="text-muted fs-20"> <i className="ti ti-edit"></i></a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <a href="#!" className="fw-medium text-reset">#DH807</a>
                                            </td>
                                            <td>
                                                <div className="avatar-xs d-inline-block me-1">
                                                    <span className="avatar-title bg-info-subtle text-info fw-bold rounded-circle"> D </span>
                                                </div>
                                                <a href="#!" className="text-reset">Dhvanil</a>
                                            </td>
                                            <td>Olson's Market</td>
                                            <td>
                                                <div className="progress progress-lg progress-with-border rounded-0">
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Strategy Development" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Target Identification" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Valuation Analysis" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Negotiations" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" data-bs-toggle="tooltip" data-bs-title="Deal Closure" role="progressbar" style={{width: "20%"}}></div>
                                                </div>
                                            </td>
                                            <td>05 Jun, 2024</td>
                                            <td>
                                                <img src="/src/assets/images/users/user-5.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                <a href="javascript: void(0);" className="text-body fw-medium">Peter Hein</a>
                                            </td>
                                            <td>
                                                <div className="text-nowrap">AUD $65.95K</div>
                                            </td>
                                            <td><span className="badge bg-warning-subtle text-warning p-1">Cold Lead</span></td>
                                            <td>
                                                <a href="javascript: void(0);" className="text-muted fs-20"> <i className="ti ti-edit"></i></a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <a href="#!" className="fw-medium text-reset">#DH805</a>
                                            </td>
                                            <td>
                                                <div className="avatar-xs d-inline-block me-1">
                                                    <span className="avatar-title bg-secondary-subtle text-secondary fw-bold rounded-circle"> K </span>
                                                </div>
                                                <a href="#!" className="text-reset">KHCoal</a>
                                            </td>
                                            <td>Erlebacher's</td>
                                            <td>
                                                <div className="progress progress-lg progress-with-border rounded-0">
                                                    <div className="progress-bar bg-danger" data-bs-toggle="tooltip" data-bs-title="Strategy Development" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" data-bs-toggle="tooltip" data-bs-title="Target Identification" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" data-bs-toggle="tooltip" data-bs-title="Valuation Analysis" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" data-bs-toggle="tooltip" data-bs-title="Negotiations" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" data-bs-toggle="tooltip" data-bs-title="Deal Closure" role="progressbar" style={{width: "20%"}}></div>
                                                </div>
                                            </td>
                                            <td>25 Aug, 2024</td>
                                            <td>
                                                <img src="/src/assets/images/users/user-7.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                <a href="javascript: void(0);" className="text-body fw-medium">Gladys Rivas</a>
                                            </td>
                                            <td>
                                                <div className="text-nowrap">IN ₹296.1K</div>
                                            </td>
                                            <td><span className="badge bg-danger-subtle text-danger p-1">Canceled</span></td>
                                            <td>
                                                <a href="javascript: void(0);" className="text-muted fs-20"> <i className="ti ti-edit"></i></a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <a href="#!" className="fw-medium text-reset">#DH800</a>
                                            </td>
                                            <td>
                                                <div className="avatar-xs d-inline-block me-1">
                                                    <span className="avatar-title bg-warning-subtle text-warning fw-bold rounded-circle"> H </span>
                                                </div>
                                                <a href="#!" className="text-reset">Haniyo</a>
                                            </td>
                                            <td>Colonial Stores</td>
                                            <td>
                                                <div className="progress progress-lg progress-with-border rounded-0">
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Strategy Development" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Target Identification" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Valuation Analysis" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Negotiations" role="progressbar" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" data-bs-toggle="tooltip" data-bs-title="Deal Closure" role="progressbar" style={{width: "20%"}}></div>
                                                </div>
                                            </td>
                                            <td>30 Sep, 2024</td>
                                            <td>
                                                <img src="/src/assets/images/users/user-10.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                <a href="javascript: void(0);" className="text-body fw-medium">Joan Wisdom</a>
                                            </td>
                                            <td>
                                                <div className="text-nowrap">USD $25.9K</div>
                                            </td>
                                            <td><span className="badge bg-success-subtle text-success p-1">Deal Won</span></td>
                                            <td>
                                                <a href="javascript: void(0);" className="text-muted fs-20"> <i className="ti ti-edit"></i></a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><a href="#!" className="fw-medium text-reset">#DH798</a></td>
                                            <td>
                                                <div className="avatar-xs d-inline-block me-1">
                                                    <span className="avatar-title bg-primary-subtle text-primary fw-bold rounded-circle">L</span>
                                                </div>
                                                <a href="#!" className="text-reset">Lunotech</a>
                                            </td>
                                            <td>Northbridge Ltd</td>
                                            <td>
                                                <div className="progress progress-lg progress-with-border rounded-0">
                                                    <div className="progress-bar bg-success" style={{width: "20%"}} data-bs-title="Strategy Development"></div>
                                                    <div className="progress-bar bg-success" style={{width: "20%"}} data-bs-title="Target Identification"></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}} data-bs-title="Valuation Analysis"></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}} data-bs-title="Negotiations"></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}} data-bs-title="Deal Closure"></div>
                                                </div>
                                            </td>
                                            <td>12 Jan, 2025</td>
                                            <td>
                                                <img src="/src/assets/images/users/user-3.jpg" className="avatar-xs rounded-circle me-1" />
                                                <a href="#" className="text-body fw-medium">Chris Nolan</a>
                                            </td>
                                            <td><div className="text-nowrap">USD $78.3K</div></td>
                                            <td><span className="badge bg-info-subtle text-info p-1">Paused</span></td>
                                            <td>
                                                <a href="#" className="text-muted fs-20"><i className="ti ti-edit"></i></a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><a href="#!" className="fw-medium text-reset">#DH792</a></td>
                                            <td>
                                                <div className="avatar-xs d-inline-block me-1">
                                                    <span className="avatar-title bg-success-subtle text-success fw-bold rounded-circle">T</span>
                                                </div>
                                                <a href="#!" className="text-reset">TechHive</a>
                                            </td>
                                            <td>Urban Labs</td>
                                            <td>
                                                <div className="progress progress-lg progress-with-border rounded-0">
                                                    <div className="progress-bar bg-success" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                </div>
                                            </td>
                                            <td>08 Mar, 2025</td>
                                            <td>
                                                <img src="/src/assets/images/users/user-4.jpg" className="avatar-xs rounded-circle me-1" />
                                                <a href="#" className="text-body fw-medium">Karen Miles</a>
                                            </td>
                                            <td><div className="text-nowrap">EUR €120.4K</div></td>
                                            <td><span className="badge text-bg-light p-1">New</span></td>
                                            <td>
                                                <a href="#" className="text-muted fs-20"><i className="ti ti-edit"></i></a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><a href="#!" className="fw-medium text-reset">#DH788</a></td>
                                            <td>
                                                <div className="avatar-xs d-inline-block me-1">
                                                    <span className="avatar-title bg-warning-subtle text-warning fw-bold rounded-circle">P</span>
                                                </div>
                                                <a href="#!" className="text-reset">PixelForge</a>
                                            </td>
                                            <td>Bright Mart</td>
                                            <td>
                                                <div className="progress progress-lg progress-with-border rounded-0">
                                                    <div className="progress-bar bg-success" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                </div>
                                            </td>
                                            <td>15 Jul, 2025</td>
                                            <td>
                                                <img src="/src/assets/images/users/user-6.jpg" className="avatar-xs rounded-circle me-1" />
                                                <a href="#" className="text-body fw-medium">Oscar Brent</a>
                                            </td>
                                            <td><div className="text-nowrap">GBP £58.7K</div></td>
                                            <td><span className="badge bg-warning-subtle text-warning p-1">Cold Lead</span></td>
                                            <td>
                                                <a href="#" className="text-muted fs-20"><i className="ti ti-edit"></i></a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><a href="#!" className="fw-medium text-reset">#DH780</a></td>
                                            <td>
                                                <div className="avatar-xs d-inline-block me-1">
                                                    <span className="avatar-title bg-danger-subtle text-danger fw-bold rounded-circle">R</span>
                                                </div>
                                                <a href="#!" className="text-reset">RedCore</a>
                                            </td>
                                            <td>Highland Co.</td>
                                            <td>
                                                <div className="progress progress-lg progress-with-border rounded-0">
                                                    <div className="progress-bar bg-danger" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                </div>
                                            </td>
                                            <td>21 Feb, 2025</td>
                                            <td>
                                                <img src="/src/assets/images/users/user-8.jpg" className="avatar-xs rounded-circle me-1" />
                                                <a href="#" className="text-body fw-medium">Maria Jensen</a>
                                            </td>
                                            <td><div className="text-nowrap">USD $42.3K</div></td>
                                            <td><span className="badge bg-danger-subtle text-danger p-1">Canceled</span></td>
                                            <td>
                                                <a href="#" className="text-muted fs-20"><i className="ti ti-edit"></i></a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><a href="#!" className="fw-medium text-reset">#DH776</a></td>
                                            <td>
                                                <div className="avatar-xs d-inline-block me-1">
                                                    <span className="avatar-title bg-success-subtle text-success fw-bold rounded-circle">B</span>
                                                </div>
                                                <a href="#!" className="text-reset">BluEdge</a>
                                            </td>
                                            <td>Arcton Energy</td>
                                            <td>
                                                <div className="progress progress-lg progress-with-border rounded-0">
                                                    <div className="progress-bar bg-success" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-success" style={{width: "20%"}}></div>
                                                </div>
                                            </td>
                                            <td>10 Oct, 2024</td>
                                            <td>
                                                <img src="/src/assets/images/users/user-9.jpg" className="avatar-xs rounded-circle me-1" />
                                                <a href="#" className="text-body fw-medium">Daniel Cook</a>
                                            </td>
                                            <td><div className="text-nowrap">USD $310.2K</div></td>
                                            <td><span className="badge bg-success-subtle text-success p-1">Deal Won</span></td>
                                            <td>
                                                <a href="#" className="text-muted fs-20"><i className="ti ti-edit"></i></a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><a href="#!" className="fw-medium text-reset">#DH770</a></td>
                                            <td>
                                                <div className="avatar-xs d-inline-block me-1">
                                                    <span className="avatar-title bg-info-subtle text-info fw-bold rounded-circle">C</span>
                                                </div>
                                                <a href="#!" className="text-reset">CloudNova</a>
                                            </td>
                                            <td>Prime Retail</td>
                                            <td>
                                                <div className="progress progress-lg progress-with-border rounded-0">
                                                    <div className="progress-bar bg-success" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                </div>
                                            </td>
                                            <td>28 May, 2025</td>
                                            <td>
                                                <img src="/src/assets/images/users/user-5.jpg" className="avatar-xs rounded-circle me-1" />
                                                <a href="#" className="text-body fw-medium">Emily Grace</a>
                                            </td>
                                            <td><div className="text-nowrap">USD $54.1K</div></td>
                                            <td><span className="badge bg-info-subtle text-info p-1">Paused</span></td>
                                            <td>
                                                <a href="#" className="text-muted fs-20"><i className="ti ti-edit"></i></a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><a href="#!" className="fw-medium text-reset">#DH765</a></td>
                                            <td>
                                                <div className="avatar-xs d-inline-block me-1">
                                                    <span className="avatar-title bg-danger-subtle text-danger fw-bold rounded-circle">F</span>
                                                </div>
                                                <a href="#!" className="text-reset">Finexa</a>
                                            </td>
                                            <td>Beacon Stores</td>
                                            <td>
                                                <div className="progress progress-lg progress-with-border rounded-0">
                                                    <div className="progress-bar bg-danger" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                    <div className="progress-bar bg-light" style={{width: "20%"}}></div>
                                                </div>
                                            </td>
                                            <td>02 Feb, 2025</td>
                                            <td>
                                                <img src="/src/assets/images/users/user-7.jpg" className="avatar-xs rounded-circle me-1" />
                                                <a href="#" className="text-body fw-medium">Nathan Cole</a>
                                            </td>
                                            <td><div className="text-nowrap">USD $19.8K</div></td>
                                            <td><span className="badge bg-danger-subtle text-danger p-1">Canceled</span></td>
                                            <td>
                                                <a href="#" className="text-muted fs-20"><i className="ti ti-edit"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    {/* <!-- end tbody --> */}
                                </table>
                            </div>
                            <div className="card-footer border-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div data-table-pagination-info="deals"></div>
                                    <div data-table-pagination></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end col--> */}
                </div>
                {/* <!-- end row--> */}

                <div className="row">
                    <div className="col-xl-4 col-lg-12">
                        <div data-table data-table-rows-per-page="5" className="card">
                            <div className="card-header border-light justify-content-between">
                                <h4 className="card-title">Top Performing</h4>

                                <div className="d-flex align-items-center gap-2">
                                    <div className="app-search">
                                        <input data-table-search type="search" className="form-control" placeholder="Search..." />
                                        <i className="ti ti-search app-search-icon text-muted"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-custom table-nowrap table-centered table-select table-hover w-100 mb-0">
                                    <thead className="bg-light align-middle bg-opacity-25 thead-sm">
                                        <tr className="text-uppercase fs-xxs">
                                            <th>User</th>
                                            <th data-table-sort>Leads</th>
                                            <th data-table-sort>Deals</th>
                                            <th data-table-sort>Tasks</th>
                                            <th>•••</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5 className="fs-14 mb-0 fw-normal">Jeremy Young</h5>
                                                <span className="text-muted fs-12">Senior Sales Executive</span>
                                            </td>
                                            <td>187</td>
                                            <td>154</td>
                                            <td>49</td>
                                            <td>
                                                <a href="javascript: void(0);" className="text-muted fs-20"> <i className="ti ti-eye"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 className="fs-14 mb-0 fw-normal">Thomas Krueger</h5>
                                                <span className="text-muted fs-12">Senior Sales Executive</span>
                                            </td>
                                            <td>235</td>
                                            <td>127</td>
                                            <td>83</td>
                                            <td>
                                                <a href="javascript: void(0);" className="text-muted fs-20"> <i className="ti ti-eye"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 className="fs-14 mb-0 fw-normal">Pete Burdine</h5>
                                                <span className="text-muted fs-12">Senior Sales Executive</span>
                                            </td>
                                            <td>365</td>
                                            <td>148</td>
                                            <td>62</td>
                                            <td>
                                                <a href="javascript: void(0);" className="text-muted fs-20"> <i className="ti ti-eye"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 className="fs-14 mb-0 fw-normal">Mary Nelson</h5>
                                                <span className="text-muted fs-12">Senior Sales Executive</span>
                                            </td>
                                            <td>753</td>
                                            <td>159</td>
                                            <td>258</td>
                                            <td>
                                                <a href="javascript: void(0);" className="text-muted fs-20"> <i className="ti ti-eye"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 className="fs-14 mb-0 fw-normal">Kevin Grove</h5>
                                                <span className="text-muted fs-12">Senior Sales Executive</span>
                                            </td>
                                            <td>458</td>
                                            <td>126</td>
                                            <td>73</td>
                                            <td>
                                                <a href="javascript: void(0);" className="text-muted fs-20"> <i className="ti ti-eye"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    {/* <!-- end tbody --> */}
                                </table>
                            </div>
                            <div className="card-footer border-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div data-table-pagination-info="deals"></div>
                                    <div data-table-pagination></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end col--> */}

                    <div className="col-xl-4 col-lg-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <h4 className="card-title">Location By Session</h4>
                                <div className="dropdown ms-auto">
                                    <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                        <i className="ti ti-dots-vertical fs-lg"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a className="dropdown-item" href="#"> <i className="ti ti-world me-2"></i> Show Top Countries </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#"> <i className="ti ti-map-pin me-2"></i> View City Breakdown </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#"> <i className="ti ti-calendar me-2"></i> Compare Date Range </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#"> <i className="ti ti-download me-2"></i> Download Report </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-danger" href="#"> <i className="ti ti-trash me-2"></i> Clear Filters </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card-body">
                                <div id="session-by-countries" style={{height: "203px"}}></div>

                                <div className="mt-3">
                                    <div className="table-responsive mb-n1">
                                        <table className="table table-nowrap table-borderless table-centered mb-0">
                                            <thead className="bg-light bg-opacity-50 thead-sm">
                                                <tr>
                                                    <th>Country</th>
                                                    <th>Sessions</th>
                                                    <th>Users</th>
                                                    <th>Perc.</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><img src="/src/assets/images/flags/us.svg" alt="user-image" className="me-1 rounded-circle" height="18" /> <span className="align-middle">United States</span></td>
                                                    <td>196,584</td>
                                                    <td>187,232</td>
                                                    <td>48.63%</td>
                                                </tr>
                                                <tr>
                                                    <td><img src="/src/assets/images/flags/in.svg" alt="user-image" className="me-1 rounded-circle" height="18" /> <span className="align-middle">India</span></td>
                                                    <td>145,845</td>
                                                    <td>126,874</td>
                                                    <td>36.08%</td>
                                                </tr>
                                                <tr>
                                                    <td><img src="/src/assets/images/flags/au.svg" alt="user-image" className="me-1 rounded-circle" height="18" /> <span className="align-middle">Australia</span></td>
                                                    <td>95,845</td>
                                                    <td>90,127</td>
                                                    <td>23.41%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <!-- end table-responsive--> */}
                                </div>
                            </div>
                            {/* <!-- end card-body--> */}
                        </div>
                        {/* <!-- end card--> */}
                    </div>
                    {/* <!-- end col --> */}

                    <div className="col-xl-4 col-lg-6">
                        <div className="card card-h-100">
                            <div className="card-header justify-content-between">
                                <h4 className="card-title">Recent Activity</h4>
                                <div className="dropdown ms-auto">
                                    <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                        <i className="ti ti-dots-vertical fs-lg"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a className="dropdown-item" href="#"> <i className="ti ti-activity me-2"></i> View Activity Log </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#"> <i className="ti ti-filter-2 me-2"></i> Filter Activities </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#"> <i className="ti ti-download me-2"></i> Export Logs </a>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <a className="dropdown-item text-danger" href="#"> <i className="ti ti-trash me-2"></i> Clear Activity </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card-body" data-simplebar style={{maxHeight: "426px"}}>
                                <div className="timeline timeline-users">
                                    {/* <!-- Event 1 --> */}
                                    <div className="timeline-item d-flex align-items-stretch">
                                        <div className="timeline-dot text-bg-primary">
                                            <i className="ti ti-user-plus fs-md"></i>
                                        </div>
                                        <div className="timeline-content ps-3 pb-4">
                                            <h5 className="mb-1">15 New Leads Added</h5>
                                            <p className="mb-1 text-muted">Fresh inbound leads were captured from the website and synced automatically.</p>
                                            <span className="text-primary fw-semibold">By Olivia Carter</span>
                                        </div>
                                    </div>

                                    {/* <!-- Event 2 --> */}
                                    <div className="timeline-item d-flex align-items-stretch">
                                        <div className="timeline-dot text-bg-success">
                                            <i className="ti ti-messages fs-md"></i>
                                        </div>
                                        <div className="timeline-content ps-3 pb-4">
                                            <h5 className="mb-1">Lead Follow-Up Emails Sent</h5>
                                            <p className="mb-1 text-muted">Follow-up messages were sent to all leads who have not responded within 48 hours.</p>
                                            <span className="text-primary fw-semibold">By Daniel Moore</span>
                                        </div>
                                    </div>

                                    {/* <!-- Event 3 --> */}
                                    <div className="timeline-item d-flex align-items-stretch">
                                        <div className="timeline-dot text-bg-warning">
                                            <i className="ti ti-phone-call fs-md"></i>
                                        </div>
                                        <div className="timeline-content ps-3 pb-4">
                                            <h5 className="mb-1">Sales Calls Logged</h5>
                                            <p className="mb-1 text-muted">20 outbound calls were recorded for prospects in the “Negotiation” stage.</p>
                                            <span className="text-primary fw-semibold">By Sophia Turner</span>
                                        </div>
                                    </div>

                                    {/* <!-- Event 4 --> */}
                                    <div className="timeline-item d-flex align-items-stretch">
                                        <div className="timeline-dot text-bg-info">
                                            <i className="ti ti-users fs-md"></i>
                                        </div>
                                        <div className="timeline-content ps-3 pb-4">
                                            <h5 className="mb-1">Team Member Assigned to Deals</h5>
                                            <p className="mb-1 text-muted">Three deals were reassigned to the senior sales team for faster conversion.</p>
                                            <span className="text-primary fw-semibold">By Liam Anderson</span>
                                        </div>
                                    </div>

                                    {/* <!-- Event 5 --> */}
                                    <div className="timeline-item d-flex align-items-stretch">
                                        <div className="timeline-dot text-bg-danger">
                                            <i className="ti ti-x fs-md"></i>
                                        </div>
                                        <div className="timeline-content ps-3 pb-4">
                                            <h5 className="mb-1">Deals Moved to Lost Stage</h5>
                                            <p className="mb-1 text-muted">4 deals were marked as “Lost” due to inactivity or declined proposals.</p>
                                            <span className="text-primary fw-semibold">By Ethan Brooks</span>
                                        </div>
                                    </div>

                                    {/* <!-- Event 6 --> */}
                                    <div className="timeline-item d-flex align-items-stretch">
                                        <div className="timeline-dot text-bg-secondary">
                                            <i className="ti ti-briefcase fs-md"></i>
                                        </div>
                                        <div className="timeline-content ps-3">
                                            <h5 className="mb-1">Two Deals Successfully Closed</h5>
                                            <p className="mb-1 text-muted">Two high-value deals were marked “Won” and moved to the onboarding pipeline.</p>
                                            <span className="text-primary fw-semibold">By Ava Mitchell</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- end timeline --> */}
                            </div>
                            {/* <!-- end slimscroll --> */}
                        </div>
                        {/* <!-- end card--> */}
                    </div>
                    {/* <!-- end col --> */}
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

        </div>
    )
}
