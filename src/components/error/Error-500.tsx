

export const Error500 = () => {
    return (
        <>
            <div className="position-absolute top-0 end-0">
                <img src="/src/assets/images/auth-card-bg.svg" className="auth-card-bg-img" alt="auth-card-bg" />
            </div>
            <div className="position-absolute bottom-0 start-0" style={{transform: "rotate(180deg)"}}>
                <img src="/src/assets/images/auth-card-bg.svg" className="auth-card-bg-img" alt="auth-card-bg" />
            </div>
            <div className="auth-box overflow-hidden align-items-center d-flex">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-5 col-md-6 col-sm-8">
                            <div className="card p-4">
                                <div className="auth-brand text-center mb-2">
                                    <a href="index.html" className="logo-dark">
                                        <img src="/src/assets/images/logo-black.png" alt="dark logo" height="28" />
                                    </a>
                                    <a href="index.html" className="logo-light">
                                        <img src="/src/assets/images/logo.png" alt="logo" height="28" />
                                    </a>
                                </div>

                                <div className="p-4 text-center">
                                    <div className="error-text-alt fs-72 text-danger">500</div>
                                    <h3 className="fw-bold text-uppercase">Server Error</h3>
                                    <p className="text-muted fs-5">We ran into an issue while processing your request. Please try again in a moment.</p>

                                    <div className="mt-4 d-flex justify-content-center gap-1">
                                        <button className="btn btn-primary">Try Again</button>
                                        <button className="btn btn-outline-info">Get Support</button>
                                    </div>
                                </div>
                            </div>

                            <p className="text-center text-muted mt-4 mb-0">
                                ©
                                <script>
                                    document.write(new Date().getFullYear())
                                </script>
                                Paces — by
                                <span className="fw-semibold">Coderthemes</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
