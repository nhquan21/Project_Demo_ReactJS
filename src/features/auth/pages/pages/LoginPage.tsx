
import { apiAuth } from "../../../../api/auth.api";
import type { AuthenticationRequest } from "../../authType";
import { OtpModal } from "./OtpModal";
import { useCallback, useEffect, useState } from "react";
import { FormLogin } from "../components/FormLogin";
import { AppAlert } from "../../../../components/ui/AppAlert";
import { Loading } from "../../../../components/ui/Loading";
import { Background } from "../components/Background";

export const LoginPage = () => {
  const [isVerifyModal, setIsVerifyModal] = useState(false);
  const [alert, setAlert] = useState<{ type: "success" | "danger"; message: string; } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = useCallback(async (data: AuthenticationRequest) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const res = await apiAuth.signIn(data);
      console.log(res.code);
      if (res.code === 200) {
        setAlert({ type: "success", message: res.message });
        setIsVerifyModal(true);
      } else {
        setAlert({ type: "danger", message: res.message });
      }
    } catch (error: unknown) {
      let message = "Login failed";
      if (error instanceof Error) message = error.message;
      setAlert({ type: "danger", message });
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!alert) return;
    const timer = setTimeout(() => setAlert(null), 3000);
    return () => clearTimeout(timer);
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
      <Background>
        {isLoading && <Loading isLoading />}
        {isVerifyModal
          ? <OtpModal onClose={() => setIsVerifyModal(false)} />
          : <FormLogin onSubmit={onSubmit} />
        }
      </Background>

    </>
  );
}
