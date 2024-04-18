import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../context"
import { Navbar } from "../../ui/components/Navbar";






export const LoginPage = () => {

  
  const { login } = useContext(AuthContext);

 

  const onLogin = () => {


    login('Cosme Fula');
    
  };

  return (
    <>
    
      <div className="" >
        
        <hr />
        <button
          
          onClick={onLogin}
        >
           Vista iniciar sesion
        </button>
       
        <div>
       

        </div>
      </div>
    </>
  )
}