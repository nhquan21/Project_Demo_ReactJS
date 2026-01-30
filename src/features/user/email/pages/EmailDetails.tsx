import React from 'react'

export const EmailDetails = () => {
  return (
    <div className="content-page">
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Email Details</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Apps</a></li>
                                <li className="breadcrumb-item active">Email Details</li>
                            </ol>
                        </div>
                    </div>


                    <div className="outlook-box gap-1 email-app">
                        <div className="offcanvas-lg offcanvas-start outlook-left-menu outlook-left-menu-sm" tabIndex={-1} id="emailSidebaroffcanvas">
                            <div className="card h-100 mb-0 rounded-end-0" data-simplebar>
                                <div className="card-body">
                                    <a href="apps-email-compose.html" className="btn btn-danger fw-medium w-100">Compose</a>

                                    <div className="list-group list-group-flush list-custom mt-3">
                                        <a href="apps-email-inbox.html" className="list-group-item list-group-item-action active">
                                            <i className="ti ti-inbox me-1 opacity-75 fs-lg align-middle"></i>
                                            <span className="align-middle">Inbox</span>
                                            <span className="badge align-middle bg-danger-subtle fs-xxs text-danger float-end">21</span>
                                        </a>

                                        <a href="javascript: void(0);" className="list-group-item list-group-item-action">
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
                                        </a>
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
                                <div className="d-flex flex-wrap align-items-center gap-1">
                                    {/* <!-- Back to Inbox --> */}
                                    <a href="apps-email-inbox.html" className="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip" title="Back to Inbox">
                                        <i className="ti ti-arrow-left fs-lg"></i>
                                    </a>

                                    {/* <!-- Delete --> */}
                                    <button type="button" className="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip" title="Delete">
                                        <i className="ti ti-trash fs-lg"></i>
                                    </button>

                                    {/* <!-- Mark as Read --> */}
                                    <button type="button" className="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip" title="Mark as Read">
                                        <i className="ti ti-mail-opened fs-lg"></i>
                                    </button>

                                    {/* <!-- Archive --> */}
                                    <button type="button" className="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip" title="Archive">
                                        <i className="ti ti-archive fs-lg"></i>
                                    </button>

                                    {/* <!-- Move to Folder --> */}
                                    <button type="button" className="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip" title="Move to Folder">
                                        <i className="ti ti-folder fs-lg"></i>
                                    </button>
                                </div>

                                <div className="d-flex align-items-center gap-1">
                                    <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle">
                                        <i className="ti ti-corner-up-right-double fs-xl"></i>
                                    </button>

                                    <button type="button" className="btn btn-icon btn-sm btn-ghost-dark rounded-circle">
                                        <i className="ti ti-dots-vertical fs-lg"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="card-body pt-0 pb-5" style={{height: "calc(100% - 100px)"}} data-simplebar data-simplebar-md>
                                <h4 className="py-3 mb-0 sticky-top bg-body-secondary">Design Reviews & Feedback</h4>

                                {/* <!-- Email One --> */}
                                <div className="pb-3">
                                    <div className="d-flex align-items-center">
                                        <a className="d-flex align-items-center flex-grow-1 text-reset" data-bs-toggle="collapse" href="#EmailOne" role="button" aria-expanded="false" aria-controls="EmailOne">
                                            <img src="assets/images/users/user-3.jpg" className="avatar-md rounded-circle" alt="User Avatar" />
                                            <div className="ms-2 overflow-hidden">
                                                <h5 className="fs-sm mb-0 text-truncate">John Maxwell</h5>
                                                <p className="text-muted mb-0 text-truncate">john.maxwell@uxstudio.com</p>
                                            </div>
                                        </a>
                                        <div className="ms-auto d-flex align-items-center gap-1">
                                            <button className="btn btn-icon btn-sm btn-ghost-light rounded-circle">
                                                <i className="ti ti-star-filled text-warning fs-lg"></i>
                                            </button>
                                            <button className="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                                                <i className="ti ti-mail-forward fs-lg"></i>
                                            </button>
                                            <button className="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                                                <i className="ti ti-mail-opened fs-lg"></i>
                                            </button>
                                            <span className="text-muted fs-xs mb-0 ms-2">Apr 11, 07:47 AM</span>
                                        </div>
                                    </div>

                                    <div className="collapse" id="EmailOne">
                                        <div className="mt-3">
                                            <p>Hey team,</p>
                                            <p>I reviewed the new dashboard layout and overall it's looking solid. The spacing and typography are much better than the previous version.</p>
                                            <p>A couple of suggestions:</p>
                                            <ul>
                                                <li>Make the chart legends slightly smaller and lighter in color.</li>
                                                <li>Try a softer drop shadow for the card components – they feel a bit harsh right now.</li>
                                            </ul>
                                            <p>Let me know if you need a quick call to discuss.</p>
                                            <p className="mt-3 mb-0">Cheers,</p>
                                            <p className="fw-medium mb-0">John</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Email Two --> */}
                                <div className="py-3 border-top border-dashed">
                                    <div className="d-flex align-items-center">
                                        <a className="d-flex align-items-center flex-grow-1 text-reset" data-bs-toggle="collapse" href="#EmailThree" role="button" aria-expanded="false" aria-controls="EmailThree">
                                            <img src="assets/images/users/user-6.jpg" className="avatar-md rounded-circle" alt="User Avatar" />
                                            <div className="ms-2 overflow-hidden">
                                                <h5 className="fs-sm mb-0 text-truncate">Anika Patel</h5>
                                                <p className="text-muted mb-0 text-truncate">anika@creativemix.net</p>
                                            </div>
                                        </a>
                                        <div className="ms-auto d-flex align-items-center gap-1">
                                            <button className="btn btn-icon btn-sm btn-ghost-light rounded-circle">
                                                <i className="ti ti-star-filled text-warning fs-lg"></i>
                                            </button>
                                            <button className="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                                                <i className="ti ti-mail-forward fs-lg"></i>
                                            </button>
                                            <button className="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                                                <i className="ti ti-mail-opened fs-lg"></i>
                                            </button>
                                            <span className="text-muted fs-xs mb-0 ms-2">Apr 11, 09:05 AM</span>
                                        </div>
                                    </div>

                                    <div className="collapse" id="EmailThree">
                                        <div className="mt-3">
                                            <p>Hello team,</p>
                                            <p>I did a final check on the landing page animations. Everything works smoothly except the testimonial slider – there's a tiny jitter on loop transition.</p>
                                            <p>Maybe easing timing or delay tweaks can help fix it. Otherwise, great job!</p>
                                            <p>Let me know once it's deployed to staging so I can do one last run-through.</p>
                                            <p className="mt-3 mb-0">Thanks,</p>
                                            <p className="fw-medium mb-0">Anika</p>
                                        </div>

                                        <div className="mt-3">
                                            <div className="d-flex justify-content-between mt-3">
                                                <h4 className="fs-sm text-muted">1 Attachment</h4>
                                            </div>
                                            <div className="mt-2 d-flex flex-wrap gap-3">
                                                <div className="d-flex p-2 gap-2 align-items-center text-start position-relative border border-dashed rounded">
                                                    <i className="ti ti-video fs-24 text-primary"></i>
                                                    <div>
                                                        <h4 className="fs-sm mb-1">
                                                            <a href="#!" className="link-reset stretched-link">testimonial-glitch.mp4</a>
                                                        </h4>
                                                        <p className="fs-xs mb-0">4.7 MB</p>
                                                    </div>
                                                    <i className="ti ti-download fs-24 text-muted"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Email Three --> */}
                                <div className="py-3 border-top border-dashed">
                                    <div className="d-flex align-items-center">
                                        <a className="d-flex align-items-center flex-grow-1 text-reset" data-bs-toggle="collapse" href="#EmailTwo" role="button" aria-expanded="false" aria-controls="EmailTwo">
                                            <img src="assets/images/users/user-5.jpg" className="avatar-md rounded-circle" alt="User Avatar" />
                                            <div className="ms-2 overflow-hidden">
                                                <h5 className="fs-sm mb-0 text-truncate">Laura Chen</h5>
                                                <p className="text-muted mb-0 text-truncate">laura.chen@designteam.co</p>
                                            </div>
                                        </a>
                                        <div className="ms-auto d-flex align-items-center gap-1">
                                            <button className="btn btn-icon btn-sm btn-ghost-light rounded-circle">
                                                <i className="ti ti-star-filled text-warning fs-lg"></i>
                                            </button>
                                            <button className="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                                                <i className="ti ti-mail-forward fs-lg"></i>
                                            </button>
                                            <button className="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle">
                                                <i className="ti ti-mail-opened fs-lg"></i>
                                            </button>
                                            <span className="text-muted fs-xs mb-0 ms-2">Apr 12, 11:42 AM</span>
                                        </div>
                                    </div>

                                    <div className="collapse show" id="EmailTwo">
                                        <div className="mt-lg-4 mt-3">
                                            <p>Hi folks,</p>
                                            <p>Thanks for sharing the prototype. The color scheme and layout look clean, but I think we can still refine the mobile responsiveness on the pricing page.</p>
                                            <p>Also, the button contrast on the footer needs more WCAG-friendly contrast – it's currently a bit hard to read.</p>
                                            <p>I’ve attached some screenshots with markup for clarity.</p>
                                            <p className="mt-3 mb-0">Regards,</p>
                                            <p className="fw-medium">Laura</p>
                                        </div>

                                        <div className="mt-3">
                                            <div className="d-flex justify-content-between mt-3">
                                                <h4 className="fs-sm text-muted">2 Attachments</h4>
                                            </div>
                                            <div className="mt-2 d-flex flex-wrap gap-3">
                                                <div className="d-flex p-2 gap-2 align-items-center text-start position-relative border border-dashed rounded">
                                                    <i className="ti ti-file fs-24 text-danger"></i>
                                                    <div>
                                                        <h4 className="fs-sm mb-1">
                                                            <a href="#!" className="link-reset stretched-link">footer-contrast-notes.pdf</a>
                                                        </h4>
                                                        <p className="fs-xs mb-0">1.2 MB</p>
                                                    </div>
                                                    <i className="ti ti-download fs-24 text-muted"></i>
                                                </div>
                                                <div className="d-flex p-2 gap-3 align-items-center text-start position-relative border border-dashed rounded">
                                                    <i className="ti ti-photo fs-24 text-secondary"></i>
                                                    <div>
                                                        <h4 className="fs-sm mb-1">
                                                            <a href="#!" className="link-reset stretched-link">responsive-issues.png</a>
                                                        </h4>
                                                        <p className="fs-xs mb-0">850 KB</p>
                                                    </div>
                                                    <i className="ti ti-download fs-24 text-muted"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Reply Box --> */}
                                <div className="position-sticky bottom-0 z-1">
                                    <div className="collapse" id="EmailReply">
                                        <div className="mt-2 pb-5">
                                            <textarea className="form-control rounded-top rounded-0" id="exampleFormControlTextarea1" rows={6} placeholder="Enter message"></textarea>
                                            <div className="bg-light-subtle p-2 rounded-bottom border border-top-0">
                                                <div className="d-flex gap-1 align-items-center">
                                                    <button type="button" className="btn btn-sm btn-icon btn-light" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Bold">
                                                        <i className="ti ti-bold"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-icon btn-light" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Italic">
                                                        <i className="ti ti-italic"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-icon btn-light" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Attach files">
                                                        <i className="ti ti-paperclip"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-icon btn-light" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Insert link">
                                                        <i className="ti ti-link"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-icon btn-light" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Insert photo">
                                                        <i className="ti ti-photo-up"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-light ms-auto" data-bs-toggle="collapse" data-bs-target="#EmailReply">
                                                        <i className="ti ti-x me-1"></i>
                                                        Cancel
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-success">
                                                        <i className="ti ti-send-2 me-1"></i>
                                                        Send
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end card-body --> */}

                            <div className="card-header bg-body-secondary border-top border-dashed border-bottom-0 position-absolute bottom-0 w-100">
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-2">
                                        <button className="btn btn-sm btn-default" data-bs-toggle="collapse" data-bs-target="#EmailReply" aria-expanded="false" aria-controls="EmailReply" type="button">
                                            <i className="ti ti-corner-up-left fs-lg"></i>
                                            <span className="fw-medium ms-1">Reply</span>
                                        </button>

                                        <button className="btn btn-sm btn-default" type="button">
                                            <i className="ti ti-corner-up-right-double fs-lg"></i>
                                            <span className="fw-medium ms-1">Forward</span>
                                        </button>

                                        <button className="btn btn-sm btn-default" type="button">
                                            <i className="ti ti-printer fs-lg"></i>
                                            <span className="fw-medium ms-1">Print</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
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
  )
}
