import { Button, Input } from "@mui/material";

import "./style.scss";

function Signup(props: any) {
  return (
    <section className="searchbar">
      <div>
        <Input type="text" placeholder="Rechercher" onChange={props.setInput} />
        <Button onClick={props.SearchByInput}>Rechercher</Button>
      </div>
    </section>
  );
}

export default Signup;
