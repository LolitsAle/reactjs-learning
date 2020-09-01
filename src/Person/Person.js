import React from "react";
import "./Person.css";
// import Radium from "radium";
import styled from "styled-components";

const person = (props) => {
  // const style = {
  //   "@media (min-width: 500px)": {
  //     width: "450px",
  //   },
  // };

  const inputstyle = {
    width: "60%",
  };

  const Stylediv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eeeeee;
    box-shadow: 0 2px 3px #cccccc;
    padding: 16px;
    text-align: center;
    white-space: pre-line;

    @media (minwidth: 500px) {
      width: 450px;
    }
  `;

  return (
    <Stylediv>
      <div onClick={props.click} className="Person">
        <p>
          Im {props.name} and I am {props.age} years old
        </p>
        <p>{props.children}</p>
        <input
          style={inputstyle}
          type="text"
          onChange={props.changed}
          value={props.name}
        ></input>
      </div>
    </Stylediv>
  );
};

export default person;
