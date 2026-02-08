// src/contexts/LocaleContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLanguage, setLanguage as saveLanguage, t as translate } from '../utils/i18n';

interface LocaleContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(getLanguage());

  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentLanguage(getLanguage());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const setLanguage = (lang: string) => {
    saveLanguage(lang);
    // setLanguage вызывает window.location.reload(), поэтому следующая строка не выполнится
  };

  const value = {
    currentLanguage,
    setLanguage,
    t: translate
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};