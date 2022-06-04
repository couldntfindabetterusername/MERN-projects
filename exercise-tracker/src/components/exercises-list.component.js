import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/exercise/").then((res) => {
      if (res.data.length > 0) {
        setExercises(res.data.map((exercise) => exercise));
      }
    });
  }, [exercises]);

  const deleteExercise = (exercise) => {
    axios
      .delete(`http://localhost:5000/exercise/${exercise._id}`)
      .then((res) => console.log(res.data));

    // window.location = "/";
  };

  return (
    <div>
      <div className="container">
        {exercises.map((exercise) => {
          return (
            <>
              <h4>
                <b>Username: </b>
                {exercise.username}
              </h4>
              <h4>
                <b>Exercise: </b>
                {exercise.description}
              </h4>
              <h4>
                <b>Duration: </b>
                {exercise.duration}
              </h4>
              <h4>
                <b>Date: </b>
                {exercise.date}
              </h4>
              <button
                className="btn btn-primary"
                onClick={() => deleteExercise(exercise)}
              >
                DELETE EXERCISE
              </button>
              &nbsp;
              <Link to={`/edit/${exercise._id}`}>
                <button className="btn btn-primary">EDIT EXERCISE</button>
              </Link>
              <br />
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ExerciseList;
