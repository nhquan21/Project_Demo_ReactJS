import React from 'react'
import { Link } from 'react-router-dom'

export const EmailPage = () => {
  return (
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
                                    <Link to={"/email-compose"} className="btn btn-danger fw-medium w-100">Compose</Link>

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

                        <div data-table data-table-rows-per-page="15" className="card h-100 mb-0 rounded-start-0 flex-grow-1 border-start-0">
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
                                    <input className="form-check-input form-check-input-light fs-14 mt-0 me-3" type="checkbox" id="select-all-email" />

                                    {/* <!-- Delete --> */}
                                    <button type="button" className="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip" title="Delete">
                                        <i className="ti ti-trash fs-lg"></i>
                                    </button>

                                    {/* <!-- Mark as Read --> */}
                                    <button type="button" className="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip" title="Mark as Read">
                                        <i className="ti ti-mail-opened fs-lg"></i>
                                    </button>

                                    {/* <!-- Tag --> */}
                                    <button type="button" className="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip" title="Tag">
                                        <i className="ti ti-tag fs-lg"></i>
                                    </button>

                                    {/* <!-- Archive --> */}
                                    <button type="button" className="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip" title="Archive">
                                        <i className="ti ti-archive fs-lg"></i>
                                    </button>

                                    {/* <!-- Move to Folder --> */}
                                    <button type="button" className="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip" title="Move to Folder">
                                        <i className="ti ti-folder fs-lg"></i>
                                    </button>

                                    {/* <!-- Forward --> */}
                                    <button type="button" className="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip" title="Forward">
                                        <i className="ti ti-mail-forward fs-lg"></i>
                                    </button>

                                    {/* <!-- Snooze --> */}
                                    <button type="button" className="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip" title="Snooze">
                                        <i className="ti ti-clock-pause fs-lg"></i>
                                    </button>

                                    {/* <!-- Important --> */}
                                    <button type="button" className="btn btn-default btn-icon btn-sm" data-bs-toggle="tooltip" title="Mark as Important">
                                        <i className="ti ti-alert-circle fs-lg"></i>
                                    </button>
                                </div>

                                <div className="app-search d-none d-lg-inline-flex">
                                    <input data-table-search type="text" className="form-control" placeholder="Search mails..." />
                                    <i className="ti ti-search app-search-icon text-muted"></i>
                                </div>
                            </div>

                            <div className="card-body p-0" style={{height: "calc(100% - 100px)"}} data-simplebar data-simplebar-md>
                                <div className="table-responsive">
                                    <table className="table table-hover table-select mb-0">
                                        <tbody>
                                            <tr className="position-relative">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />

                                                        <button className="btn p-0 text-warning fs-xl">
                                                            <i className="ti ti-star-filled"></i>
                                                        </button>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="/src/assets/images/users/user-5.jpg" alt="user avatar" className="avatar-xs rounded-circle" />
                                                        <h5 className="fs-base mb-0 fw-medium">Amanda Reyes</h5>
                                                    </div>
                                                </td>

                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Design Review & Feedback</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">I’ve reviewed the updated UI mockups. Great work overall—just a few...</span>
                                                </td>

                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">3</span>
                                                    </div>
                                                </td>

                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 20, 10:12 AM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-warning fs-xl">
                                                            <i className="ti ti-star-filled"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="/src/assets/images/users/user-2.jpg" alt="user avatar" className="avatar-xs rounded-circle" />
                                                        <h5 className="fs-base mb-0 fw-medium">George Thomas</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Request for Meeting</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">Are you available for a quick sync-up this week regarding the roadmap?</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">1</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 19, 4:45 PM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative mark-as-read">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-muted fs-xl">
                                                            <i className="ti ti-star"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title text-bg-primary rounded-circle">L</span>
                                                        </div>
                                                        <h5 className="fs-base mb-0 fw-medium">Lucas Martin</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Q2 Marketing Strategy</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">Here's the proposed outline for our Q2 campaign and goals...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">2</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 19, 11:30 AM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative mark-as-read">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-warning fs-xl">
                                                            <i className="ti ti-star-filled"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="/src/assets/images/users/user-6.jpg" alt="user avatar" className="avatar-xs rounded-circle" />
                                                        <h5 className="fs-base mb-0 fw-medium">Sophia Lee</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Final Invoice Attached</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">Attached is the invoice for the April sprint deliverables. Let me know...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">1</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 18, 6:05 PM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative mark-as-read">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-muted fs-xl">
                                                            <i className="ti ti-star"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title text-bg-danger fw-bold rounded-circle">D</span>
                                                        </div>
                                                        <h5 className="fs-base mb-0 fw-medium">Daniel Kim</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Team Offsite Agenda</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">Here’s a rough outline for the team offsite activities next month...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1 opacity-25">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">0</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 18, 1:20 PM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative mark-as-read">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-muted fs-xl">
                                                            <i className="ti ti-star"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title bg-secondary-subtle text-secondary fw-bold rounded-circle">C</span>
                                                        </div>
                                                        <h5 className="fs-base mb-0 fw-medium">Chloe Bennett</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Welcome to the Project!</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">Excited to have you on board. Let’s have a quick intro call tomorrow...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1 opacity-25">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">0</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 17, 9:18 AM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-warning fs-xl">
                                                            <i className="ti ti-star-filled"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="/src/assets/images/users/user-6.jpg" alt="user avatar" className="avatar-xs rounded-circle" />
                                                        <h5 className="fs-base mb-0 fw-medium">James Carter</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Meeting Follow-up Notes</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">Thanks for the insights today. Please find the summary and action points...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">1</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 17, 2:45 PM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative mark-as-read">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-muted fs-xl">
                                                            <i className="ti ti-star"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="/src/assets/images/users/user-7.jpg" alt="user avatar" className="avatar-xs rounded-circle" />
                                                        <h5 className="fs-base mb-0 fw-medium">Sophia Allen</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Project Files Delivered</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">The final batch of designs and documentation has been uploaded to the drive...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">2</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 16, 11:05 AM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-muted fs-xl">
                                                            <i className="ti ti-star"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="/src/assets/images/users/user-8.jpg" alt="user avatar" className="avatar-xs rounded-circle" />
                                                        <h5 className="fs-base mb-0 fw-medium">Michael Chen</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Re: Budget Estimate</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">The budget looks good overall, but we might need to adjust the Q3 allocations...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">1</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 15, 6:28 PM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative mark-as-read">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-muted fs-xl">
                                                            <i className="ti ti-star"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title text-bg-dark fw-bold rounded-circle">E</span>
                                                        </div>
                                                        <h5 className="fs-base mb-0 fw-medium">Emma Watson</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Collaboration Opportunity</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">I’d love to chat about a possible partnership on our upcoming launch event...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1 opacity-25">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">0</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 14, 3:59 PM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative mark-as-read">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-warning fs-xl">
                                                            <i className="ti ti-star-filled"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="/src/assets/images/users/user-10.jpg" alt="user avatar" className="avatar-xs rounded-circle" />
                                                        <h5 className="fs-base mb-0 fw-medium">Daniel White</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Reschedule Request</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">Can we move our call to Friday afternoon instead? Something urgent came up...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1 opacity-25">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">0</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 13, 10:20 AM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative mark-as-read">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-warning fs-xl">
                                                            <i className="ti ti-star-filled"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="/src/assets/images/users/user-3.jpg" alt="user avatar" className="avatar-xs rounded-circle" />
                                                        <h5 className="fs-base mb-0 fw-medium">James Walker</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Monthly Report Submission</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">Please find the attached monthly performance report for your review...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">1</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 16, 11:42 AM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-muted fs-xl">
                                                            <i className="ti ti-star"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title text-bg-warning fw-bold rounded-circle">E</span>
                                                        </div>
                                                        <h5 className="fs-base mb-0 fw-medium">Emma Johnson</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Design Assets Update</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">I’ve uploaded the latest illustrations and icons to the shared folder...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1 opacity-25">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">0</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 16, 8:09 AM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative mark-as-read">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-warning fs-xl">
                                                            <i className="ti ti-star-filled"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="/src/assets/images/users/user-9.jpg" alt="user avatar" className="avatar-xs rounded-circle" />
                                                        <h5 className="fs-base mb-0 fw-medium">Noah Patel</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Updated Meeting Schedule</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">Please review the adjusted times for next week's client meetings...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">2</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 15, 4:55 PM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative mark-as-read">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-muted fs-xl">
                                                            <i className="ti ti-star"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="/src/assets/images/users/user-3.jpg" alt="user avatar" className="avatar-xs rounded-circle" />
                                                        <h5 className="fs-base mb-0 fw-medium">Ava Thompson</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Client Feedback Notes</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">Attached is the client feedback from last week’s demo session...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">1</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 15, 9:32 AM</p>
                                                </td>
                                            </tr>

                                            <tr className="position-relative mark-as-read">
                                                <td className="ps-3" style={{width: "1%"}}>
                                                    <div className="d-flex gap-3">
                                                        <input className="form-check-input form-check-input-light fs-14 position-relative z-2 mt-0 email-item-check" type="checkbox" />
                                                        <button className="btn p-0 text-muted fs-xl">
                                                            <i className="ti ti-star"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="/src/assets/images/users/user-1.jpg" alt="user avatar" className="avatar-xs rounded-circle" />
                                                        <h5 className="fs-base mb-0 fw-medium">Liam Garcia</h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="apps-email-details.html" className="link-reset fs-base fw-medium stretched-link">Weekly Sync Meeting</a>
                                                    <span className="d-xl-inline-block d-none">—</span>
                                                    <span className="fs-base text-muted d-xl-inline-block d-none mb-0">Let’s discuss blockers and updates on the current sprints in our sync...</span>
                                                </td>
                                                <td style={{width: "1%"}}>
                                                    <div className="d-flex align-items-center gap-1 opacity-25">
                                                        <i className="ti ti-paperclip"></i>
                                                        <span className="fw-semibold">0</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="fs-xs text-muted mb-0 text-end pe-2">Apr 14, 3:30 PM</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* <!-- end table responsive--> */}

                                <div className="d-flex align-items-center justify-content-center gap-2 p-3">
                                    <strong>Loading...</strong>
                                    <div className="spinner-border spinner-border-sm text-danger" role="status" aria-hidden="true"></div>
                                </div>
                            </div>
                            {/* <!-- end card-body--> */}
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
