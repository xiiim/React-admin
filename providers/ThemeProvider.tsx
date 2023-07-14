"use client"

import { ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from '@/theme'
import useMyTheme from '@/hooks/useMyTheme';
import { useMemo } from 'react';

interface MyThemeProviderProps {
  children: React.ReactNode;
}

const MyThemeProvider: React.FC<MyThemeProviderProps> = ({
  children
}) => {
  const { theme } = useMyTheme()
  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme])

  return ( 
    <ThemeProvider theme={mode}>
      {children}
    </ThemeProvider>
   );
}
 
export default MyThemeProvider;