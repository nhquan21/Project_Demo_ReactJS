export interface UserStorage{
    email: string,
    username: string,
    token: string,
    role: string
}

export interface User{
    username?: string,
    password: string,
    role: string
}

export interface InfoOtp{
    otp: string
}

export interface AuthenticationResponse{
    id: string,
    username: string,
    token: string,
    role: string,
    email: string
}

export interface AuthenticationRequest{
    email?: string,
    password?: string
}