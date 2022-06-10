import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import SearchBar from "../../Components/SearchBar";
import { hopitalServices } from "../../services/index";
import { Hospital } from "../../types/hopital.types";
import "./style.scss";

function Home() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    const getHospitals = async () => await hopitalServices.getAllHospitals();
    getHospitals().then((data) => setHospitals(data));
  }, []);

  return (
    <section className="home">
      <SearchBar />
      <main>
        <section className="cardsection">
          {hospitals.length > 0 ? (
            hospitals.map((hospital) => {
              return <Card key={hospital.id} hospital={hospital} />;
            })
          ) : (
            <p>loading...</p>
          )}
        </section>
      </main>
    </section>
  );
}

export default Home;
