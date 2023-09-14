import React, { useState } from "react";
import classes from "./AppendUser.module.css";

const AppendUser = ({ appendUser }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");

  const addNewUser = (event) => {
    event.preventDefault();
    const newUser = {
      id: new Date(),
      email: email,
      first_name: name,
      last_name: lastName,
      year: year,
      avatar:
        "https://i.pinimg.com/236x/d8/66/c0/d866c082e9338e9d0bd6786d9817fc64.jpg",
    };
    appendUser(newUser);
  };

  return (
    <div>
      <form onSubmit={appendUser} className={classes.addForm}>
        Имя:{" "}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        Фамилия:{" "}
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        Email:{" "}
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        Возраст:{" "}
        <input
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
        <button>Добавить</button>
      </form>
    </div>
  );
};

export default AppendUser;
