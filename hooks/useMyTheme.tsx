import { create } from "zustand"

interface MyThemeStore {
  theme: string
  setDark: () => void
  setLight: () => void
}

const useMyTheme = create<MyThemeStore>((set) => ({
  theme: 'dark',
  setDark: () => set({ theme: 'dark' }),
  setLight: () => set({ theme: 'light' })
}))

export default useMyTheme