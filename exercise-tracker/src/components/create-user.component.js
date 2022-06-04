import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  function submitHandler(e) {
    e.preventDefault();

    const user = {
      username,
    };

    console.log(user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    setUsername("");
  }
  return (
    <div>
      <h3>Create user:</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create user"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
