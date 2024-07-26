import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [signupDetails, setSignupDetailsState] = useState(() => {
    const storedDetails = localStorage.getItem('signupDetails');
    return storedDetails ? JSON.parse(storedDetails) : [];
  });

  useEffect(() => {
    localStorage.setItem('signupDetails', JSON.stringify(signupDetails));
  }, [signupDetails]);

  const setSignupDetails = (details) => {
    setSignupDetailsState(details);
  };

  const checkEmailExists = (email) => {
    return signupDetails.some((detail) => detail.email === email);
  };

  const checkCredentials = (email, password) => {
    const user = signupDetails.find((detail) => detail.email === email);
    if (user) {
      return user.password === password;
    }
    return false;
  };

  const value = {
    signupDetails,
    setSignupDetails,
    checkEmailExists,
    checkCredentials,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
