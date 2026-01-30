
import { apiAuth } from "../../../../api/auth.api";
import type { AuthenticationRequest } from "../../authType";
import { OtpModal } from "./OtpModal";
import { useEffect, useState } from "react";
import { FormLogin } from "../components/FormLogin";
import { AppAlert } from "../../../../components/ui/AppAlert";

export const LoginPage = () => {
  const [isVerifyModal, setIsVerifyModal] = useState(false);
  const [alert, setAlert] = useState<{ type: "success" | "danger"; message: string; } | null>(null);
  const onSubmit = async (data: AuthenticationRequest) => {
    try {
      const res = await apiAuth.signIn(data);
      console.log(res);
      if (res.data.code === 200) {
        setAlert({ type: "success", message: res.data.message })
        setIsVerifyModal(true);
      } else {
        setAlert({ type: "danger", message: res.data.message })
      }
    } catch (error: any) {
      setAlert({ type: "danger", message: error });
    }
  }
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);
  return (
    <>
      {alert && (
        <AppAlert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
      <div className="position-absolute top-0 end-0">
        <img src="/src/assets/images/auth-card-bg.svg" className="auth-card-bg-img" alt="auth-card-bg" />
      </div>
      <div className="position-absolute bottom-0 start-0" style={{ transform: "rotate(180deg)" }}>
        <img src="/src/assets/images/auth-card-bg.svg" className="auth-card-bg-img" alt="auth-card-bg" />
      </div>
      <div className="auth-box overflow-hidden align-items-center d-flex">
        <div className="container">
          <div className="row justify-content-center">
            {isVerifyModal ? <OtpModal onClose={() => { setIsVerifyModal(false) }} /> : <FormLogin onSubmit={onSubmit} />}
          </div>
        </div>
      </div>

    </>
  );
}
