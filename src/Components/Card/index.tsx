import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Card(data: any) {
  const hospital = data.hospital;
  return (
    <Link to={"/" + hospital.id} className="card">
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
    </Link>
  );
}

export default Card;
