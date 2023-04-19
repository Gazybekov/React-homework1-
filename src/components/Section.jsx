import React from "react";
import "../components/header.css";

const Section = (props) => {
  return (
    <div>
      {props.users.map((elem) => (
        <div id="div1" key={elem.id}>
          <h2> Name - {elem.name}</h2>
          <h3> LastName - {elem.lastName}</h3>
          <p> age- {elem.age}</p>
          <p> id - {elem.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Section;
