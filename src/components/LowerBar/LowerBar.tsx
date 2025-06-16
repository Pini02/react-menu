import { Link } from 'react-router';
import styles from './LowerBar.module.css'
import {  Toolbar,AppBar, Box, Button, IconButton} from '@mui/material'
import { useNavigate } from 'react-router';

export function LowerBar(){
    const navigate = useNavigate()
    return (
      <AppBar sx={{ backgroundColor: "burlywood", top:"auto", bottom:"0" }}>
        <Toolbar>
        <Box display={"flex"}  flexGrow={1}
        justifyContent="space-between"
        >
        {[
        { label: 'MENU', icon: menuIcon(),link:"/menu" },
        { label: 'CONTATTI', icon: contactsIcon(),link:"/contacts" },
        { label: 'CHI SIAMO', icon: whoWeAreIcon(), link:"/aboutus" }
      ].map(({ label, icon,link }, index) => (
        <Button
          key={index}
          color="inherit"
          onClick={()=>navigate(link)}
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'none', // Keep label casing
            borderRadius: 0,
            '&:focus': {
              outline: 'none',
            },
            '&:focus-visible': {
              outline: 'none',
            },
            '&:active': {
              boxShadow: 'none',
            },
            '&:hover': {
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
        >
          {icon}
          {label}
        </Button>
      ))}
        </Box>
        </Toolbar>
      </AppBar>
    );
}

function menuIcon(){
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        height="32px"
        width="32px"
        version="1.1"
        id="Icons"
        viewBox="0 0 32 32"
      >
        <path d="M23,8h-1V4.6c0-0.7-0.3-1.3-0.9-1.7c-0.6-0.4-1.3-0.4-1.9-0.1L7.6,8.1c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0  c-0.1,0-0.1,0.1-0.1,0.1C7.1,8.5,7,8.7,7,9c0,0,0,0,0,0c0,0,0,0,0,0v19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V10C25,8.9,24.1,8,23,8z   M20,18.5c0,1.9-0.5,3.4-1.4,4.3c-0.7,0.8-1,1.8-0.9,2.8L18,28H14l0.3-2.4c0.1-1-0.2-2-0.9-2.8c-0.9-1-1.4-2.5-1.4-4.3V13  c0-0.6,0.4-1,1-1s1,0.4,1,1v5.5c0,0.2,0,0.4,0,0.5h1v-6c0-0.6,0.4-1,1-1s1,0.4,1,1v6h1c0-0.2,0-0.4,0-0.5V13c0-0.6,0.4-1,1-1  s1,0.4,1,1V18.5z M20,8h-7.4L20,4.6V8z" />
      </svg>
    );
}
function contactsIcon(){
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32px"
        height="32px"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z"
          fill="#000000"
        />
      </svg>
    );
}

function whoWeAreIcon(){
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32px"
        height="32px"
        viewBox="0 0 512 512"
        version="1.1"
      >
        <title>about-filled</title>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="drop"
            fill="#000000"
            transform="translate(42.666667, 42.666667)"
          >
            <path
              d="M213.333333,3.55271368e-14 C331.154987,3.55271368e-14 426.666667,95.51168 426.666667,213.333333 C426.666667,331.153707 331.154987,426.666667 213.333333,426.666667 C95.51296,426.666667 3.55271368e-14,331.153707 3.55271368e-14,213.333333 C3.55271368e-14,95.51168 95.51296,3.55271368e-14 213.333333,3.55271368e-14 Z M234.713387,192 L192.04672,192 L192.04672,320 L234.713387,320 L234.713387,192 Z M213.55008,101.333333 C197.99616,101.333333 186.713387,112.5536 186.713387,127.704107 C186.713387,143.46752 197.698773,154.666667 213.55008,154.666667 C228.785067,154.666667 240.04672,143.46752 240.04672,128 C240.04672,112.5536 228.785067,101.333333 213.55008,101.333333 Z"
              id="Shape"
            ></path>
          </g>
        </g>
      </svg>
    );
}