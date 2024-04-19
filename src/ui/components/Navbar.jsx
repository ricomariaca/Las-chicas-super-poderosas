import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth";
import { ProductHome } from "../../hunt/pages/ProductHome";

export const Navbar = () => {
  const { user, logout, login, logged } = useContext(AuthContext);

  const navigate = useNavigate();
  const onLogin = () => {
    <ProductHome />;
  };

  const onLogout = () => {
    logout();

    navigate("/home", {
      replace: true,
    });
  };

  return (
    <>
      <nav className="bg-white py-4 px-6 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-black">
          Product hunt
        </Link>

        <div className="flex items-center">
          <ul className="flex justify-center space-x-6">
            <li>
              <NavLink to="/addPoduct" className="nav-link text-teal-600">
                Agregar producto
              </NavLink>
            </li>
            <li>
              <NavLink to="/home" className="nav-link text-teal-600">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/perfil" className="nav-link text-teal-600">
                Perfil
              </NavLink>
            </li>
            <li>
              <NavLink to="/editprofile" className="nav-link text-teal-600">
                Editar perfil
              </NavLink>
            </li>
            <li>
              <NavLink to="/productView" className="nav-link text-teal-600">
                Vista Perfil
              </NavLink>
            </li>
            <li>
              <NavLink to="/lista productos" className="nav-link text-teal-600">
                Lista productos
              </NavLink>
            </li>
            {!logged && (
              <li>
                <NavLink to="/login" className="nav-link text-teal-600">
                  Iniciar sesión
                </NavLink>
              </li>
            )}
          </ul>
          {logged && (
            <>
              <li>
                <NavLink to="/login" className="nav-link text-teal-600">
                  Cargar
                </NavLink>
              </li>

              <span className="mr-4 text-teal-600">{user?.name}</span>
              <button
                onClick={() => onLogout()}
                className="text-teal-600 px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
