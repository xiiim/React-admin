"use client"

import { tokens } from '@/theme'
import { useTheme } from '@mui/material'
import { createGlobalStyle } from 'styled-components'

export const StyleProvider = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const GlobalStyle = createGlobalStyle`
    html,
    body,
    :root {
      height: 100%;
      width: 100%;
      background-color: ${colors.primary[400]};
      font-family: 'Source Sans 3', sans-serif;
    }

    .ps-sidebar-container {
      background-color: ${colors.primary[500]};
    }
  `
  return (
    <GlobalStyle />
  )
}