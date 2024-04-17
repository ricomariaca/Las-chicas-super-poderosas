import { Navigate, Routes, Route } from 'react-router-dom';
import { ProductHome } from '../pages/ProductHome';
import { Navbar } from '../../ui/components/Navbar';
import { UserPerfile } from '../pages/UserPerfile';
import { ProductView } from '../pages/ProductView';
import { LoginPage } from '../../auth';


export const ProductHuntRouter = () => {
  return (

    <>
      
      <Routes>
        <Route
          path='/retro'
          element={
            <LoginPage/>
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
