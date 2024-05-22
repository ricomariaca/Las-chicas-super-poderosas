import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { collection, getDocs, query, where, doc, deleteDoc } from "firebase/firestore/lite";
import { AuthContext } from "../../../auth";
import { Navbar } from "../../../ui/components/common/Navbar";
import { FirebaseDB } from "../../../firebase/config";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const { user, logged } = useContext(AuthContext);
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
        setFilteredProducts(filter);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [user.uid]);

  const selecTag = (event) => {
    const tag = event.target.value;
    setSelectedTag(tag);
    if (tag === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.Tage === tag));
    }
  };

  const Delete = async (productId) => {
    try {
      await deleteDoc(doc(FirebaseDB, "products", productId));
      setProducts(products.filter((product) => product.id !== productId));
      setFilteredProducts(filteredProducts.filter((product) => product.id !== productId));
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
                <h2 className="text-2xl font-bold mr-4">My Products</h2>
                <select
                  value={selectedTag}
                  onChange={selecTag}
                  className="border rounded p-2"
                >
                  <option value="">Select Tag</option>
                  <option value="TECHNOLOGY">TECHNOLOGY</option>
                  <option value="FASHION">FASHION</option>
                  <option value="GAMES">GAMES</option>
                  <option value="SPORT">SPORT</option>
                  <option value="PETS">PETS</option>
                  <option value="HOME">HOME</option>
                </select>
              </div>
              <div>
                <ul className="grid grid-cols-1 gap-4 mt-8">
                  {filteredProducts.map((product) => (
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
                        {logged && (
                          <>
                            <div className="flex flex-col md:flex-row ml-auto">
                              <NavLink
                                to={`/EditProduct/${product.id}`}
                                className="bg-teal-600 text-white px-4 py-2 rounded mr-2"
                              >
                                Edit
                              </NavLink>
                            </div>
                          </>
                        )}
                        <button
                          className="bg-red-700 text-white px-4 py-2 rounded"
                          onClick={() => Delete(product.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </ul>
                {logged && (
                  <>
                    <div className="flex flex-col md:flex-row ml-auto">
                      <NavLink
                        to="/addPoduct"
                        className="bg-teal-700 text-white px-4 py-2 rounded mr-2"
                      >
                        New product
                      </NavLink>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
