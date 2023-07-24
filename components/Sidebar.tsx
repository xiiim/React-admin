"use client"

import { tokens } from "@/theme"
import { useTheme, Box, IconButton, Typography } from "@mui/material"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

interface ItemProps {
  title: string
  href: string
  icon: any
  selected: string
  setSelected: any
}

const Item: React.FC<ItemProps> = ({
  title,
  href,
  icon,
  selected,
  setSelected
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Link href={href}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100]
        }} 
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  )
}

const Sidebar: React.FC = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")

  const dashboardRoutes =[
    {
      icon: <HomeOutlinedIcon />,
      title: 'Dashboard',
      href: '/'
    }
  ]

  const dataRoutes =[
    {
      icon: <PeopleOutlinedIcon />,
      title: 'Manage Team',
      href: '/data/manage-team'
    },
    {
      icon: <ContactsOutlinedIcon />,
      title: 'Contacts Information',
      href: '/data/contact'
    },
    {
      icon: <ReceiptOutlinedIcon />,
      title: 'Invoices Balances',
      href: '/data/invoice'
    }
  ]

  const pageRoutes =[
    {
      icon: <PersonOutlinedIcon />,
      title: 'Profile Form',
      href: '/pages/profile'
    },
    {
      icon: <CalendarTodayOutlinedIcon />,
      title: 'Calendar',
      href: '/pages/calendar'
    },
    {
      icon: <HelpOutlineOutlinedIcon />,
      title: 'FAQ Page',
      href: '/pages/faq'
    }
  ]

  const chartRoutes =[
    {
      icon: <BarChartOutlinedIcon />,
      title: 'Bar Chart',
      href: '/charts/bar'
    },
    {
      icon: <PieChartOutlineOutlinedIcon />,
      title: 'Pie Chart',
      href: '/charts/pie'
    },
    {
      icon: <TimelineOutlinedIcon />,
      title: 'Line Chart',
      href: '/charts/line'
    },
    {
      icon: <MapOutlinedIcon />,
      title: 'Geography Chart',
      href: '/charts/geography'
    }
  ]

  return (
    <Box 
      
    >
      <ProSidebar 
        collapsed={isCollapsed}
        rootStyles={{
          height: "100vh",
          backgroundColor: colors.primary[500],
          borderRightWidth: 0
        }}
      >
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt="profile-user"
                  width={100}
                  height={100}
                  src="/image/user.png"
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%"
                  }}
                ></Image>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Eric Xiao
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  React Admin
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {dashboardRoutes.map(route => 
              <Item
                key={route.href} 
                title={route.title}
                icon={route.icon}
                href={route.href}
                selected={selected}
                setSelected={setSelected}
              />)
            }

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Data
            </Typography>
            {dataRoutes.map(route => 
              <Item
                key={route.href} 
                title={route.title}
                icon={route.icon}
                href={route.href}
                selected={selected}
                setSelected={setSelected}
              />)
            }

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Pages
            </Typography>
            {pageRoutes.map(route => 
              <Item
                key={route.href} 
                title={route.title}
                icon={route.icon}
                href={route.href}
                selected={selected}
                setSelected={setSelected}
              />)
            }

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Charts
            </Typography>
            {chartRoutes.map(route => 
              <Item
                key={route.href} 
                title={route.title}
                icon={route.icon}
                href={route.href}
                selected={selected}
                setSelected={setSelected}
              />)
            }
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar