"use client"

import Header from "@/components/Header";
import { Box } from "@mui/material";

export default function Dashboard() {
  return (
    <main>
      <Box m="20px" display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
      </Box>
    </main>
  )
}
