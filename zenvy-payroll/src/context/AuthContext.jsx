import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    role: localStorage.getItem("role"),
    token: localStorage.getItem("token"),
  });

  const login = (role) => {
    localStorage.setItem("token", "dummy-token");
    localStorage.setItem("role", role);
    setUser({ role, token: "dummy-token" });
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
