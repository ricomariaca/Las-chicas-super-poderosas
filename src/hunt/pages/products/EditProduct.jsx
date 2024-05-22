import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Eliminamos la importación de useHistory
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
    history.push("/productList");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
        <form onSubmit={ProductUpdate}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
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
            <label htmlFor="productURL" className="block text-sm font-medium text-gray-700">
              Product URL
            </label>
            <input
              type="text"
              id="productURL"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={productURL}
              onChange={(e) => setProductURL(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tag" className="block text-sm font-medium text-gray-700">
              Tag
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
            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">
              Product Description
            </label>
            <textarea
              id="productDescription"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              rows="4"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update Product
          </button>
        </form>
      </div>
    </>
  );
};
