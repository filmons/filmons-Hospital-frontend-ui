import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userServices } from "../../services";
import { signup } from "../../store/actions/user.action";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./style.scss";

function Signup() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [tele, setTele] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [alignment, setAlignment] = React.useState("Patient");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  console.log(alignment);

  const onClickSignUp = async (e: any) => {
    e.preventDefault();
    try {
      const response = await userServices.signUp({
        email,
        password,
        nom,
        prenom,
        adresse,
        tele,
      });
      const user = response.data;
      dispatch(signup(user));
      navigate("/login");
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  return (
    <main>
      <section className="signup">
        <h2>Se connecter</h2>
        {error && <p className="error">{error}</p>}
        <form>
          <div className="form-group">
            <label htmlFor="email">
              Vous etre<span className="required">*</span>
            </label>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton value="Patient">Patient</ToggleButton>
              <ToggleButton value="Praticien">Praticien</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="form-group">
            <label htmlFor="lastname">
              Prenom<span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">
              Nom<span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setNom(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">
              Telephone<span className="required">*</span>
            </label>
            <input
              type="telephone"
              className="form-control"
              required
              onChange={(e) => setTele(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email<span className="required">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Mot de passe<span className="required">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="adress">
              Adresse<span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setAdresse(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button onClick={onClickSignUp} className="mainbutton">
              Valider
            </button>
          </div>

          <div className="form-group">
            <p>
              Vous n’avez pas de compte ?<Link to="/signup"> Cliquez ici.</Link>
            </p>
            <p>
              Tous les champs indiqués par un "
              <span className="required">*</span>" sont obligatoires. Merci de
              remplir le formulaire.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Signup;
