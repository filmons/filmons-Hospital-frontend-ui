
export type user = {
    email: string,
    password: string,
    access_token: string,
   
}


export type usersignup = {
    email: string,
    password: string,
    tele : string,
    adresse : string,
    nom : string,
    prenom : string

}


export type userStore = {
    user: user | null,
    isLogged: boolean
}