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

export const Followers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { user } = useContext(AuthContext);
  const productsRef = collection(FirebaseDB, "follows");
  console.log(users);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(productsRef, where("IdSeguido", "==", user.uid));
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
      <div className="mt-8 flex justify-center">
        <div className="max-w-4xl w-full px-4">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <div className="flex justify-center items-center mb-4">
                <h2 className="text-2xl font-bold mr-4">Usuarios que me siguen</h2>
              </div>
              <ul className="grid grid-cols-1 gap-4 mt-8">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="border rounded p-4 flex items-center"
                  >
                    <img
                      src={user.UrlPhotoSeguidor}
                      alt="User Icon"
                      className="w-16 h-16 mb-2 md:mr-2 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h1>{user.NameSeguidor}</h1>
                    </div>
                    
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
