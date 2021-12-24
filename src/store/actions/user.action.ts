import { user } from "../../types/user.types";

export const login = (user: string ) => {
    localStorage.setItem('access-token', user);
    return {
        type: "LOGIN",
        payload: user
    }
}

export const logout = () => {
    localStorage.removeItem('access-token');
    return {
        type: "LOGOUT",
        payload: false
    }
}