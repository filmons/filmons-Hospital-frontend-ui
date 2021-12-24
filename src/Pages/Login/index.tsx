import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/user.action";
import { useNavigate } from "react-router-dom";
import { userServices } from "../../services";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  console.log(email, password);

  const dispatch = useDispatch();

  const onClickLoginIn = async (e: any) => {
    e.preventDefault();
    try {
      const response = await userServices.signIn({ email, password });
      const user = response.data;
      localStorage.setItem("access-token", user);
      dispatch(login(user));
      console.log(response);
      if (response.data.error.status != 400) {
        navigate("/");
      }
    } catch (error: any) {
      setError(true);
    }
  };

  return (
    <section className="login">
      <h2>Se connecter</h2>

      <form>
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
          <button onClick={onClickLoginIn} className="mainbutton">
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
