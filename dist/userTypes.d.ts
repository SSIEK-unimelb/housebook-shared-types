export interface Owner {
    ownerId: string;
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: string;
    createdAt: string;
}

export interface User {
    userId: string;
    createdAt: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    status: string;
}