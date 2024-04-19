import { useReducer } from "react"
import { authReducer } from "../reducers/authReducer"
import { types } from "../types";
import { AuthContext } from "./AuthContext";

const initialState ={
    Logged: false
};

const init = () => {
    const user = {};

    return {
      logged: false,
      user
    }
  }

export const AuthProvider = ({ children }) => {

    const [authState, dispatch ] = useReducer(authReducer, initialState, init);

    const login = (name = '') => {
        const user = { id: 1837123, name }
        const action = { type: types.login, payload: user }
    
        dispatch(action);
      }

      const logout = () => {
        const action = { type: types.logout }
        dispatch(action)
      }

      return (
        <AuthContext.Provider 
        value={
          {
            ...authState,
            login: login,
            logout: logout
          }
        }
        >
          { children }
        </AuthContext.Provider>
      )
   
    }
