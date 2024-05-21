import React, { useState, useEffect, useContext } from "react";
import { loadProducts } from "../../helpers/loadProducts";
import { Navbar } from "../../../ui/components/common/Navbar";
import icons from "../../../assets/icons";
import { AuthContext } from "../../../auth";
import { NavLink } from "react-router-dom";
import { deleteProduct } from "../../helpers/productDelete"

export const PublicProducts = () => {
  const { logged } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await loadProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const delate  = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts(products.filter((product) => product.id !== productId));
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
                <h2 className="text-2xl font-bold mr-4">All Product</h2>
                <img src={icons.icProduct} alt="Banner" className="w-12 h-12" />
              </div>
              <ul className="grid grid-cols-1 gap-4 mt-8">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="border rounded p-4 flex items-center"
                  >
                    {!logged && (
                      <NavLink
                        to="/productView"
                        className="nav-link text-teal-600 mr-4"
                      >
                        <img
                          src={product.ProductURL}
                          className="w-16 h-16 mb-2 md:mr-2"
                        />
                      </NavLink>
                    )}

                    {logged && (
                      <>
                        <NavLink
                          to="/productViewlog"
                          className="nav-link text-teal-600 mr-4"
                        >
                          <img
                            src={product.ProductURL}
                            className="w-16 h-16 mb-2 md:mr-2"
                          />
                        </NavLink>
                      </>
                    )}

                    <div className="flex flex-col">
                      <h1>{product.name}</h1>
                      <p>Tage: {product.Tage}</p>
                      <p>Description: {product.ProductDescription}</p>
                    </div>

                    {logged && (
                      <div className="flex flex-col md:flex-row ml-auto">
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                          onClick={() => handleEdit(product.id)}
                        >
                          Editar
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded"
                          onClick={() => delate (product.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    )}
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