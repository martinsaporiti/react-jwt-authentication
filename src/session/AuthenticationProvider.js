import React, { useState, useContext, createContext } from "react";


const noop = () => {};

const AuthContext = createContext({ user: null, login: noop, logout: noop });

const AuthenticationProvider = props => {
    
  const [user, setUser] = useState(null);
  
  // const auth = useMemo({
  //   login: user => setUser(user),
  //   logout: () => setUser(null),
  // }, [user]);


  const login = user => {
    setUser(user);
  }

  const logout = () => {
    setUser(null);
  }
  
  return <AuthContext.Provider value={{ user, login, logout }} {...props} />;
}

export default AuthenticationProvider;

export const useAuthentication = () => useContext(AuthContext);