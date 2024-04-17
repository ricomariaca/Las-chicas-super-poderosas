
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { PublicRouter } from './PublicRouter'

import { PrivateRouter } from './PrivateRouter'


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

      <Route path='/*' element={
        <PrivateRouter>
        
        </PrivateRouter>
      } />    
    </Routes>
   </>
  )
}