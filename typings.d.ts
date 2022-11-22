export type User = {
    id: number;
    username:string;
    session:string;
    email: {email: string}
    password: {password: string}
};