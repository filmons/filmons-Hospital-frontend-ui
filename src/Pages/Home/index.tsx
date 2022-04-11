import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import SearchBar from "../../Components/SearchBar";
import getAllHospitals from '../../services/hopital.service';
import { Hospital } from "../../types/hopital.types";
import "./style.scss";

function Home() {

  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const getHospitals = async () =>  await getAllHospitals();
  
  useEffect(() => {
        getHospitals().then(data => setHospitals(data))
  }, [])    

  return (
      <section className="home">
        <SearchBar />
    <main>
      <section className="cardsection">
        {
          hospitals ?
          hospitals.map(hospital => {
            return <Card key={hospital.id} hospital={hospital}  />
          }) : 'loading...'
        }
      </section>
    </main>      </section>
  );
}

export default Home;
