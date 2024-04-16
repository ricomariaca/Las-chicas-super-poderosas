
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { PublicRouter } from './PublicRouter'
import { GamesRouter } from '../games/routes/GamesRouter'
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
          <GamesRouter /> //puede dar error
        </PrivateRouter>
      } />    
    </Routes>
   </>
  )
}