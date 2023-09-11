import UserList from "./components/UserList";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      email: "dfdfddf",
      first_name: "dfdf",
      last_name: "dfdffd",
      year: 28,
      avatar:
        "https://i.pinimg.com/236x/d8/66/c0/d866c082e9338e9d0bd6786d9817fc64.jpg",
    },
    {
      id: 2,
      email: "dfdfddf",
      first_name: "dfdf",
      last_name: "dfdffd",
      year: 28,
      avatar:
        "https://i.pinimg.com/236x/d8/66/c0/d866c082e9338e9d0bd6786d9817fc64.jpg",
    },
    {
      id: 3,
      email: "dfdfddf",
      first_name: "dfdf",
      last_name: "dfdffd",
      year: 28,
      avatar:
        "https://i.pinimg.com/236x/d8/66/c0/d866c082e9338e9d0bd6786d9817fc64.jpg",
    },
    {
      id: 4,
      email: "dfdfddf",
      first_name: "dfdf",
      last_name: "dfdffd",
      year: 28,
      avatar:
        "https://i.pinimg.com/236x/d8/66/c0/d866c082e9338e9d0bd6786d9817fc64.jpg",
    },
  ]);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");

  const appendUser = () => {
    const newUser = {
      id: new Date(),
      email: email,
      first_name: name,
      last_name: lastName,
      year: year,
      avatar:
        "https://i.pinimg.com/236x/d8/66/c0/d866c082e9338e9d0bd6786d9817fc64.jpg",
    };
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <form onSubmit={appendUser}>
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
      <UserList userList={users} deleteUserItem={deleteUser} />;
    </div>
  );
}

export default App;
