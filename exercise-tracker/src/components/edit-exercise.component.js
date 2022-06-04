import React, { useState, useEffect } from "react";
import { resolvePath } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditExercise = (props) => {
  const [exercise, setExercise] = useState({});

  const [username, setUsername] = useState();
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/exercise/${resolvePath(
          window.location
        ).pathname.replace("/edit/", "")}`
      )
      .then((res) => {
        setExercise(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   setUsername(exercise.username);
  //   setDescription(exercise.description);
  //   setDuration(exercise.duration);
  //   setDate(exercise.date);
  // }, [exercise]);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <h3>Create new exercise log</h3>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              type="text"
              required
              className="form-control"
              value={exercise.username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              required
              className="form-control"
              // value={duration}
              // onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              {/* <DatePicker selected={date} onChange={(e) => setDate(e)} /> */}
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create exercise log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditExercise;
