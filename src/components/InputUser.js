import React, { useState } from "react";
import { addUserService } from "../services/user-services";

const InputUser = () => {
  const [username, setUsername] = useState("");

  const onAddUser = () => {
    addUserService(username)
      .then(() => setUsername(""))
      .catch((err) => console.log(err));
  };

  const onChangeInput = (e) => setUsername(e.target.value);

  return (
    <>
      <h1 className="text-center mt-5">Input User</h1>
      <input
        type="text"
        className="form-control"
        value={username}
        onChange={onChangeInput}
      />
      <button className="btn btn-success" onClick={onAddUser}>
        Add
      </button>
    </>
  );
};

export default InputUser;
