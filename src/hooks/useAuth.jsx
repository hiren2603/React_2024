import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, logout, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
