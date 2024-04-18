import { Link, NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../auth";
import { ProductHome } from "../../hunt/pages/ProductHome";


export const Navbar = () => {
  const { user, logout, login } = useContext(AuthContext);

  const navigate = useNavigate();
  const onLogin = () => {
    <ProductHome/>
    
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
        <NavLink to="/home" className="nav-link">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="/perfil" className="nav-link">Perfil</NavLink>
      </li>
      <li>
        <NavLink to="/productView" className="nav-link">Vista Perfil</NavLink>
      </li>
      <li>
        <NavLink to="/lista productos" className="nav-link">Lista productos</NavLink>
      </li>
      <li>
        <NavLink to="/agregar productos" className="nav-link">Agregar productos</NavLink>
      </li>
      <li>
        <NavLink to="/login" className="nav-link">Iniciar se</NavLink>
      </li>

    </ul>
    <span className="mr-4">{user?.name}</span>
    
    <button onClick={() => onLogout()} className="bg-green-500 text-white px-4 py-2 rounded-lg">
      Logout
    </button>
  </div>
</nav>

    </>
  )
}