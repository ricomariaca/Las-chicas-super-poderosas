import { Link, NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../auth";
import { ProductHome } from "../../hunt/pages/ProductHome";


export const Navbar = () => {
  const { user, logout, login, logged } = useContext(AuthContext);

  const navigate = useNavigate();
  const onLogin = () => {
    <ProductHome />

  };

  const onLogout = () => {
    logout();



    navigate('/home', {
      replace: true
    });
  }

  return (
    <>
      <nav className="bg-white text-green-500 py-4 px-6 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">Product hunt</Link>

        <div className="flex items-center">
          <ul className="flex justify-center space-x-6">

            <li>
              <NavLink to="/addPoduct" className="nav-link"> agragar producto </NavLink>
            </li>
            <li>
              <NavLink to="/home" className="nav-link">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/perfil" className="nav-link">Perfil</NavLink>
            </li>
            <li>
              <NavLink to="/editprofile" className="nav-link">Editar perfil</NavLink>
            </li>
            <li>
              <NavLink to="/productView" className="nav-link">Vista Perfil</NavLink>
            </li>
            <li>
              <NavLink to="/lista productos" className="nav-link">Lista productos</NavLink>
            </li>
            {!logged && (
                <li>
                  <NavLink to="/login" className="nav-link">Iniciar se</NavLink>
                </li>
            )}

          </ul>
          {logged && (
              <>
               <li>
                  <NavLink to="/login" className="nav-link">Cargar</NavLink>
                </li>
             
                <span className="mr-4">{user?.name}</span>
                <button onClick={() => onLogout()} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                  Logout
                </button>
              </>
          )}  
        </div>
      </nav>

    </>
  )
}

