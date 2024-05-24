import React, { useState, useEffect } from "react";
import { Navbar } from "../../../ui/components/common/Navbar";
import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../firebase/config";

export const Followers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const Followwing = async () => {
      try {
        const usersCollection = collection(FirebaseDB, "follows");
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    Followwing();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h1>Seguidores:</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.Siguindo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
