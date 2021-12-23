import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Login() {
  return (
    <section className="login">
      <h2>Se connecter</h2>

      <form>
        <div className="form-group">
          <label htmlFor="email">
            Email<span className="required">*</span>
          </label>
          <input type="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Mot de passe<span className="required">*</span>
          </label>
          <input type="password" className="form-control" required />
        </div>

        <div className="form-group">
          <button type="submit" className="mainbutton">
            Valider
          </button>
        </div>

        <div className="form-group">
          <p>
            Vous n’avez pas de compte ?<Link to="/signup"> Cliquez ici.</Link>
          </p>
          <p>
            Tous les champs indiqués par un "<span className="required">*</span>
            " sont obligatoires. Merci de remplir le formulaire.
          </p>
        </div>
      </form>
    </section>
  );
}

export default Login;
