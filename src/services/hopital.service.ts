import { Hospital } from "../types/hopital.types";
import http from "./config";


export const getAllHospitals = async () : Promise<Hospital[]> => {
    const hospitals =  await http.get('/hospital');
    return hospitals.data;
}

export const AddHospital = async (hospital: Hospital) : Promise<any> => {
    return await http.post('/hospital', hospital);
}
