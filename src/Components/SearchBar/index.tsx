import { Button, Input } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Signup() {
  return (
    <section className="searchbar">
      <div>
      <Input type="text" placeholder="Rechercher" />
      <Button>Rechercher</Button>
      </div>
    </section>
  );
}

export default Signup;
