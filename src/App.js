import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Victor", age: 21 },
      { name: "Vinicius", age: 22 },
      { name: "Ana Clara", age: 21 }
    ]
  };
  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: "Vinicius", age: 22 },
        { name: "Ana Clara", age: 21 }
      ]
    });
  };
  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Victor de Morais", age: 21 },
        { name: event.target.value, age: 22 },
        { name: "Ana Clara", age: 21 }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "intherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <button style={style} onClick={() => this.switchNameHandler("victor")}>
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          Teste
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Maximilian!")}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
