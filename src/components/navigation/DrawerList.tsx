import { Newspaper } from "@mui/icons-material"
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
            <ListItemText primary="Top Headlines" onClick={() => navigate("/top-headlines")}/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default DrawerList
