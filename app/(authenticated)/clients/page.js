"use client";
import { db } from "@/utils/db";
import { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const addUser = async () => {
      // await db.clients.add({
      //   name: "Doran Harris",
      //   schoole: "Jordan Elementary School",
      // });
      const allUsers = await db.clients.toArray();
      setUsers(allUsers);
    };
    addUser();
  }, []);
  console.log(users);
  if (!users.length) return;
  return <div>{users[1].name}</div>;
}

export default User;
