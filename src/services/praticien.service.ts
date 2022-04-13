import http from "./config";

export const Search = async (input: string): Promise<any> => {
  return await http.get("/practitioner/search?query=" + input);
};


export const Add = async (practitioner: any): Promise<any> => {
  return await http.post("/practitioner", practitioner);
}

