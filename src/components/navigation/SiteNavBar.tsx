import { Box, IconButton, Toolbar, AppBar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const SiteNavBar = () => {
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
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tambourine
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default SiteNavBar
