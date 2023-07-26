"use client"

import Header from "@/components/Header"
import { Box } from "@mui/material"
import { useTheme } from "@mui/material"
import { tokens } from "@/theme"
import Bar from "@/components/Bar"

export default function BarChart() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="72vh">
        <Bar isDashboard={false} />
      </Box>
    </Box>
  )
}
