
export interface User {
    user_name: string,
    email_address: string,
    firstName?: string,
    lastName?: string,
    age?: number,
    country?: string,
    city?: string,
    phoneNumber?: string,

};

export interface Auth {
    token: string,
    user: User,
}