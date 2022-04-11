import { Hospital } from "../types/hopital.types";
import http from "./config";


const getAllHospitals = async () : Promise<Hospital[]> => {
    const hospitals =  await http.get('/hospital');
    return hospitals.data;
}

export default getAllHospitals;