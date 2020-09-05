import React from "react";
import classes from "./Cockpit.module.css";

const cockpit = (props) => {
  const assignClasses = [];
  let btnClasses = ["button"];
  if (props.showPerson) {
    btnClasses.push(classes.Red);
  }

  if (props.persons.length < 3) {
    assignClasses.push(classes.red); //classes = ['red']
  }
  if (props.persons.length < 2) {
    assignClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, this is my first app</h1>
      <p className={assignClasses.join(" ")}>This is JSX</p>
      <button className={btnClasses.join(" ")} onClick={props.clicked}>
        Switch showPerson
      </button>
    </div>
  );
};
export default cockpit;
