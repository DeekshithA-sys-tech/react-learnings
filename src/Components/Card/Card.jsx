import React from "react";
import { Carddata } from "./Cardsdata";
import "./Cards.css";
const Card = () => {
  return (
    <div className="cards">
      <h1>cards</h1>
      <div className="container">
        {Carddata.map((ele) => {
          let { id, name, imgurl, description } = ele;
          return (
            <div className="card">
             
              
              <img src={imgurl} alt="" />
              <h3 className="title">{name}</h3>
              <h6 className="description">{description}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
