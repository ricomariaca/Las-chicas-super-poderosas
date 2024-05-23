import React, { useState, useContext } from "react";
import { Navbar } from "../../../ui/components/common/Navbar";
import { ProductContext } from "../../context";
import { useForm } from "../../../hooks";
import images from "../../../assets/images";
import icons from "../../../assets/icons";

const newEmptyProduct = {
  name: "",
  ProductURL: "",
  Tage: "",
  ProductDescription: "",
};

export const AddProduct = () => {
  const { saveProduct, user } = useContext(ProductContext);
  const { name, ProductURL, Tage, ProductDescription, onInputChange, resetForm } =
    useForm(newEmptyProduct);
  const [selectedTage, setSelectedTage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onCreateProduct = async (event) => {
    event.preventDefault();

    const newProduct = {
      name: name,
      userId: user.uid,
      ProductURL: ProductURL,
      Tage: Tage || selectedTage,
      ProductDescription: ProductDescription,
    };

    await saveProduct(newProduct);

    
    setSuccessMessage("Producto agregado correctamente!");

    
    resetForm();
    setSelectedTage('');
  };

  const handleTageChange = (event) => {
    setSelectedTage(event.target.value);
  };

  return (
    <>
      <Navbar />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight mb-6 text-teal-700">
        Add Product
      </h2>

      <div className="text-center mb-6">
        <img
          src={icons.ADDP}
          className="w-20 h-20 mx-auto rounded-lg shadow-md"
          alt="Profile Picture"
        />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {successMessage && (
          <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-lg">
            {successMessage}
          </div>
        )}

        <form className="space-y-6" onSubmit={onCreateProduct}>
          <div className="block text-sm font-semibold leading-6 text-gray-900">
            <span className="font-bold">Name*</span>
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              id="name"
              name="name"
              onChange={onInputChange}
              value={name}
            />
          </div>

          <div className="block text-sm font-semibold leading-6 text-gray-900">
            <span className="font-bold">Product URL*</span>
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              id="ProductURL"
              name="ProductURL"
              onChange={onInputChange}
              value={ProductURL}
            />
          </div>

          <div>
            <span className="font-bold">Tage*</span>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                id="Tage"
                name="Tage"
                onChange={(e) => {
                  onInputChange(e);
                  setSelectedTage(""); 
                }}
                value={Tage}
              />

              <div className="absolute inset-y-0 right-0 flex items-center">
                <select
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2"
                  value={selectedTage}
                  onChange={handleTageChange}
                >
                  <option value="">Select Tage</option>
                  <option value="TECHNOLOGY">TECHNOLOGY</option>
                  <option value="FASHION">FASHION</option>
                  <option value="GAMES">GAMES</option>
                  <option value="SPORT">SPORT</option>
                  <option value="PETS">PETS</option>
                  <option value="HOME">HOME</option>
                </select>
              </div>
            </div>
          </div>

          <div className="block text-sm font-semibold leading-6 text-gray-900">
            <span className="font-bold">Product Description*</span>
            <textarea
              id="ProductDescription"
              name="ProductDescription"
              onChange={onInputChange}
              value={ProductDescription}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
