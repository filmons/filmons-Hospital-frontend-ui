import http from "./config";

export const Search = async (input: any): Promise<any> => {
  return await http.get("/praticioner/search?query=" + input + "&");
};
