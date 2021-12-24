import { user } from "../types/user.types";
import http from "./config";

export const signIn = async (user: Omit<user, "access_token">): Promise<any> => {
    return await http.post('patient/login', user);
}

export const getByUser = async () : Promise<any> => {
    return await http.get('/patient');
}