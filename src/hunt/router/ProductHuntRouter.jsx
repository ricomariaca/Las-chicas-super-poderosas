import { Navigate, Routes, Route } from 'react-router-dom';
import { ProductHome } from '../pages/ProductHome';
import { Navbar } from '../../ui/components/Navbar';
import { UserPerfile } from '../pages/UserPerfile';
import { ProductView } from '../pages/ProductView';


export const ProductHuntRouter = () => {
  return (

    <>
      <Navbar />
      <Routes>
        <Route
          path='/retro'
          element={
            <ProductHome />
          }
        />

        <Route
          path='/perfil'
          element={
            <UserPerfile />
          }
        />
        <Route
          path='/productView'
          element={
            <ProductView/>
          }
        />

        <Route
          path='/'
          element={
            <Navigate to="/retro" />
          }
        />
      </Routes>
    </>

  )
}
