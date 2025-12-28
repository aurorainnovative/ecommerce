import { useEffect, useState } from "react";
import { AuthContext } from ".";

function AuthProvider({ children }) {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState({
    id: null,
    name: null,
    email: null,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticate(true);
    }
    setIsLoading(false)
  }, []);

  const updateLoginStatus = (user) => {
    if (!user) return;
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    setIsAuthenticate(true);
  };

  const handleLogout = () => {
    setIsAuthenticate(false);
    setUser({
      id: null,
      name: null,
      email: null,
    });
    localStorage.removeItem("user")
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticate, user, updateLoginStatus, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
