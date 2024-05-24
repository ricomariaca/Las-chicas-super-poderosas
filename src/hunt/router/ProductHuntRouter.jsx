import { Navigate, Routes, Route } from "react-router-dom";
import { ProductHome } from "../pages/ProductHome";
import { Navbar } from "../../ui/components/common/Navbar";
import { UserPerfile } from "../pages/user/UserPerfile";
import { ProductView } from "../pages/products/ProductView";
import { LoginPage } from "../../auth";
import { ProductList } from "../pages/products/ProductList";
import { AddProduct } from "../pages/products/AddProduct";
import { EditProfile } from "../pages/user/EditProfile";
import { PublicProducts } from "../pages/products/PublicProducts";
import { EditProduct } from "../pages/products/EditProduct";
import { Followers } from "../pages/followers/Followers";
import { Following } from "../pages/followers/Following";

export const ProductHuntRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/ProductHunt" element={<ProductHome />} />

        <Route path="/perfil" element={<UserPerfile />} />
        <Route path="/productViewlog" element={<ProductView />} />
        <Route path="/publicProductslog" element={<PublicProducts />} />

        <Route path="/myProducts" element={<ProductList />} />
        <Route path="/addPoduct" element={<AddProduct />} />
        <Route path="/follow" element={<Followers />} />
        <Route path="/following" element={<Following />} />

        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/editProduct/:productId" element={<EditProduct />} />
      </Routes>
    </>
  );
};
