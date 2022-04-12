import axios from "axios";
import "./style.scss";
import { hopitalServices, praticienServices } from "../../services/index";
import { useState } from "react";

function DashBoard() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [city, setCity] = useState("");
  const [hopital, setHopital] = useState(0);

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

  const AddPractitioner = (e: any) => {
    e.preventDefault();
    try {
      const response = praticienServices.Add({
        firstname,
        lastname,
        city,
        mail,
        specialization: speciality,
        hopital,
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

        <form>
          <h2>Ajouter un praticien</h2>
          <div className="form-group">
            <label htmlFor="lastname">Prenom</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstname">Nom</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">City</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Specilaity</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setSpeciality(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Mail</label>
            <input
              type="email"
              className="form-control"
              required
              onChange={(e) => setMail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="hospitalid">Hospital id</label>
            <input type="text" className="form-control" required />
          </div>

          <div className="form-group">
            <button onClick={AddPractitioner} className="mainbutton">
              Valider
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default DashBoard;
