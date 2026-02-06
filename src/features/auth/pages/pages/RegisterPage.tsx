import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

export const RegisterPage = () => {
  const {t} = useTranslation("common");
  return (
    <>
      <div className="position-absolute top-0 end-0">
        <img src="/src/assets/images/auth-card-bg.svg" className="auth-card-bg-img" alt="auth-card-bg" />
      </div>
      <div className="position-absolute bottom-0 start-0" style={{ transform: "rotate(180deg)"}}>
        <img src="/src/assets/images/auth-card-bg.svg" className="auth-card-bg-img" alt="auth-card-bg" />
      </div>
      <div className="auth-box overflow-hidden align-items-center d-flex">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-md-6 col-sm-8">
              <div className="card p-4">
                <div className="auth-brand text-center mb-4">
                  <a href="index.html" className="logo-dark">
                    <img src="/src/assets/images/logo-black.png" alt="dark logo" />
                  </a>
                  <a href="index.html" className="logo-light">
                    <img src="/src/assets/images/logo.png" alt="logo" />
                  </a>
                  <p className="text-muted w-lg-75 mt-3 mx-auto">Let’s get you started. Create your account by entering your details below.</p>
                </div>
 
                <p className="text-center text-muted my-3 auth-line">
                  <span> Continue with Email </span>
                </p>

                <form>
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">
                      {t("auth.name")}
                      <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="userName" placeholder="David Dev" required />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">
                      {t("auth.emailAddress")}
                      <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="email" className="form-control" id="userEmail" placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className="mb-3" data-password="bar">
                    <label htmlFor="userPassword" className="form-label">
                      {t("auth.password")}
                      <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="password" className="form-control" id="userPassword" placeholder="••••••••" required />
                    </div>
                    <div className="password-bar my-2"></div>
                    <p className="text-muted fs-xs mb-0">Use 8+ characters with letters, numbers & symbols.</p>
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input form-check-input-light fs-14" type="checkbox" id="termAndPolicy" />
                      <label className="form-check-label" htmlFor="termAndPolicy">Agree the Terms & Policy</label>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary fw-semibold py-2">{t("auth.createAccount")}</button>
                  </div>
                </form>

                <p className="text-muted text-center mt-4 mb-0">
                  Already have an account?
                  <NavLink to="/signIn" className="text-decoration-underline link-offset-3 fw-semibold">{t("auth.lognin")}</NavLink>
                </p>
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
