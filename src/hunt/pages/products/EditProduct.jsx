import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../firebase/config";
import { AuthContext } from "../../../auth";
import { Navbar } from "../../../ui/components/common/Navbar";

export const EditProduct = () => {
  const { productId } = useParams();
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [productURL, setProductURL] = useState("");
  const [tag, setTag] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const docRef = doc(FirebaseDB, "products", productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProduct(data);
          setName(data.name);
          setProductURL(data.ProductURL);
          setTag(data.Tage);
          setProductDescription(data.ProductDescription);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    loadProduct();
  }, [productId]);

  const ProductUpdate = async (e) => {
    e.preventDefault();
    const productRef = doc(FirebaseDB, "products", productId);
    await updateDoc(productRef, {
      name: name,
      ProductURL: productURL,
      Tage: tag,
      ProductDescription: productDescription,
    });

    setSuccessMessage("Producto editado!");

    setName("");
    setProductURL("");
    setTag("");
    setProductDescription("");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h2 className="mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-teal-700">
          Edit Product
        </h2>
        <div className="flex justify-center items-center">
          <form onSubmit={ProductUpdate} className="w-full max-w-md mb-2">
            {successMessage && (
              <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-lg text-center">
                {successMessage}
              </div>
            )}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                <span className="font-bold">Name*</span>
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="productURL"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                <span className="font-bold">Product URL*</span>
              </label>
              <input
                type="text"
                id="productURL"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full "
                value={productURL}
                onChange={(e) => setProductURL(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="tag"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                <span className="font-bold">Tag*</span>
              </label>
              <input
                type="text"
                id="tag"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="productDescription"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                <span className="font-bold">Product Description*</span>
              </label>
              <textarea
                id="productDescription"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                rows="4"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-center w-full mb-4">
              <button
                type="submit"
                className="bg-teal-700 text-white px-4 py-2 rounded mr-2"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
