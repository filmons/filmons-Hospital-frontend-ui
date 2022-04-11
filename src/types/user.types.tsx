export type user = {
    email: string,
    password: string,
    access_token: string
}
export type users = {
    firstName:string,
    lastName:string
    email: string,
    password: string,
    admin: string,
}

export type userStore = {
    user: user | null,
    isLogged: boolean
}