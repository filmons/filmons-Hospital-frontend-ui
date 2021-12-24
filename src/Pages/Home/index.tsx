import React from "react";
import Card from "../../Components/Card";
import SearchBar from "../../Components/SearchBar";
import "./style.scss";

function home() {
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
    </main>      </section>
  );
}

export default home;
