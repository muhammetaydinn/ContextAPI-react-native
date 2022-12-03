import {createContext, useContext} from 'react';
import { useReducer } from 'react';
import {authReducer} from "./reducer"
const Context = createContext();
const Provider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user:false
  });
  const data = {
    ...state,
    dispatch
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);

export default Provider;
