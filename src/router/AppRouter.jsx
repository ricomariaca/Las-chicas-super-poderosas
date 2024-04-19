import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { ProductHuntRouter } from "../hunt/router/ProductHuntRouter";
import { ProductHome } from "../hunt/pages/ProductHome";
import { ProductView } from "../hunt/pages/ProductView";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <PublicRouter>
              <ProductHome />
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
          path="/productView"
          element={
            <PublicRouter>
              <ProductView />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <ProductHuntRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
