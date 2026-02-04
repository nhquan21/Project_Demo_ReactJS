import { apiFindBy } from "./api";

export type DisplayCardAccount = {
    id: string,
    balance: number
}
export const apiCustomer = {
    getAccountByEmail: (email: string) => apiFindBy<DisplayCardAccount>("/api/customer/created", {email})
}