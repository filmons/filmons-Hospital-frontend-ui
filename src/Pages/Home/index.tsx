import React from "react";
import Card from "../../Components/Card";
import SearchBar from "../../Components/SearchBar";
import "./style.scss";

function home() {
  return (
    <main>
        <SearchBar />
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
    </main>
  );
}

export default home;
