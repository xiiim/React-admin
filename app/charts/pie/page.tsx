"use client"

import { tokens } from "@/theme"
import { Box, useTheme } from "@mui/material"
import Header from "@/components/Header"
import Pie from "@/components/Pie"

export default function PieChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="72vh">
        <Pie />
      </Box>
    </Box>
  )
}
