import { Newspaper, Pets } from "@mui/icons-material"
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { useNavigate } from "react-router-dom"

const DrawerList = () => {

  const navigate = useNavigate()

  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => {}}>
      <List>
        <ListItem key="News" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Newspaper />
            </ListItemIcon>
            <ListItemText primary="News" onClick={() => navigate("/news")}/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default DrawerList
