import React, { useState, createContext } from 'react';

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [company, setCompany] = useState(null);

  return (
    <CompanyContext.Provider value={[company, setCompany]}>
      {children}
    </CompanyContext.Provider>
  );
};