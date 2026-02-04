import { Link, useNavigate } from "react-router-dom"


export const EmailCompose = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Email</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Apps</a></li>
                                <li className="breadcrumb-item active">Email</li>
                            </ol>
                        </div>
                    </div>


                    <div className="outlook-box gap-1 email-app">
                        <div className="offcanvas-lg offcanvas-start outlook-left-menu outlook-left-menu-sm" tabIndex={-1} id="emailSidebaroffcanvas">
                            <div className="card h-100 mb-0 rounded-end-0" data-simplebar>
                                <div className="card-body">
                                    <a onClick={() => navigate(-1)} className="btn btn-danger fw-medium w-100">Back to Inbox</a>

                                    <div className="list-group list-group-flush list-custom mt-3">
                                        <a href="apps-email-inbox.html" className="list-group-item list-group-item-action active">
                                            <i className="ti ti-inbox me-1 opacity-75 fs-lg align-middle"></i>
                                            <span className="align-middle">Inbox</span>
                                            <span className="badge align-middle bg-danger-subtle fs-xxs text-danger float-end">21</span>
                                        </a>

                                        {/* <a href="javascript: void(0);" className="list-group-item list-group-item-action">
                                            <i className="ti ti-send-2 me-1 opacity-75 fs-lg align-middle"></i>
                                            <span className="align-middle">Sent</span>
                                        </a>

                                        <a href="javascript: void(0);" className="list-group-item list-group-item-action">
                                            <i className="ti ti-star me-1 opacity-75 fs-lg align-middle"></i>
                                            <span className="align-middle">Starred</span>
                                        </a>

                                        <a href="javascript: void(0);" className="list-group-item list-group-item-action">
                                            <i className="ti ti-clock me-1 opacity-75 fs-lg align-middle"></i>
                                            <span className="align-middle">Scheduled</span>
                                        </a>

                                        <a href="javascript: void(0);" className="list-group-item list-group-item-action">
                                            <i className="ti ti-pencil me-1 opacity-75 fs-lg align-middle"></i>
                                            <span className="align-middle">Drafts</span>
                                            <span className="badge align-middle bg-secondary-subtle text-secondary fs-xxs float-end">9</span>
                                        </a>

                                        <a href="javascript: void(0);" className="list-group-item list-group-item-action">
                                            <i className="ti ti-alert-circle me-1 opacity-75 fs-lg align-middle"></i>
                                            <span className="align-middle">Important</span>
                                        </a>

                                        <a href="javascript: void(0);" className="list-group-item list-group-item-action">
                                            <i className="ti ti-ban me-1 opacity-75 fs-lg align-middle"></i>
                                            <span className="align-middle">Spam</span>
                                        </a>

                                        <a href="javascript: void(0);" className="list-group-item list-group-item-action">
                                            <i className="ti ti-trash me-1 opacity-75 fs-lg align-middle"></i>
                                            <span className="align-middle">Trash</span>
                                        </a>

                                        <div className="list-group-item mt-2">
                                            <span className="align-middle">Labels</span>
                                        </div>

                                        <a href="javascript: void(0);" className="list-group-item list-group-item-action">
                                            <i className="ti ti-chart-donut me-1 align-middle fs-sm text-primary"></i>
                                            <span className="align-middle">Business</span>
                                        </a>

                                        <a href="javascript: void(0);" className="list-group-item list-group-item-action">
                                            <i className="ti ti-chart-donut me-1 align-middle fs-sm text-secondary"></i>
                                            <span className="align-middle">Personal</span>
                                        </a>

                                        <a href="javascript: void(0);" className="list-group-item list-group-item-action">
                                            <i className="ti ti-chart-donut me-1 align-middle fs-sm text-info"></i>
                                            <span className="align-middle">Friends</span>
                                        </a>

                                        <a href="javascript: void(0);" className="list-group-item list-group-item-action">
                                            <i className="ti ti-chart-donut me-1 align-middle fs-sm text-warning"></i>
                                            <span className="align-middle">Family</span>
                                        </a> */}
                                    </div>
                                </div>
                                {/* <!-- end card-body--> */}
                            </div>
                            {/* <!-- end card--> */}
                        </div>

                        <div className="card h-100 mb-0 rounded-start-0 flex-grow-1 border-start-0">
                            <div className="card-header d-lg-none d-flex gap-2">
                                <button className="btn btn-default btn-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#emailSidebaroffcanvas" aria-controls="emailSidebaroffcanvas">
                                    <i className="ti ti-menu-4 fs-lg"></i>
                                </button>

                                <div className="app-search">
                                    <input type="text" className="form-control" placeholder="Search mails..." />
                                    <i className="ti ti-search app-search-icon text-muted"></i>
                                </div>
                            </div>

                            <div className="card-header card-bg justify-content-between">
                                <h4 className="card-title">Compose Message</h4>
                            </div>

                            <div className="card-body p-0" style={{height: "calc(100% - 120px)"}} data-simplebar data-simplebar-md>
                                <div className="app-search input-group border-bottom border-dashed ps-2 pe-4">
                                    <input type="text" className="form-control py-3 border-0" placeholder="Enter emails.." />
                                    <span className="app-search-icon fw-semibold fs-sm">To:</span>
                                    <button className="btn btn-link fs-sm px-2 text-decoration-underline text-reset fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#email-cc" aria-expanded="false" aria-controls="email-cc">Cc</button>
                                    <button className="btn btn-link fs-sm px-2 text-decoration-underline text-reset fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#email-bcc" aria-expanded="false" aria-controls="email-bcc">Bcc</button>
                                </div>

                                <div className="collapse" id="email-cc">
                                    <div className="app-search input-group border-bottom border-dashed ps-2 pe-4">
                                        <input type="text" className="form-control py-3 border-0" placeholder="Enter emails.." />
                                        <span className="app-search-icon fw-semibold fs-sm">Cc:</span>
                                        <button className="btn btn-link px-2 text-muted fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#email-cc" aria-expanded="false" aria-controls="email-cc">
                                            <i className="ti ti-x fs-xl"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="collapse" id="email-bcc">
                                    <div className="app-search input-group border-bottom border-dashed ps-2 pe-4">
                                        <input type="text" className="form-control py-3 border-0" placeholder="Enter emails.." />
                                        <span className="app-search-icon fw-semibold fs-sm">Bcc:</span>
                                        <button className="btn btn-link px-2 text-muted fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#email-bcc" aria-expanded="false" aria-controls="email-bcc">
                                            <i className="ti ti-x fs-xl"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="border-bottom border-dashed ps-2 pe-4">
                                    <input type="text" className="form-control py-3 fs-sm fw-semibold border-0" placeholder="Subject" />
                                </div>

                                <div className="email-editor">
                                    <div id="snow-editor">
                                        <p>
                                            Hi
                                            <strong><em>James</em></strong>
                                            ,
                                        </p>

                                        <p>I hope you're doing well.</p>
                                        <p>I'm reaching out regarding the latest updates on our project. Please find the summary below:</p>
                                        <ul>
                                            <li>All UI components have been reviewed and finalized.</li>
                                            <li>The mobile responsiveness is now optimized across all breakpoints.</li>
                                            <li>We’re awaiting final client feedback before deployment.</li>
                                        </ul>
                                        <p>Let me know if you need anything else or if there's anything you'd like us to adjust.</p>
                                        <p><br /></p>
                                        <p>Best regards,</p>
                                        <p><em>Damian</em></p>
                                    </div>
                                    {/* <!-- end Snow-editor --> */}
                                </div>
                                <div className="bg-light-subtle p-2 border-light border-bottom">
                                    <div className="d-flex gap-1 align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-primary">
                                                <i className="ti ti-send-2 me-2"></i>
                                                Send
                                            </button>
                                            <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split drop-arrow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ti ti-chevron-down align-middle"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Send & Archive</a>
                                                <a className="dropdown-item" href="#">Schedule Send</a>
                                                <a className="dropdown-item" href="#">Save as Draft</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Discard</a>
                                            </div>
                                        </div>
                                        {/* <!-- /btn-group --> */}

                                        <button type="button" className="btn btn-sm btn-icon btn-light ms-auto" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Settings">
                                            <i className="ti ti-settings"></i>
                                        </button>
                                        <button type="button" className="btn btn-sm btn-icon btn-soft-danger" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete">
                                            <i className="ti ti-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end card-body --> */}
                        </div>
                        {/* <!-- end card--> */}
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
        </>
    )
}
