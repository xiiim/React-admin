"use client"

import { Box, IconButton, useTheme } from "@mui/material"
import InputBase from "@mui/material/InputBase"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined" 
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined" 
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined" 
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined" 
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search"
import { tokens } from "@/theme"
import { useColorMode } from "@/hooks/useColorMode"
import useMyTheme from "@/hooks/useMyTheme"

const Topbar = () => {
  const { setDark, setLight } = useMyTheme()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useColorMode()

  const toggleTheme = () => {
    if (colorMode === 'dark') {
      setLight()
    } else {
      setDark()
    }
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Box */}
      <Box sx={{
          display: "flex",
          backgroundColor: colors.primary[500],
          borderRadius: "3px"
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton>
          <SearchIcon type="button" sx={{ p : 1, fontSize: 32 }}/>
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display="flex">
        <IconButton onClick={toggleTheme}>
         { theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
         <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
         <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
         <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar