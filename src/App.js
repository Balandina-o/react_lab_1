import AppendUser from "./components/AppendUser";
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

  const appendUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <AppendUser appendUser={appendUser} />
      <UserList userList={users} deleteUserItem={deleteUser} />;
    </div>
  );
}

export default App;
