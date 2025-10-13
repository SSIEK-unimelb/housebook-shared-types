export interface SignupData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    userType: "admin" | "owner";
}
