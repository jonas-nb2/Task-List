import React from "react";
import { Route, Routes } from "react-router-dom";
import Task from "./Components/Task";

const App = () => {
  return (
    <div>
      <h1>My Task List</h1>
      <Task />
    </div>
  );
};

export default App;
