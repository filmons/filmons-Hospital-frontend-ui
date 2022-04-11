import { user } from "../../types/user.types";

export const login = (user: string ) => {
    localStorage.setItem('access-token', user);
    return {
        type: "LOGIN",
        payload: user
    }
}

export const signup = (user: string ) => {
    return {
        type: "SIGNUP",
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