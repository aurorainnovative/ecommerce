import { useState } from "react";
import { AuthContext } from ".";

function AuthProvider({ children }) {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [user, setUser] = useState({
    name: null,
    email: null,
  });

  const updateLoginStatus = (user) => {
    if (!user) return;
    setUser(user);
    setIsAuthenticate(true);
  };

  const handleLogout = () => {
    setIsAuthenticate(false);
    setUser({
      name: null,
      email: null,
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticate, user, updateLoginStatus, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
