import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import SearchBar from "../../Components/SearchBar";
import { hopitalServices } from "../../services/index";
import { Hospital } from "../../types/hopital.types";
import { Practitioner } from "../../types/practitioner.types";
import { praticienServices } from "../../services/index";
import "./style.scss";

function Home() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [searchdata, setSearchdata] = useState<Practitioner[]>([]);

  const [searchInput, setSearchInput] = useState("");

  const SearchByInput = async (e: any) => {
    console.log(searchInput);
    e.preventDefault();
    try {
      const response = await praticienServices.Search(searchInput);
      setSearchdata(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getHospitals = async () => await hopitalServices.getAllHospitals();
    getHospitals().then((data) => setHospitals(data));
  }, []);

  return (
    <section className="home">
      <SearchBar
        setInput={(e: any) => setSearchInput(e.target.value)}
        SearchByInput={SearchByInput}
      />
      <main>
        <section className="cardsection">
          {searchdata.length > 0
            ? searchdata.map((practitioner, index) => {
                return <div>++++{practitioner.firstname}</div>;
              })
            : null}
        </section>
        <section className="cardsection">
          {hospitals.length > 0
            ? hospitals.map((hospital) => {
                return <Card key={hospital.id} hospital={hospital} />;
              })
            : null}
        </section>
      </main>
    </section>
  );
}

export default Home;
