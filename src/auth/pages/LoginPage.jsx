import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context";
import { Navbar } from "../../ui/components/Navbar";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const onLogin = () => {
    login("Cosme Fula");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <button
              onClick={onLogin}
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
