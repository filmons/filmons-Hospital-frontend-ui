import { signIn, getByUser, signUp } from "./user.service";
import { Search , Add } from "./praticien.service";
import { AddHospital, getAllHospitals } from "./hopital.service";

export const userServices = {
  signIn,
  getByUser,
  signUp,
};

export const praticienServices = {
  Search,
  Add ,
};

export const hopitalServices = {
  getAllHospitals,
  AddHospital,
};
