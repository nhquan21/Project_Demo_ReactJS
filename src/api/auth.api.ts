import type { ApiResponse } from "../types/api";
import type { AuthenticationRequest, AuthenticationResponse, InfoOtp } from "../features/auth/authType";
import axiosClient from "./axiosClient";

export const apiAuth = {
    signIn: (data:AuthenticationRequest) => axiosClient.post<ApiResponse<string>>('/api/auth/login',data),
    verifyOtp: (otp:InfoOtp) => axiosClient.post<ApiResponse<AuthenticationResponse>>('/api/auth/verify-otp',otp)
}