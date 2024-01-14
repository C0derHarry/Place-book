import React from "react";

import UserList from "../componets/usersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Party Pooper",
      image:
      "https://images.pexels.com/photos/217130/pexels-photo-217130.jpeg",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
