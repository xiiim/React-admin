"use client"

import { tokens } from "@/theme"
import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import Header from "@/components/Header"
import { mockDataTeam } from "@/data/mockData"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"

export default function ManageTeam() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const columns = [
    { 
      field: "id", 
      headerName: "ID",
      type: "number" 
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      type: "string",
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      type: "string",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }: any) => {
        return (
          (access === "admin" ? (
            <Box
              sx={{
              width: "60%",
              margin: "0 auto",
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "4px",
              backgroundColor: colors.redAccent[400]
              }}
            > 
              <AdminPanelSettingsOutlinedIcon /> 
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {access}
              </Typography>
            </Box>
          ) : access === "manager" ? (
            <Box
              sx={{
              width: "60%",
              margin: "0 auto",
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "4px",
              backgroundColor: colors.blueAccent[500]
              }}
            > 
              <SecurityOutlinedIcon />
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {access}
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
              width: "60%",
              margin: "0 auto",
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "4px",
              backgroundColor: colors.greenAccent[600]
              }}
            > 
              <LockOpenOutlinedIcon /> 
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {access}
              </Typography>
            </Box>
          )
        )      
        )
      },
    }
  ]


  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="72vh"
        width="90vw"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid 
          checkboxSelection 
          rows={mockDataTeam}
          // @ts-ignore 
          columns={columns} 
        />
      </Box>
    </Box>
  )
}
