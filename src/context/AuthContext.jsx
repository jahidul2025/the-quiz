import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize and check for existing session
  useEffect(() => {
    const sessionUser = localStorage.getItem('quiz_session');
    if (sessionUser) {
      try {
        setUser(JSON.parse(sessionUser));
      } catch (e) {
        localStorage.removeItem('quiz_session');
      }
    }
    setIsLoading(false);
  }, []);

  // Login handler
  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('quiz_registered_users') || '[]');
    const matchedUser = users.find(
      (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );

    if (matchedUser) {
      const userSession = { username: matchedUser.username };
      setUser(userSession);
      localStorage.setItem('quiz_session', JSON.stringify(userSession));
      return { success: true };
    }
    return { success: false, error: 'Invalid username or password.' };
  };

  // Register handler
  const register = (username, password) => {
    if (!username.trim() || !password.trim()) {
      return { success: false, error: 'Username and password cannot be empty.' };
    }

    const users = JSON.parse(localStorage.getItem('quiz_registered_users') || '[]');
    const exists = users.some((u) => u.username.toLowerCase() === username.toLowerCase());

    if (exists) {
      return { success: false, error: 'Username is already taken.' };
    }

    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem('quiz_registered_users', JSON.stringify(users));

    // Auto-login upon registration
    const userSession = { username };
    setUser(userSession);
    localStorage.setItem('quiz_session', JSON.stringify(userSession));

    return { success: true };
  };

  // Logout handler
  const logout = () => {
    setUser(null);
    localStorage.removeItem('quiz_session');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
