"use client";

import { MyColorModeProvider } from "@/hooks/useColorMode";

interface UserProviderProps {
  children: React.ReactNode;
}

const ColorModeProvider: React.FC<UserProviderProps> = ({
  children
}) => {
  return ( 
    <MyColorModeProvider>
      {children}
    </MyColorModeProvider>
   );
}
 
export default ColorModeProvider;