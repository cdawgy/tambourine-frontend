import {
  Box,
  IconButton,
  Toolbar,
  AppBar,
  Typography,
  Drawer,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import DrawerList from "./DrawerList"

const SiteNavBar = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tambourine
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={()=>setOpen(!open)}>
        <DrawerList />
      </Drawer>
    </Box>
  )
}

export default SiteNavBar
