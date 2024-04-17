
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { PublicRouter } from './PublicRouter'
import { PrivateRouter } from './PrivateRouter'
import { ProductHuntRouter } from '../hunt/router/ProductHuntRouter'


export const AppRouter = () => {
  return (
   <>
    <Routes>
      <Route   
        path='/login' 
        element={
          <PublicRouter>
            <LoginPage />
          </PublicRouter>
        }
      />

      <Route
      path='/*' 
      element={
        <PrivateRouter>
           <ProductHuntRouter/>
        </PrivateRouter>
      } 
      />    
    </Routes>
   </>
  )
}