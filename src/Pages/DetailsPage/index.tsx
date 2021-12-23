import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import Card from "../Card/index";

function Signup() {
  return (
    <section className="details-page">
      <Card />
      <h2>HOSPITAL NAME</h2>
      <p>01 01 20 35 23</p>
      <p>5 RUE FRANCE , PARIS</p>

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

        <div className="discriptions">
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex est provident consequatur accusantium, animi labore ullam minima quidem rerum placeat deserunt quo ratione cum exercitationem eos deleniti iusto inventore velit!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex est provident consequatur accusantium, animi labore ullam minima quidem rerum placeat deserunt quo ratione cum exercitationem eos deleniti iusto inventore velit!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex est provident consequatur accusantium, animi labore ullam minima quidem rerum placeat deserunt quo ratione cum exercitationem eos deleniti iusto inventore velit!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex est provident consequatur accusantium, animi labore ullam minima quidem rerum placeat deserunt quo ratione cum exercitationem eos deleniti iusto inventore velit!</p>
        </div>

      <button className="mainbutton">
        Prendre rdv
        </button>

     </section>
  );
}

export default Signup;
