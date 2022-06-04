import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = () => {
  const [username, setUsername] = useState("test user");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users/").then((res) => {
      if (res.data.length > 0) {
        setUsers(
          res.data.map((user) => {
            return user.username;
          })
        );
        setUsername(res.data[0].username);
      }
    });
  }, []);

  function submitHandler(e) {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date,
    };

    console.log(exercise);

    axios
      .post("http://localhost:5000/exercise/add", exercise)
      .then((res) => console.log(res.data));

    window.location = "/";
  }
  return (
    <div>
      <h3>Create new exercise log</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <select
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            {users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            required
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={(e) => setDate(e)} />
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
  );
};

export default CreateExercise;
