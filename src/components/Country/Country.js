import React from "react";
import "./Country.css";

const Country = (props) => {
  /* const { name, capital, population, flag } = props.country; */
  return (
    <div className="country">
      <h1>Name: {props.name}</h1>
      <h1>Region: {props.region}</h1>
      <h1>Capital: {props.capital}</h1>
      <h1>Population: {props.population}</h1>
      <img src={props.flag} alt="" />
    </div>
  );
};

export default Country;
