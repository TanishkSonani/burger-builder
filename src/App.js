import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "stephanie", age: 26 },
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("was clicked!");
    // this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: "Maxiimilan", age: 28 },
        { name: "Manu", age: 29 },
        { name: "stephanie", age: 27 },
      ],
      otherState: personsState.otherState,
    });
  };

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "stephanie", age: 26 },
      ],
    });
  };

  return (
    <div className="App">
      <h1> Hi, I 'm React App</h1> <p> This is really working </p>{" "}
      <button onClick={switchNameHandler}> Switch Name </button>{" "}
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />{" "}
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler}
        changed={nameChangeHandler}
      >
        My Hobbies: Racing{" "}
      </Person>{" "}
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />{" "}
    </div>
  );
};

export default App;
