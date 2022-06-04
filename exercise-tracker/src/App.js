import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import CreateExercise from "./components/create-exercise.component";
import EditExercise from "./components/edit-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container"></div>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" exact element={<ExercisesList></ExercisesList>} />
        <Route path="/edit/:id" exact element={<EditExercise></EditExercise>} />
        <Route
          path="/create"
          exact
          element={<CreateExercise></CreateExercise>}
        />
        <Route path="/user" exact element={<CreateUser></CreateUser>} />
      </Routes>
    </Router>
  );
}

export default App;
