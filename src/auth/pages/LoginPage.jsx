import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../context"

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

 // const navigate = useNavigate();

  const onLogin = () => {
    //const lastPath = localStorage.getItem('lastPath') || '/'

    login('Cosme Fula');
    //navegar

   /* navigate(lastPath, {
      replace: true
    })*/
  };

  return (
    <>
      <div >
        <h1>Login Page</h1>
        <hr />
        <button
          
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </>
  )
}