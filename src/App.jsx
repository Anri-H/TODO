import React from "react";
import Todo from "./components/Todo/Todo";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
      </header>
    </div>
  );
}

export default App;
