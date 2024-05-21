import { doc, deleteDoc } from "firebase/firestore/lite";
import {FirebaseDB} from "../../firebase/config";

export const deleteProduct = async (productId) => {
    try {
      const productRef = doc(FirebaseDB, "products", productId);
      await deleteDoc(productRef);
      console.log("Producto eliminado con éxito:", productId);
    } catch (error) {
      console.error("Error eliminando producto:", error);
    }
  };