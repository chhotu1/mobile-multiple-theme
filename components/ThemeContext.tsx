import { Themes } from '@/constants/Theme';
import React, { createContext, useContext, useState } from 'react';

type ThemeContextType = {
  theme: typeof Themes['light']; // Adjust to match your theme object structure
  toggleTheme: (themeName: keyof typeof Themes) => void;
};

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof Themes>('light');

  const toggleTheme = (themeName: keyof typeof Themes) => {
    setCurrentTheme(themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme: Themes[currentTheme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
