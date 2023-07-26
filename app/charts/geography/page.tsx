"use client"

import { Box, useTheme } from "@mui/material"
import { tokens } from "@/theme"
import Header from "@/components/Header"
import Geography from "@/components/Geo"

export default function GeographyChart({ isDashboard = false }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="72vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <Geography isDashboard={false} />
      </Box>
    </Box>
  )
}
