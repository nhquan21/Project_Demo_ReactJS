import { useNavigate } from "react-router-dom"


export const Error400 = () => {
  const navigate = useNavigate();
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

                <div className="p-2 text-center">
                  <div className="error-text-alt fs-72">400</div>
                  <h3 className="fw-bold text-uppercase">Oops! Invalid Request</h3>
                  <p className="text-muted">The request couldn’t be processed. Please check the URL or try again.</p>

                  <div className="d-flex justify-content-center gap-2 mt-4">
                    <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>Go Back</button>

                    <button className="btn btn-primary" >Back to Dashboard</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}
