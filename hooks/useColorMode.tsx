import useMyTheme from "@/hooks/useMyTheme";
import { createContext, useContext } from "react"

export const ColorModeContext = createContext<string | undefined>(
  undefined
)

export interface Props {
  [propName: string]: any;
}

export const MyColorModeProvider = (props: Props) => {

  const { theme } = useMyTheme()

  return (
    <ColorModeContext.Provider value={theme} {...props} />
  )
}

export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error(`useColorMode must be used within a ColorModeContextProvider.`);
  }
  return context;
}
