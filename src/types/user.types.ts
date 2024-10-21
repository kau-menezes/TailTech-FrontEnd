export interface IUser {
    userId: string;
    username: string;
    email: string;
    birthdate: string;
}

export interface IUserCreation extends Omit<IUser, "userId"> {
    password: string;
}