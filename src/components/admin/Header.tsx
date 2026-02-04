import { NavLink } from "react-router-dom";
import { clearItem, getUserStorage } from "../../utils/auth"
import { useEffect, useState } from "react";
import type { AuthenticationResponse } from "../../features/auth/authType";


export const Header = () => {
    const [profile, setProfile] = useState<AuthenticationResponse | null>(null);

    useEffect(() => {
        const fetchUserProfile = () => {
            const user = getUserStorage()
            setProfile(user);
        }
        fetchUserProfile()
    }, [])
    return (
        <header className="app-topbar">
            <div className="container-fluid topbar-menu">
                <div className="d-flex align-items-center gap-2">
                    {/* <!-- Topbar Brand Logo --> */}
                    <div className="logo-topbar">
                        {/* <!-- Logo light --> */}
                        <a href="index.html" className="logo-light">
                            <span className="logo-lg">
                                <img src="/src/assets/images/logo.png" alt="logo" />
                            </span>
                            <span className="logo-sm">
                                <img src="/src/assets/images/logo-sm.png" alt="small logo" />
                            </span>
                        </a>

                        {/* <!-- Logo Dark --> */}
                        <a href="index.html" className="logo-dark">
                            <span className="logo-lg">
                                <img src="/src/assets/images/logo-black.png" alt="dark logo" />
                            </span>
                            <span className="logo-sm">
                                <img src="/src/assets/images/logo-sm.png" alt="small logo" />
                            </span>
                        </a>
                    </div>

                    {/* <!-- Sidebar Menu Toggle Button --> */}
                    <button className="sidenav-toggle-button btn btn-primary btn-icon">
                        <i className="ti ti-menu-4"></i>
                    </button>

                    {/* <!-- Horizontal Menu Toggle Button --> */}
                    <button className="topnav-toggle-button px-2" data-bs-toggle="collapse" data-bs-target="#topnav-menu">
                        <i className="ti ti-menu-4"></i>
                    </button>

                    <div id="search-box-rounded" className="app-search d-none d-xl-flex">
                        <input type="search" className="form-control rounded-pill topbar-search" name="search" placeholder="Quick Search..." />
                        <i className="ti ti-search app-search-icon text-muted"></i>
                    </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                    <div id="theme-dropdown" className="topbar-item d-none d-sm-flex">
                        <div className="dropdown">
                            <button className="topbar-link" data-bs-toggle="dropdown" type="button" aria-haspopup="false" aria-expanded="false">
                                <i className="ti ti-sun topbar-link-icon d-none" id="theme-icon-light"></i>
                                <i className="ti ti-moon topbar-link-icon d-none" id="theme-icon-dark"></i>
                                <i className="ti ti-sun-moon topbar-link-icon d-none" id="theme-icon-system"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" data-thememode="dropdown">
                                <label className="dropdown-item cursor-pointer">
                                    <input className="form-check-input" type="radio" name="data-bs-theme" value="light" style={{ display: "none" }} />
                                    <i className="ti ti-sun align-middle me-1 fs-16"></i>
                                    <span className="align-middle">Light</span>
                                </label>
                                <label className="dropdown-item cursor-pointer">
                                    <input className="form-check-input" type="radio" name="data-bs-theme" value="dark" style={{ display: "none" }} />
                                    <i className="ti ti-moon align-middle me-1 fs-16"></i>
                                    <span className="align-middle">Dark</span>
                                </label>
                                <label className="dropdown-item cursor-pointer">
                                    <input className="form-check-input" type="radio" name="data-bs-theme" value="system" style={{ display: "none" }} />
                                    <i className="ti ti-sun-moon align-middle me-1 fs-16"></i>
                                    <span className="align-middle">System</span>
                                </label>
                            </div>
                            {/* <!-- end dropdown-menu--> */}
                        </div>
                        {/* <!-- end dropdown--> */}
                    </div>

                    <div id="apps-dropdown-grid" className="topbar-item d-none d-xl-flex">
                        <div className="dropdown">
                            <button className="topbar-link dropdown-toggle drop-arrow-none" data-bs-toggle="dropdown" type="button" data-bs-auto-close="outside" aria-haspopup="false" aria-expanded="false">
                                <i className="ti ti-apps topbar-link-icon"></i>
                            </button>

                            <div className="dropdown-menu dropdown-menu-lg p-2 dropdown-menu-end">
                                <div className="row align-items-center g-1">
                                    <div className="col-4">
                                        <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                            <span className="avatar-sm d-block mx-auto mb-1">
                                                <span className="avatar-title text-bg-light rounded-circle">
                                                    <img src="/src/assets/images/logos/google.svg" alt="Google Logo" height="18" />
                                                </span>
                                            </span>
                                            <span className="align-middle fw-medium">Google</span>
                                        </a>
                                    </div>

                                    <div className="col-4">
                                        <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                            <span className="avatar-sm d-block mx-auto mb-1">
                                                <span className="avatar-title text-bg-light rounded-circle">
                                                    <img src="/src/assets/images/logos/figma.svg" alt="Figma Logo" height="18" />
                                                </span>
                                            </span>
                                            <span className="align-middle fw-medium">Figma</span>
                                        </a>
                                    </div>

                                    <div className="col-4">
                                        <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                            <span className="avatar-sm d-block mx-auto mb-1">
                                                <span className="avatar-title text-bg-light rounded-circle">
                                                    <img src="/src/assets/images/logos/slack.svg" alt="Slack Logo" height="18" />
                                                </span>
                                            </span>
                                            <span className="align-middle fw-medium">Slack</span>
                                        </a>
                                    </div>

                                    <div className="col-4">
                                        <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                            <span className="avatar-sm d-block mx-auto mb-1">
                                                <span className="avatar-title text-bg-light rounded-circle">
                                                    <img src="/src/assets/images/logos/dropbox.svg" alt="Dropbox Logo" height="18" />
                                                </span>
                                            </span>
                                            <span className="align-middle fw-medium">Dropbox</span>
                                        </a>
                                    </div>

                                    <div className="col-4 text-center">
                                        <a href="javascript:void(0);" className="btn btn-sm rounded-circle btn-icon btn-danger">
                                            <i className="ti ti-circle-dashed-plus fs-18"></i>
                                        </a>
                                    </div>

                                    <div className="col-4">
                                        <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                            <span className="avatar-sm d-block mx-auto mb-1">
                                                <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i className="ti ti-calendar fs-18"></i>
                                                </span>
                                            </span>
                                            <span className="align-middle fw-medium">Calendar</span>
                                        </a>
                                    </div>

                                    <div className="col-4">
                                        <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                            <span className="avatar-sm d-block mx-auto mb-1">
                                                <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i className="ti ti-message-circle fs-18"></i>
                                                </span>
                                            </span>
                                            <span className="align-middle fw-medium">Chat</span>
                                        </a>
                                    </div>

                                    <div className="col-4">
                                        <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                            <span className="avatar-sm d-block mx-auto mb-1">
                                                <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i className="ti ti-folder fs-18"></i>
                                                </span>
                                            </span>
                                            <span className="align-middle fw-medium">Files</span>
                                        </a>
                                    </div>

                                    <div className="col-4">
                                        <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                            <span className="avatar-sm d-block mx-auto mb-1">
                                                <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i className="ti ti-users fs-18"></i>
                                                </span>
                                            </span>
                                            <span className="align-middle fw-medium">Team</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End dropdown-menu --> */}
                        </div>
                        {/* <!-- end dropdown--> */}
                    </div>

                    <div id="language-selector-rounded" className="topbar-item">
                        <div className="dropdown">
                            <button className="topbar-link fw-bold" data-bs-toggle="dropdown" type="button" aria-haspopup="false" aria-expanded="false">
                                <img src="/src/assets/images/flags/us.svg" alt="user-image" className="rounded-circle me-2" height="18" id="selected-language-image" />
                                <span id="selected-language-code">EN</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="en" title="English">
                                    <img src="/src/assets/images/flags/us.svg" alt="English" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                    <span className="align-middle">English</span>
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="de" title="German">
                                    <img src="/src/assets/images/flags/de.svg" alt="German" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                    <span className="align-middle">Deutsch</span>
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="it" title="Italian">
                                    <img src="/src/assets/images/flags/it.svg" alt="Italian" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                    <span className="align-middle">Italiano</span>
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="es" title="Spanish">
                                    <img src="/src/assets/images/flags/es.svg" alt="Spanish" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                    <span className="align-middle">Español</span>
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="ru" title="Russian">
                                    <img src="/src/assets/images/flags/ru.svg" alt="Russian" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                    <span className="align-middle">Русский</span>
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="hi" title="Hindi">
                                    <img src="/src/assets/images/flags/in.svg" alt="Hindi" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                    <span className="align-middle">हिन्दी</span>
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="ar" title="Arabic">
                                    <img src="/src/assets/images/flags/sa.svg" alt="Arabic" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                    <span className="align-middle">عربي</span>
                                </a>
                            </div>
                            {/* <!-- end dropdown-menu--> */}
                        </div>
                        {/* <!-- end dropdown--> */}
                    </div>

                    <div id="user-dropdown-detailed" className="topbar-item nav-user">
                        <div className="dropdown">
                            <a className="topbar-link dropdown-toggle drop-arrow-none px-2" data-bs-toggle="dropdown" href="#!" aria-haspopup="false" aria-expanded="false">
                                <img src="/src/assets/images/users/user-1.jpg" width="32" className="rounded-circle me-lg-2 d-flex" alt="user-image" />
                                <div className="d-lg-flex align-items-center gap-1 d-none">
                                    <span>
                                        <h5 className="my-0 lh-1 pro-username">{profile?.username}</h5>
                                        <span className="fs-xs lh-1">{profile?.email}</span>
                                    </span>
                                    <i className="ti ti-chevron-down align-middle"></i>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                {/* <!-- Header --> */}
                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Welcome back 👋!</h6>
                                </div>

                                {/* <!-- My Profile --> */}

                                {profile?.role == 'ROLE_USER' && <NavLink to={"/profile"} className="dropdown-item">
                                    <i className="ti ti-user-circle me-1 fs-lg align-middle"></i>
                                    <span className="align-middle">Profile</span>
                                </NavLink>}
                                {/* <!-- Divider --> */}
                                <div className="dropdown-divider"></div>

                                {/* <!-- Logout --> */}
                                <a href="javascript:void(0);" className="dropdown-item fw-semibold">
                                    <i className="ti ti-logout me-1 fs-lg align-middle"></i>
                                    <span className="align-middle" onClick={() => { clearItem(); }}
                                    >Log Out</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
