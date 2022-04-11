import http from "./config";

export const Search = async (input: string): Promise<any> => {
  return await http.get("/practitioner/search?query=" + input);
};
