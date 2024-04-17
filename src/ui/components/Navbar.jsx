import { Link, NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../auth";


export const Navbar = () => {
  const { user, logout, login } = useContext(AuthContext);

  const navigate = useNavigate();
  const onLogin = () => {
    //const lastPath = localStorage.getItem('lastPath') || '/'

    login('Cosme Fula');
    //navegar

   /* navigate(lastPath, {
      replace: true
    })*/
  };

  const onLogout = () => {
    logout();

    

    navigate('/login', {
      replace: true
    });
  }

  return (
    <>
     <nav className="bg-white text-green-500 py-4 px-6 flex justify-between items-center">
  <Link to="/" className="text-lg font-bold">RetroGames</Link>

  <div className="flex items-center">
    <ul className="flex justify-center space-x-6">
      <li>
        <NavLink to="/retro" className="nav-link">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="/perfil" className="nav-link">Perfil</NavLink>
      </li>
      <li>
        <NavLink to="/productView" className="nav-link">Vista Perfil</NavLink>
      </li>
      <li>
        <NavLink to="/lista productos" className="nav-link">lista productos</NavLink>
      </li>
    </ul>
    <span className="mr-4">{user?.name}</span>
    <button onClick={() => onLogin()} className="bg-green-500 text-white px-4 py-2 rounded-lg">
      Login
    </button>
  </div>
</nav>

    </>
  )
}