import axios from "axios";
import "./style.scss";
import { hopitalServices } from "../../services/index";
import { useState } from "react";

function DashBoard() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const AddHopital = (e: any) => {
    e.preventDefault();
    try {
      const response = hopitalServices.AddHospital({
        name: name,
        address: address,
        telephone: phone,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <section className="DashBoard">
        <form>
          <h2>Ajouter un hopital</h2>
          <div className="form-group">
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Adress</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Telephone</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button onClick={AddHopital} className="mainbutton">
              Valider
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default DashBoard;
