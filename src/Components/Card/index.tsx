import React from "react";
import "./style.scss";

function Card(data: any) {
  const hospital = data.hospital;
  return (
    <section className="card">
      <h2>{hospital.name}</h2>
      <p>{hospital.telephone}</p>
      <p>{hospital.address}</p>

      <div className="tags">
        <p className="tag">tag</p>
        <p className="tag">tag</p>
        <p className="tag">tag</p>
        <p className="tag">tag</p>
        <p className="tag">tag</p>
        <p className="tag">tag</p>
        <p className="tag">tag</p>
        <p className="tag">tag</p>
        </div>
     </section>
  );
}

export default Card;
