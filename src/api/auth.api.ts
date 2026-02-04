import type { AuthenticationRequest, AuthenticationResponse, InfoOtp } from "../features/auth/authType";
import { apiPost } from "./api";

export const apiAuth = {
    signIn: (data:AuthenticationRequest) => apiPost<string,AuthenticationRequest>('/api/auth/login',data),
    verifyOtp: (otp:InfoOtp) => apiPost<AuthenticationResponse,InfoOtp>('/api/auth/verify-otp',otp)
}