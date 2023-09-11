import React from "react";
import Card from "./Card.";

const UserList = ({ userList, deleteUserItem }) => {
  return (
    <div>
      {userList.map((user) => (
        <Card
          id={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          email={user.email}
          year={user.year}
          avatar={user.avatar}
          deleteUser={deleteUserItem}
        />
      ))}
    </div>
  );
};

export default UserList;
