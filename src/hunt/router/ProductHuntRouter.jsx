import { Navigate, Routes, Route } from 'react-router-dom';
import {ProductHome} from '../pages/ProductHome';
import { Navbar } from '../../ui/components/Navbar';


export const ProductHuntRouter = () => {
    return (
        
          <>
          <Navbar/>
            <Routes>
              <Route 
              path='/retro' 
              element={ 
              <ProductHome/>
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
