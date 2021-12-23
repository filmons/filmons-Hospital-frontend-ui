import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Signup() {
  return (
    <section className="signup">
      <h2>Se connecter</h2>

      <form>
      <div className="form-group">
        <label htmlFor="lastname">
          Prenom<span className="required">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          required
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
        />
      </div>

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

export default Signup;
