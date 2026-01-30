import { useEffect, useRef, useState } from "react";
import "../../../../assets/css/OtpModalStyle.css";
import { apiAuth } from "../../../../api/auth.api";
import type { AuthenticationResponse } from "../../authType";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../guards/AuthContext";
import { AppAlert } from "../../../../components/ui/AppAlert";

export const OtpModal = ({ onClose }: { onClose: () => void }) => {
  const length = 6;
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { login } = useAuth();
  const [alert, setAlert] = useState<{ type: "success" | "danger"; message: string } | null>(null)

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    if (otp.some(d => !d)) return;

    try {
      setLoading(true);

      const res = await apiAuth.verifyOtp({
        otp: otp.join("")
      });

      if (res.data.code !== 200 || !res.data.data) {
        setAlert({ type: "success", message: res.data.message })
        return;
      }

      const user: AuthenticationResponse = res.data.data;

      login(user); // context + storage

      navigate(user.role === "ROLE_ADMIN" ? "/admin" : "/home");

    } catch (err) {
      setAlert({ type: "danger", message: "Server error" })
    } finally {
      setLoading(false);
    }
  };

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

      <div className="otp-overlay">
        <div className="opt-form">
          <div className="header-form">
            <div className="auth-icon">
              <i className="bx bxs-envelope"></i>
            </div>
            <h4>Verify Your Email</h4>
            <p>Please enter the verification code</p>
          </div>

          <div className="auth-pin-wrap">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={(el) => { inputsRef.current[index] = el; }}
                className="code-input"
                maxLength={1}
                value={value}
                disabled={loading}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          <div className="btn-wrap">
            <button disabled={loading || otp.some(d => !d)} onClick={handleSubmit}>
              {loading ? (
                <div className="spinner-border spinner-border-sm text-light"></div>
              ) : (
                "Confirm"
              )}
            </button>

            <button onClick={onClose} disabled={loading} style={{ marginTop: 10 }}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
