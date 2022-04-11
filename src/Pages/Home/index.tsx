import axios from "axios";
import React, { useEffect } from "react";
import Card from "../../Components/Card";
import SearchBar from "../../Components/SearchBar";
import "./style.scss";

function Home() {
  return (
    <section className="home">
      <SearchBar />
      <main>
        <section className="cardsection">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>{" "}
    </section>
  );
}

export default Home;
