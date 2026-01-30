import type { AuthenticationResponse } from "../features/auth/authType";

const USER_KEY = "access_token";
export const saveUserStorage = (data: AuthenticationResponse) => {
  if (data != null) {
    window.localStorage.setItem(USER_KEY, JSON.stringify(data));
  }
}

export const getUserStorage = (): AuthenticationResponse | null => {
  let user = window.localStorage.getItem(USER_KEY);
  if (user) {
    return user ? JSON.parse(user) : null;
  }
  return null;
}

export const clearItem = () => {
  window.location.href = "/signIn";
  window.localStorage.removeItem(USER_KEY);
}