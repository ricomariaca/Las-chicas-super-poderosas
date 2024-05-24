import React, { useState, useEffect, useContext } from "react";
import { Navbar } from "../../../ui/components/common/Navbar";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { FirebaseDB } from "../../../firebase/config";
import { AuthContext } from "../../../auth";

export const Following = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { user } = useContext(AuthContext);
  const productsRef = collection(FirebaseDB, "follows");
  console.log(users);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(productsRef, where("seguidor", "==", user.uid));
        const docs = await getDocs(q);
        const filter = [];
        docs.forEach((doc) => {
          filter.push({ id: doc.id, ...doc.data() });
        });
        setUsers(filter);
        setFilteredUsers(filter);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [user.uid]);

  const Delete = async (IdSeguido) => {
    try {
      await deleteDoc(doc(FirebaseDB, "follows", IdSeguido));
      setUsers(users.filter((users) => users.id !== IdSeguido));
      setFilteredUsers(filteredUsers.filter((users) => users.id !== IdSeguido));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <Navbar />
      <h1>estoy siguiendo a estos</h1>
      <div>
        <h1>usuarios seguidos</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div className="flex items-center">
                <img
                  src={user.UrlPhotoSeguido}
                  alt="User Icon"
                  className="w-8 h-8 cursor-pointer rounded-full"
                />
                <label className="ml-2">{user.Siguindo}</label>
                <button
                  className="bg-red-700 text-white px-4 py-2 rounded"
                  onClick={() => Delete(user.IdSeguido)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
