import { Button, Input } from "@mui/material";
import { useEffect, useState } from "react";
import { praticienServices } from "../../services/index";
import "./style.scss";

function Signup() {
  const [searchInput, setSearchInput] = useState("");
  
  const SearchByInput = async (e: any) => {
    console.log(searchInput);
    e.preventDefault();
    try {
      const response = await praticienServices.Search(searchInput);
      console.log(response);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <section className="searchbar">
      <div>
        <Input
          type="text"
          placeholder="Rechercher"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button onClick={SearchByInput}>Rechercher</Button>
      </div>
    </section>
  );
}

export default Signup;
