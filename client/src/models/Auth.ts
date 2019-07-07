
export interface User{
    firstName: string,
    userName: string,
    lastName: string,
    emailAddress: string,
    age?: number,
    country?: string,
    city?:string,
    phoneNumber?:string,

};

export interface Auth{
    token: string,
    userDetails: User,
}