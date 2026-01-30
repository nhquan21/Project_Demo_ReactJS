import { useAuth } from "../../guards/AuthContext";



export const Profile = () => {
    const { user } = useAuth();
    return (
        <>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Profile</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                                <li className="breadcrumb-item active">Profile</li>
                            </ol>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12">
                            <article className="card overflow-hidden mb-0">
                                <div
                                    className="position-relative card-side-img overflow-hidden"
                                    style={{
                                        minHeight: "300px",
                                        backgroundImage: "url('//src/assets/images/profile-bg.jpg')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                >
                                    <div className="p-4 card-img-overlay rounded-start-0 auth-overlay d-flex align-items-center flex-column justify-content-center">
                                        <h3 className="text-white mb-1 fst-italic">
                                            "Crafting innovation through clean design"
                                        </h3>
                                        <p className="text-white mb-4">– MyStatus</p>
                                    </div>
                                </div>
                            </article>

                        </div>
                        {/* <!-- end col--> */}
                    </div>
                    {/* <!-- end row--> */}

                    <div className="px-3 mt-n4">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card card-top-sticky">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="me-3 position-relative">
                                                <img src="/src/assets/images/users/user-1.jpg" alt="avatar" className="rounded-circle" width="72" height="72" />
                                            </div>
                                            <div>
                                                <h5 className="mb-0 d-flex align-items-center">
                                                    <a href="#!" className="link-reset">{user?.username}</a>
                                                    <img src="/src/assets/images/flags/us.svg" alt="US" className="ms-2 rounded-circle" height="16" />
                                                </h5>
                                                <p className="text-muted mb-2">Senior Developer</p>
                                                <span className="badge text-bg-light badge-label">Team Lead</span>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="dropdown">
                                                    <a href="#" className="btn btn-icon btn-ghost-light text-muted" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical fs-xl"></i>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a className="dropdown-item" href="#">Edit Profile</a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item text-danger" href="#">Report</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="">
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <div className="avatar-sm text-bg-light bg-opacity-75 d-flex align-items-center justify-content-center rounded-circle">
                                                    <i className="ti ti-briefcase fs-xl"></i>
                                                </div>
                                                <p className="mb-0 fs-sm">UI/UX Designer & Full-Stack Developer</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <div className="avatar-sm text-bg-light bg-opacity-75 d-flex align-items-center justify-content-center rounded-circle">
                                                    <i className="ti ti-school fs-xl"></i>
                                                </div>
                                                <p className="mb-0 fs-sm">
                                                    Studied at
                                                    <span className="text-dark fw-semibold">Stanford University</span>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <div className="avatar-sm text-bg-light bg-opacity-75 d-flex align-items-center justify-content-center rounded-circle">
                                                    <i className="ti ti-map-pin fs-xl"></i>
                                                </div>
                                                <p className="mb-0 fs-sm">
                                                    Lives in
                                                    <span className="text-dark fw-semibold">San Francisco, CA</span>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <div className="avatar-sm text-bg-light bg-opacity-75 d-flex align-items-center justify-content-center rounded-circle">
                                                    <i className="ti ti-users fs-xl"></i>
                                                </div>
                                                <p className="mb-0 fs-sm">
                                                    Followed by
                                                    <span className="text-dark fw-semibold">25.3k People</span>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <div className="avatar-sm text-bg-light bg-opacity-75 d-flex align-items-center justify-content-center rounded-circle">
                                                    <i className="ti ti-mail fs-xl"></i>
                                                </div>
                                                <p className="mb-0 fs-sm">
                                                    Email
                                                    <a href="mailto:hello@example.com" className="text-primary fw-semibold">hello@example.com</a>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <div className="avatar-sm text-bg-light bg-opacity-75 d-flex align-items-center justify-content-center rounded-circle">
                                                    <i className="ti ti-link fs-xl"></i>
                                                </div>
                                                <p className="mb-0 fs-sm">
                                                    Website
                                                    <a href="https://www.example.dev/" className="text-primary fw-semibold">www.example.dev</a>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="avatar-sm text-bg-light bg-opacity-75 d-flex align-items-center justify-content-center rounded-circle">
                                                    <i className="ti ti-world fs-xl"></i>
                                                </div>
                                                <p className="mb-0 fs-sm">
                                                    Languages
                                                    <span className="text-dark fw-semibold">English, Japanese</span>
                                                </p>
                                            </div>

                                            <div className="d-flex justify-content-center gap-2 mt-4 mb-2">
                                                <a href="#!" className="btn btn-icon rounded-circle btn-primary" title="Facebook">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                                    </svg>
                                                </a>
                                                <a href="#!" className="btn btn-icon rounded-circle btn-info" title="Twitter-x">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                                    </svg>
                                                </a>
                                                <a href="#!" className="btn btn-icon rounded-circle btn-danger" title="Instagram">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                                        <path d="M16.5 7.5v.01" />
                                                    </svg>
                                                </a>
                                                <a href="#!" className="btn btn-icon rounded-circle btn-success" title="Dribbble">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-dribbble"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                        <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
                                                        <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
                                                        <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
                                                    </svg>
                                                </a>
                                                <a href="#!" className="btn btn-icon rounded-circle btn-secondary" title="LinkedIn">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M8 11v5" />
                                                        <path d="M8 8v.01" />
                                                        <path d="M12 16v-5" />
                                                        <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                                                        <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                                                    </svg>
                                                </a>
                                                <a href="#!" className="btn btn-icon rounded-circle btn-danger" title="YouTube">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                                                        <path d="M10 9l5 3l-5 3z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!----> */}
                                        <h4 className="card-title mb-3 mt-4">Skills</h4>

                                        <div className="d-flex flex-wrap gap-1">
                                            <a className="btn btn-light btn-sm" href="#">Product Design</a>
                                            <a className="btn btn-light btn-sm" href="#">UI/UX</a>
                                            <a className="btn btn-light btn-sm" href="#">Tailwind CSS</a>
                                            <a className="btn btn-light btn-sm" href="#">Bootstrap</a>
                                            <a className="btn btn-light btn-sm" href="#">React.js</a>
                                            <a className="btn btn-light btn-sm" href="#">Next.js</a>
                                            <a className="btn btn-light btn-sm" href="#">Vue.js</a>
                                            <a className="btn btn-light btn-sm" href="#">Figma</a>
                                            <a className="btn btn-light btn-sm" href="#">Design Systems</a>
                                            <a className="btn btn-light btn-sm" href="#">Template Authoring</a>
                                            <a className="btn btn-light btn-sm" href="#">Responsive Design</a>
                                            <a className="btn btn-light btn-sm" href="#">Component Libraries</a>
                                        </div>
                                    </div>
                                    {/* <!-- end card-body--> */}
                                </div>
                                {/* <!-- end card--> */}
                            </div>
                            {/* <!-- end col--> */}

                            <div className="col-xl-8">
                                <div className="card">
                                    <div className="card-header card-tabs d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <h4 className="card-title">My Account</h4>
                                        </div>
                                        <ul className="nav nav-tabs card-header-tabs nav-bordered">
                                            <li className="nav-item">
                                                <a href="#about-me" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                                    <i className="ti ti-user-circle d-md-none d-block fs-lg"></i>
                                                    <span className="d-none d-md-block fw-bold">About Me</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#timeline" data-bs-toggle="tab" aria-expanded="true" className="nav-link active">
                                                    <i className="ti ti-clock d-md-none d-block fs-lg"></i>
                                                    <span className="d-none d-md-block fw-bold">Timeline</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#settings" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                                    <i className="ti ti-settings d-md-none d-block fs-lg"></i>
                                                    <span className="d-none d-md-block fw-bold">Settings</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="tab-pane" id="about-me">
                                                <p>I'm an Admin Template Author dedicated to building clean, efficient, and highly customizable dashboards for developers and businesses. My goal is to create UI solutions that are modern, scalable, and easy to integrate.</p>

                                                <p>
                                                    I specialize in crafting developer-friendly admin panels and UI kits using frameworks like Bootstrap, Tailwind CSS, React, Vue, Angular, Laravel, and Next.js. My templates are designed to accelerate development and provide a
                                                    strong foundation for web apps, SaaS platforms, and enterprise tools.
                                                </p>

                                                <p className="mb-0">
                                                    I focus on delivering well-structured, pixel-perfect layouts with a user-centric approach—ensuring responsive design, clean code, and seamless user experiences. Whether you're building a CRM, analytics dashboard, or backend
                                                    system, my templates are made to help you build faster and smarter.
                                                </p>

                                                <h4 className="card-title my-3 text-uppercase fs-sm">
                                                    <i className="ti ti-briefcase"></i>
                                                    Professional Experience:
                                                </h4>

                                                <div className="timeline">
                                                    {/* <!-- Experience 1 --> */}
                                                    <div className="timeline-item d-flex align-items-stretch">
                                                        <div className="timeline-time pe-3 text-muted">2023 – Present</div>
                                                        <div className="timeline-dot bg-primary"></div>
                                                        <div className="timeline-content ps-3 pb-4">
                                                            <h5 className="mb-1">Lead UI Developer</h5>
                                                            <p className="mb-1 text-muted">Developing scalable and reusable UI components for SaaS dashboards using React, Tailwind CSS, and TypeScript.</p>
                                                            <span className="text-muted fw-semibold">at CraftCode Studio</span>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Experience 2 --> */}
                                                    <div className="timeline-item d-flex align-items-stretch">
                                                        <div className="timeline-time pe-3 text-muted">2021 – 2023</div>
                                                        <div className="timeline-dot bg-success"></div>
                                                        <div className="timeline-content ps-3 pb-4">
                                                            <h5 className="mb-1">Frontend Engineer</h5>
                                                            <p className="mb-1 text-muted">Built modern, responsive admin templates and UI kits using Vue, Bootstrap 5, and Laravel Blade.</p>
                                                            <span className="text-muted fw-semibold">at CodeNova</span>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Experience 3 --> */}
                                                    <div className="timeline-item d-flex align-items-stretch">
                                                        <div className="timeline-time pe-3 text-muted">2019 – 2021</div>
                                                        <div className="timeline-dot bg-warning"></div>
                                                        <div className="timeline-content ps-3 pb-4">
                                                            <h5 className="mb-1">UI/UX Designer & Developer</h5>
                                                            <p className="mb-1 text-muted">Designed and developed dashboard layouts and admin panel concepts, focusing on accessibility and performance.</p>
                                                            <span className="text-muted fw-semibold">as Freelancer</span>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Experience 4 --> */}
                                                    <div className="timeline-item d-flex align-items-stretch">
                                                        <div className="timeline-time pe-3 text-muted">2017 – 2019</div>
                                                        <div className="timeline-dot bg-info"></div>
                                                        <div className="timeline-content ps-3 pb-4">
                                                            <h5 className="mb-1">Web Designer</h5>
                                                            <p className="mb-1 text-muted">Created responsive HTML/CSS templates and themes for clients in eCommerce and portfolio niches.</p>
                                                            <span className="text-muted fw-semibold">at PixelFrame Agency</span>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Experience 5 --> */}
                                                    <div className="timeline-item d-flex align-items-stretch">
                                                        <div className="timeline-time pe-3 text-muted">2015 – 2017</div>
                                                        <div className="timeline-dot bg-secondary"></div>
                                                        <div className="timeline-content ps-3">
                                                            <h5 className="mb-1">Junior Frontend Developer</h5>
                                                            <p className="mb-1 text-muted">Maintained and updated legacy UI projects, gaining hands-on experience in HTML, CSS, jQuery, and Bootstrap 3.</p>
                                                            <span className="text-muted fw-semibold">at DevLaunch</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <h4 className="card-title my-3 text-uppercase fs-sm">
                                                    <i className="ti ti-list-check"></i>
                                                    Tasks Overview:
                                                </h4>

                                                <div className="table-responsive">
                                                    <table className="table table-centered table-custom table-sm table-nowrap table-hover mb-0">
                                                        <thead className="bg-light bg-opacity-25 thead-sm">
                                                            <tr className="text-uppercase fs-xxs">
                                                                <th data-table-sort="task">Task</th>
                                                                <th data-table-sort>Status</th>
                                                                <th data-table-sort="name">Assigned By</th>
                                                                <th data-table-sort>Start Date</th>
                                                                <th data-table-sort>Priority</th>
                                                                <th data-table-sort>Progress</th>
                                                                <th data-table-sort>Total Time Spent</th>
                                                                <th style={{ width: "30px" }}></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h5 className="fs-sm my-1">
                                                                        <a href="#" className="text-body">Blazor Admin Theme – Final QA</a>
                                                                    </h5>
                                                                    <span className="text-muted fs-xs">Due in 3 days</span>
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-warning">In-progress</span>
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div className="avatar avatar-sm">
                                                                            <img src="/src/assets/images/users/user-7.jpg" alt="avatar" className="img-fluid rounded-circle" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className="text-nowrap fs-sm mb-0">Jordan Walsh</h5>
                                                                            <p className="text-muted fs-xs mb-0">jordan@uxlabs.io</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>Jul 20, 2025</td>
                                                                <td>
                                                                    <span className="badge badge-soft-danger">High</span>
                                                                </td>
                                                                <td>60%</td>
                                                                <td>9h 10min</td>
                                                                <td>
                                                                    <a href="#" className="text-muted fs-xxl">
                                                                        <i className="ti ti-pencil"></i>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h5 className="fs-sm my-1">
                                                                        <a href="#" className="text-body">Vue 3 UI Kit Refactor</a>
                                                                    </h5>
                                                                    <span className="text-muted fs-xs">Due in 8 days</span>
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-success">Completed</span>
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div className="avatar avatar-sm">
                                                                            <img src="/src/assets/images/users/user-8.jpg" alt="avatar" className="img-fluid rounded-circle" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className="text-nowrap fs-sm mb-0">Emily Foster</h5>
                                                                            <p className="text-muted fs-xs mb-0">emily@devspark.pro</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>Jul 10, 2025</td>
                                                                <td>
                                                                    <span className="badge badge-soft-success">Low</span>
                                                                </td>
                                                                <td>100%</td>
                                                                <td>27h 20min</td>
                                                                <td>
                                                                    <a href="#" className="text-muted fs-xxl">
                                                                        <i className="ti ti-pencil"></i>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h5 className="fs-sm my-1">
                                                                        <a href="#" className="text-body">HTML Email Templates Pack</a>
                                                                    </h5>
                                                                    <span className="text-muted fs-xs">Due in 1 day</span>
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-warning">In-progress</span>
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div className="avatar avatar-sm">
                                                                            <img src="/src/assets/images/users/user-9.jpg" alt="avatar" className="img-fluid rounded-circle" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className="text-nowrap fs-sm mb-0">Ella Newman</h5>
                                                                            <p className="text-muted fs-xs mb-0">ella@mailgenius.app</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>Jul 18, 2025</td>
                                                                <td>
                                                                    <span className="badge badge-soft-primary">Medium</span>
                                                                </td>
                                                                <td>55%</td>
                                                                <td>5h 40min</td>
                                                                <td>
                                                                    <a href="#" className="text-muted fs-xxl">
                                                                        <i className="ti ti-pencil"></i>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h5 className="fs-sm my-1">
                                                                        <a href="#" className="text-body">Bootstrap 5 Theme Migration</a>
                                                                    </h5>
                                                                    <span className="text-muted fs-xs">Due in 6 days</span>
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-dark">On Hold</span>
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div className="avatar avatar-sm">
                                                                            <img src="/src/assets/images/users/user-10.jpg" alt="avatar" className="img-fluid rounded-circle" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className="text-nowrap fs-sm mb-0">Daniel Rhodes</h5>
                                                                            <p className="text-muted fs-xs mb-0">daniel@uideck.net</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>Jul 16, 2025</td>
                                                                <td>
                                                                    <span className="badge badge-soft-secondary">Low</span>
                                                                </td>
                                                                <td>25%</td>
                                                                <td>4h 15min</td>
                                                                <td>
                                                                    <a href="#" className="text-muted fs-xxl">
                                                                        <i className="ti ti-pencil"></i>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h5 className="fs-sm my-1">
                                                                        <a href="#" className="text-body">SaaS Dashboard: UX Testing</a>
                                                                    </h5>
                                                                    <span className="text-muted fs-xs">Due in 9 days</span>
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-danger">Outdated</span>
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div className="avatar avatar-sm">
                                                                            <img src="/src/assets/images/users/user-2.jpg" alt="avatar" className="img-fluid rounded-circle" />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className="text-nowrap fs-sm mb-0">Leo Patterson</h5>
                                                                            <p className="text-muted fs-xs mb-0">leo@uxcore.studio</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>Jul 05, 2025</td>
                                                                <td>
                                                                    <span className="badge badge-soft-danger">High</span>
                                                                </td>
                                                                <td>20%</td>
                                                                <td>12h 30min</td>
                                                                <td>
                                                                    <a href="#" className="text-muted fs-xxl">
                                                                        <i className="ti ti-pencil"></i>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {/* <!-- end About Me data--> */}

                                            <div className="tab-pane show active" id="timeline">
                                                {/* <!-- comment box --> */}
                                                <form action="#" className="mb-3">
                                                    <textarea rows={3} className="form-control" placeholder="Write something..."></textarea>
                                                    <div className="d-flex py-2 justify-content-between">
                                                        <div>
                                                            <a href="#" className="btn btn-sm btn-icon btn-light">
                                                                <i className="ti ti-user fs-md"></i>
                                                            </a>
                                                            <a href="#" className="btn btn-sm btn-icon btn-light">
                                                                <i className="ti ti-map-pin fs-md"></i>
                                                            </a>
                                                            <a href="#" className="btn btn-sm btn-icon btn-light">
                                                                <i className="ti ti-camera fs-md"></i>
                                                            </a>
                                                            <a href="#" className="btn btn-sm btn-icon btn-light">
                                                                <i className="ti ti-mood-smile fs-md"></i>
                                                            </a>
                                                        </div>
                                                        <button type="submit" className="btn btn-sm btn-dark">Post</button>
                                                    </div>
                                                </form>
                                                {/* <!-- end comment box --> */}

                                                {/* <!-- Story Box--> */}
                                                <div className="border border-light border-dashed rounded p-2 mb-3">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <img className="me-2 avatar-md rounded-circle" src="/src/assets/images/users/user-3.jpg" alt="Generic placeholder image" />
                                                        <div className="w-100">
                                                            <h5 className="m-0">Jeremy Tomlinson</h5>
                                                            <p className="text-muted mb-0">
                                                                <small>about 2 minutes ago</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p>Story based around the idea of time lapse, animation to post soon!</p>

                                                    <img src="/src/assets/images/stock/small-1.jpg" alt="post-img" className="rounded me-1" height="60" />
                                                    <img src="/src/assets/images/stock/small-2.jpg" alt="post-img" className="rounded me-1" height="60" />
                                                    <img src="/src/assets/images/stock/small-3.jpg" alt="post-img" className="rounded" height="60" />

                                                    <div className="mt-2">
                                                        <a href="javascript: void(0);" className="btn btn-sm fs-sm btn-link text-muted">
                                                            <i className="ti ti-corner-up-left me-1"></i>
                                                            Reply
                                                        </a>
                                                        <span className="btn btn-sm fs-sm btn-link text-muted" data-toggler="on">
                                                            <span data-toggler-on className="align-middle">
                                                                <i className="ti ti-heart-filled text-danger"></i>
                                                                Liked!
                                                            </span>
                                                            <span data-toggler-off className="d-none align-middle">
                                                                <i className="ti ti-heart text-muted"></i>
                                                                Like
                                                            </span>
                                                        </span>
                                                        <a href="javascript: void(0);" className="btn btn-sm fs-sm btn-link text-muted">
                                                            <i className="ti ti-share me-1"></i>
                                                            Share
                                                        </a>
                                                    </div>
                                                </div>

                                                {/* <!-- Story Box--> */}
                                                <div className="border border-light border-dashed rounded p-2 mb-3">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <img className="me-2 avatar-sm rounded-circle" src="/src/assets/images/users/user-4.jpg" alt="Generic placeholder image" />
                                                        <div className="w-100">
                                                            <h5 className="m-0">Sophia Martinez</h5>
                                                            <p className="text-muted mb-0">
                                                                <small>about 30 minutes ago</small>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="fs-16 text-center mt-3 mb-4 fst-italic">
                                                        <i className="ti ti-quote fs-20"></i>
                                                        Just finished a weekend project! Built a small weather app using React and OpenWeather API. Feeling excited to share the results with everyone soon. 🚀
                                                    </div>

                                                    <div className="bg-light-subtle m-n2 p-2 border-top border-bottom border-dashed">
                                                        <div className="d-flex align-items-start">
                                                            <img className="me-2 avatar-sm rounded-circle" src="/src/assets/images/users/user-1.jpg" alt="Generic placeholder image" />
                                                            <div className="w-100">
                                                                <h5 className="mt-0 mb-1">
                                                                    Liam Johnson
                                                                    <small className="text-muted">10 minutes ago</small>
                                                                </h5>
                                                                That sounds awesome! Can't wait to see how you designed the UI.
                                                                <br />
                                                                <a href="javascript:void(0);" className="text-muted font-13 d-inline-block mt-2">
                                                                    <i className="ti ti-corner-up-left"></i>
                                                                    Reply
                                                                </a>

                                                                <div className="d-flex align-items-start mt-3">
                                                                    <a className="pe-2" href="#">
                                                                        <img src="/src/assets/images/users/user-2.jpg" className="avatar-sm rounded-circle" alt="Generic placeholder image" />
                                                                    </a>
                                                                    <div className="w-100">
                                                                        <h5 className="mt-0 mb-1">
                                                                            Olivia Carter
                                                                            <small className="text-muted">15 minutes ago</small>
                                                                        </h5>
                                                                        I recently built something similar with Vue. Let's collaborate sometime!
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-start mt-2">
                                                            <a className="pe-2" href="#">
                                                                <img src="/src/assets/images/users/user-3.jpg" className="rounded-circle" alt="Generic placeholder image" height="31" />
                                                            </a>
                                                            <div className="w-100">
                                                                <input type="text" id="simpleinput" className="form-control form-control-sm" placeholder="Add a comment..." />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-3">
                                                        <a href="javascript: void(0);" className="btn btn-sm fs-sm btn-link text-muted">
                                                            <i className="ti ti-corner-up-left me-1"></i>
                                                            Reply
                                                        </a>
                                                        <span className="btn btn-sm fs-sm btn-link text-muted" data-toggler="off">
                                                            <span data-toggler-on className="d-none align-middle">
                                                                <i className="ti ti-heart-filled text-danger"></i>
                                                                Liked!
                                                            </span>
                                                            <span data-toggler-off className="align-middle">
                                                                <i className="ti ti-heart text-muted"></i>
                                                                Likes (45)
                                                            </span>
                                                        </span>
                                                        <a href="javascript: void(0);" className="btn btn-sm fs-sm btn-link text-muted">
                                                            <i className="ti ti-share me-1"></i>
                                                            Share
                                                        </a>
                                                    </div>
                                                </div>

                                                {/* <!-- Story Box --> */}
                                                <div className="border border-light border-dashed rounded p-2 mb-3">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <img className="me-2 avatar-sm rounded-circle" src="/src/assets/images/users/user-2.jpg" alt="Profile photo of Anika Roy" />
                                                        <div className="w-100">
                                                            <h5 className="m-0">Anika Roy</h5>
                                                            <p className="text-muted mb-0">
                                                                <small>2 hours ago</small>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <p>Sharing a couple of timelapses from my recent Iceland trip. Let me know which one you like most!</p>

                                                    <div className="row g-2">
                                                        <div className="col-md-6">
                                                            <div className="ratio ratio-16x9 rounded overflow-hidden">
                                                                <iframe src="https://player.vimeo.com/video/1084537" ></iframe>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="ratio ratio-16x9 rounded overflow-hidden">
                                                                <iframe src="https://player.vimeo.com/video/76979871" ></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center gap-2 p-3">
                                                    <strong>Loading...</strong>
                                                    <div className="spinner-border spinner-border-sm text-danger" role="status" aria-hidden="true"></div>
                                                </div>
                                            </div>
                                            {/* <!-- end timeline tabs data--> */}

                                            <div className="tab-pane" id="settings">
                                                <form>
                                                    {/* <!-- Personal Info --> */}
                                                    <h5 className="mb-3 text-uppercase bg-light-subtle p-1 border-dashed border rounded border-light d-flex justify-content-center align-items-center gap-1">
                                                        <i className="ti ti-user-circle fs-lg"></i>
                                                        Personal Info
                                                    </h5>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="firstname" className="form-label">First Name</label>
                                                                <input type="text" className="form-control" id="firstname" placeholder="Enter first name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="lastname" className="form-label">Last Name</label>
                                                                <input type="text" className="form-control" id="lastname" placeholder="Enter last name" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="jobtitle" className="form-label">Job Title</label>
                                                                <input type="text" className="form-control" id="jobtitle" placeholder="e.g. UI Developer, Designer" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                                                <input type="text" className="form-control" id="phone" placeholder="+1 234 567 8901" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label htmlFor="userbio" className="form-label">Bio</label>
                                                        <textarea className="form-control" id="userbio" rows={4} placeholder="Write something about yourself..."></textarea>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="useremail" className="form-label">Email Address</label>
                                                                <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                                                                <span className="form-text fs-xs fst-italic text-muted">
                                                                    <a href="#" className="link-reset">Click here to change your email</a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="userpassword" className="form-label">Password</label>
                                                                <input type="password" className="form-control" id="userpassword" placeholder="Enter new password" />
                                                                <span className="form-text fs-xs fst-italic text-muted">
                                                                    <a href="#" className="link-reset">Click here to change your password</a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <label htmlFor="profilephoto" className="form-label">Profile Photo</label>
                                                        <input className="form-control" type="file" id="profilephoto" />
                                                    </div>

                                                    {/* <!-- Address Info --> */}
                                                    <h5 className="mb-3 text-uppercase bg-light-subtle p-1 border-dashed border rounded border-light d-flex justify-content-center align-items-center gap-1">
                                                        <i className="ti ti-map-pin fs-lg"></i>
                                                        Address Info
                                                    </h5>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="address-line1" className="form-label">Address Line 1</label>
                                                                <input type="text" className="form-control" id="address-line1" placeholder="Street, Apartment, Unit, etc." />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="address-line2" className="form-label">Address Line 2</label>
                                                                <input type="text" className="form-control" id="address-line2" placeholder="Optional" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label htmlFor="city" className="form-label">City</label>
                                                                <input type="text" className="form-control" id="city" placeholder="City" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label htmlFor="state" className="form-label">State / Province</label>
                                                                <input type="text" className="form-control" id="state" placeholder="State or Province" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label htmlFor="zipcode" className="form-label">Postal / ZIP Code</label>
                                                                <input type="text" className="form-control" id="zipcode" placeholder="Postal Code" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="country" className="form-label">Country</label>
                                                                <input type="text" className="form-control" id="country" placeholder="Country" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Company Info --> */}
                                                    <h5 className="mb-3 text-uppercase bg-light-subtle p-1 border-dashed border rounded border-light d-flex justify-content-center align-items-center gap-1">
                                                        <i className="ti ti-building fs-lg"></i>
                                                        Company Info
                                                    </h5>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="companyname" className="form-label">Company Name</label>
                                                                <input type="text" className="form-control" id="companyname" placeholder="Enter company name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="cwebsite" className="form-label">Website</label>
                                                                <input type="text" className="form-control" id="cwebsite" placeholder="https://yourcompany.com/" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Social --> */}
                                                    <h5 className="mb-3 text-uppercase bg-light-subtle p-1 border-dashed border rounded border-light d-flex justify-content-center align-items-center gap-1">
                                                        <i className="ti ti-world fs-lg"></i>
                                                        Social
                                                    </h5>
                                                    <div className="row g-3">
                                                        <div className="col-md-6">
                                                            <label htmlFor="social-fb" className="form-label">Facebook</label>
                                                            <div className="input-group">
                                                                <span className="input-group-text">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                                                                    >
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                                                    </svg>
                                                                </span>
                                                                <input type="text" className="form-control" id="social-fb" placeholder="Facebook URL" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="social-tw" className="form-label">Twitter X</label>
                                                            <div className="input-group">
                                                                <span className="input-group-text">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                                                                    >
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                                                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                                                    </svg>
                                                                </span>
                                                                <input type="text" className="form-control" id="social-tw" placeholder="@username" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="social-insta" className="form-label">Instagram</label>
                                                            <div className="input-group">
                                                                <span className="input-group-text">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                                                                    >
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                        <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                                                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                                                        <path d="M16.5 7.5v.01" />
                                                                    </svg>
                                                                </span>
                                                                <input type="text" className="form-control" id="social-insta" placeholder="Instagram URL" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="social-lin" className="form-label">LinkedIn</label>
                                                            <div className="input-group">
                                                                <span className="input-group-text">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                                                                    >
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                        <path d="M8 11v5" />
                                                                        <path d="M8 8v.01" />
                                                                        <path d="M12 16v-5" />
                                                                        <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                                                                        <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                                                                    </svg>
                                                                </span>
                                                                <input type="text" className="form-control" id="social-lin" placeholder="LinkedIn Profile" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="social-gh" className="form-label">GitHub</label>
                                                            <div className="input-group">
                                                                <span className="input-group-text">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                                                                    >
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                        <path
                                                                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <input type="text" className="form-control" id="social-gh" placeholder="GitHub Username" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="social-sky" className="form-label">Dribbble</label>
                                                            <div className="input-group">
                                                                <span className="input-group-text">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-dribbble"
                                                                    >
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                                        <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
                                                                        <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
                                                                        <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
                                                                    </svg>
                                                                </span>
                                                                <input type="text" className="form-control" id="social-sky" placeholder="@username" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Submit --> */}
                                                    <div className="text-end mt-4">
                                                        <button type="submit" className="btn btn-success">Save Changes</button>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* <!-- end settings Data--> */}
                                        </div>
                                        {/* <!-- end tab content--> */}
                                    </div>
                                    {/* <!-- end card-body --> */}
                                </div>
                                {/* <!-- end card--> */}
                            </div>
                            {/* <!-- end col--> */}
                        </div>
                        {/* <!-- end row--> */}
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
