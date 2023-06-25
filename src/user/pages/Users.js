import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Shady",
      image:
        "https://preview.redd.it/21km4tsbo2h91.png?auto=webp&s=2239435d9235a9de2b655b6f0688d0a8b3ce023d",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
