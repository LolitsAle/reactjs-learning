import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import TextValidate from "../components/Validation/Validation";
import Char from "../components/Char/Char";
import Reacthook from "../components/reacthook/React-hook";
import Cockpit from "../components/Cockpit/Cockpit";
// import Radium, { StyleRoot } from "radium";
// import styled from "styled-components";

// const StyledButton = styled.button`
//   background-color: ${(props) => (props.alt ? "red" : "green")};
//   textcolor: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color:  ${(props) => (props.alt ? "salmon" : "lightgreen")};
//     textcolor: black;
//   },`;

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
    //[[[this is the set state in older version of reactjs]]]
    // this.state = {
    //   persons: [
    //     { id: "sada", name: "Sơn2", age: 28 },
    //     { id: "sadasda", name: "Duy2", age: 27 },
    //     { id: "sadafasd", name: "Tùng2", age: 26 },
    //   ],
    //   otherState: "some other value",
    //   showPerson: false,
    //   text: "",
    // };
  }

  //this is the setstate in newer version of react in which you dont need to call constructor
  state = {
    persons: [
      { id: "sada", name: "Sơn2", age: 28 },
      { id: "sadasda", name: "Duy2", age: 27 },
      { id: "sadafasd", name: "Tùng2", age: 26 },
    ],
    otherState: "some other value",
    showPerson: false,
    text: "",
  };

  // switchNameHandler = (NewName) => {
  //   console.log("Clicked");
  //   // DO NOT DO THIS: this.state.persons[0].name = 'Ngô Thanh Sơn'
  //   this.setState({
  //     persons: [
  //       { name: NewName, age: 28 },
  //       { name: "Nguyễn Đỗ Hoàng Duy", age: 27 },
  //       { name: "Ngô Thanh Tùng", age: 26 },
  //     ],
  //   });
  // };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);

    const person = { ...this.state.persons[personIndex] }; // take person with index found
    person.name = event.target.value;

    const persons = [...this.state.persons]; //store state to a variable
    persons[personIndex] = person;

    //update state
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // console.log(person);
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const showPersonState = this.state.showPerson;
    this.setState({
      showPerson: !showPersonState,
    });
  };

  textChangeHandler = (event) => {
    let newtext = event.target.value;
    this.setState({ text: newtext });
  };

  deleteCharHandler = (textindex) => {
    //tim index ra
    let text = this.state.text.substr(textindex, 1);
    let newtext = this.state.text.replace(text, "");
    this.setState({ text: newtext });
  };

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          ></Persons>
        </div>
      );

      // StyledButton.backgroundColor = "red";
      // StyledButton[":hover"] = {
      //   backgroundColor: "salmon",
      //   textcolor: "black",
      // };
    }

    let textArray = this.state.text.split("");
    let textList = (
      <div>
        {textArray.map((char, index) => {
          if (char === " ")
            return (
              <Char
                char="space"
                key={index}
                click={this.deleteCharHandler.bind(this, index)}
              ></Char>
            );
          return (
            <Char
              char={char}
              key={index}
              click={this.deleteCharHandler.bind(this, index)}
            ></Char>
          );
        })}
      </div>
    );

    let text = (
      <div>
        <input
          type="text"
          onChange={(event) => this.textChangeHandler(event)}
          value={this.state.text}
        ></input>
        <br />
        <span>Text length: {this.state.text.length}</span>
        <TextValidate text={this.state.text}></TextValidate>
        {textList}
      </div>
    );

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <Cockpit
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={() => this.togglePersonHandler()}
        />
        {persons}
        {text}

        <Reacthook></Reacthook>
        <p>{this.state.otherState}</p>
      </div>
      // </StyleRoot>
    );

    // this code will be running behind the scence
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Im react'));
  }
}

export default App;
