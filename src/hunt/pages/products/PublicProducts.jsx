import React, { useState, useEffect, useContext } from "react";
import { loadProducts } from "../../helpers/loadProducts";
import { Navbar } from "../../../ui/components/common/Navbar";
import icons from "../../../assets/icons";
import { AuthContext } from "../../../auth";
import { NavLink } from "react-router-dom";

export const PublicProducts = () => {
  const { logged } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await loadProducts();
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const selecTag = (event) => {
    const tag = event.target.value;
    setSelectedTag(tag);
    if (tag === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.Tage === tag));
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
                <h2 className="text-2xl font-bold mr-4">All Products</h2>
                <img src={icons.icProduct} alt="Banner" className="w-12 h-12" />
                <select
                  value={selectedTag}
                  onChange={selecTag}
                  className="border rounded p-2 ml-4"
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
              <ul className="grid grid-cols-1 gap-4 mt-8">
                {filteredProducts.map((product) => (
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
                      <p>Tag: {product.Tage}</p>
                      <p>Description: {product.ProductDescription}</p>
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
