import { Pets } from "@mui/icons-material"
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"

const DrawerList = () => {
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => {}}>
      <List>
        <ListItem key="Dogs" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Pets />
            </ListItemIcon>
            <ListItemText primary="Dogs" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default DrawerList
