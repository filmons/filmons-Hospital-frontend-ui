import { hopital } from "../types/hopital.types";
import http from "./config";


export const getAllHospitals = async () : Promise<any> => {
    return await http.get('/hopital');
}