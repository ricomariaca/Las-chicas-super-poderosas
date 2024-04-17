import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../context"
import { Navbar } from "../../ui/components/Navbar";

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
      <div className="" >
        <Navbar/>
        <hr />
        <button
          
          onClick={onLogin}
        >
          emanuel gay
        </button>
      </div>
    </>
  )
}