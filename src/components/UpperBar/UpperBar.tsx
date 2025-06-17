import { useNavigate } from 'react-router';
import './UpperBar.css'
import { Toolbar,AppBar, Button, IconButton } from '@mui/material'

export function UpperBar(){
  const navigate = useNavigate()
    return (
      <AppBar sx={{ backgroundColor: "burlywood" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button sx={{
            display: 'flex',
            flexDirection: 'column',
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
          }}><img src="../vite.svg" /></Button>
          <Button
          color="inherit"
          onClick={()=>navigate("/")}
          sx={{
            display: 'flex',
            flexDirection: 'column',
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
          {orderIcon()}
          {"IL MIO ORDINE"}
        </Button>
        </Toolbar>
      </AppBar>
    );
}

function orderIcon(){
  return (
    <svg width="32px" height="32px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M0.75 14.254V23.254"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M0.75 15.754H6C6.79565 15.754 7.55871 16.0701 8.12132 16.6327C8.68393 17.1953 9 17.9584 9 18.754H12.75C13.5456 18.754 14.3087 19.0701 14.8713 19.6327C15.4339 20.1953 15.75 20.9584 15.75 21.754H0.75"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M6 18.754H9"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M2.25 11.254H23.25"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M12.75 0.754028V2.25403"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M21.75 11.254C21.75 8.86708 20.8018 6.57789 19.114 4.89007C17.4261 3.20224 15.1369 2.25403 12.75 2.25403C10.3631 2.25403 8.07387 3.20224 6.38604 4.89007C4.69821 6.57789 3.75 8.86708 3.75 11.254"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M11.25 14.254H18.4C18.956 14.2536 19.5009 14.0988 19.9739 13.8067C20.447 13.5147 20.8296 13.0969 21.079 12.6L21.7115 11.3314"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}