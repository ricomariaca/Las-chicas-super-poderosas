import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { collection, getDocs, query, where, doc, deleteDoc } from "firebase/firestore/lite";
import { AuthContext } from "../../../auth";
import { Navbar } from "../../../ui/components/common/Navbar";
import { FirebaseDB } from "../../../firebase/config";

export const ProductList = () => {
  const [Products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const productsRef = collection(FirebaseDB, "products");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(productsRef, where("userId", "==", user.uid));
        const docs = await getDocs(q);
        const filter = [];
        docs.forEach((doc) => {
          filter.push({ id: doc.id, ...doc.data() });
        });
        setProducts(filter);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [user.uid]);

  const Delete = async (productId) => {
    try {
      await deleteDoc(doc(FirebaseDB, "products", productId));
      setProducts(Products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen mt-80">
        <div className="max-w-4xl w-full px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full">
              <div className="flex justify-center items-center mb-4">
                <h2 className="text-2xl font-bold mr-4">Product List</h2>
              </div>
              <div>
                <ul className="grid grid-cols-1 gap-4 mt-8">
                  {Products.map((product) => (
                    <div
                      key={product.id}
                      className="border rounded p-4 flex items-center"
                    >
                      <NavLink
                        to="/productView"
                        className="nav-link text-teal-600 mr-4"
                      >
                        <img
                          src={product.ProductURL}
                          className="w-16 h-16 mb-2 md:mr-2"
                        />
                      </NavLink>
                      <div className="flex flex-col">
                        <h1>{product.name}</h1>
                        <p>Tag: {product.Tage}</p>
                        <p>Description: {product.ProductDescription}</p>
                      </div>
                      <div className="flex flex-col md:flex-row ml-auto">
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded"
                          onClick={() => Delete(product.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </ul>
                <NavLink
                  to="/addProduct"
                  className="nav-link flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 mt-4"
                >
                  Add Product
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
