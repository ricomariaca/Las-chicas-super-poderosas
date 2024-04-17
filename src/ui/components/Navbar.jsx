import { Link, NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../auth";


export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();

    navigate('/login', {
      replace: true
    });
  }

  return (
    <>
      <nav >
        <Link to="/" > RetroGames </Link>

        <div >
          <ul >
            <li >
              <NavLink to="/retro" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Retro</NavLink>
            </li>
            <li >
              <NavLink to="/perfil" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>perfil</NavLink>
            </li>
          </ul>
          <span >
            {user?.name}
          </span>
          <button  onClick={() => onLogout()}>
            Logout
          </button>
        </div>
      </nav>
    </>
  )
}