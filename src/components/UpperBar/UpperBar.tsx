import './UpperBar.css'
import { Toolbar,AppBar, Button, IconButton } from '@mui/material'

export function UpperBar(){
    return (
      <AppBar sx={{ backgroundColor: "burlywood" }}>
        <Toolbar>
          <img src="../vite.svg" />
          <IconButton
            sx={{ fontSize: "medium", marginLeft: "auto", marginRight: "0" }}
            >
            Ordine
          </IconButton>
        </Toolbar>
      </AppBar>
    );
}