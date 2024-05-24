import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { ProductHuntRouter } from "../hunt/router/ProductHuntRouter";
import { ProductHome } from "../hunt/pages/ProductHome";
import { ProductView } from "../hunt/pages/products/ProductView";
import { ProductProvider, FollowProvider, ReviewProvider, } from "../hunt/context";
import { PublicProducts } from "../hunt/pages/products/PublicProducts";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <PublicRouter>
              <ReviewProvider>
                <ProductHome />
              </ReviewProvider>
            </PublicRouter>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRouter>
              <RegisterPage />
            </PublicRouter>
          }
        />
        <Route
          path="/publicProducts"
          element={
            <PublicRouter>
              <PublicProducts />
            </PublicRouter>
          }
        />

        <Route
          path="/productView"
          element={
            <PublicRouter>
              <ReviewProvider>
                <FollowProvider>
                  <ProductView />
                </FollowProvider>
              </ReviewProvider>
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <ProductProvider>
                <ReviewProvider>
                  <FollowProvider>
                    <ProductHuntRouter />
                  </FollowProvider>
                </ReviewProvider>
              </ProductProvider>
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
