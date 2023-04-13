import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import {Button, Tooltip } from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';
import image from "../../assets/logo.png"
import Modal from '@mui/material/Modal';
import AuthDetail from "../Authenticate/Login";
import Register from "../Authenticate/Register";




const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function MainNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick =() =>{
     setOpen(true);
  }

  const handleLogin=()=>{
    setRegister(false);
    setOpen(true)
  }
  const handleRegister=()=>{
    setOpen(false)
    setRegister(true);
  }
  const handleClose = ()=>{
    setOpen(false);
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const redirectToLogin = ()=>{
    
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Support</MenuItem>
      <MenuItem onClick={handleMenuClose}>Customer care</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            
          <Badge badgeContent={4} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          
        >
          <AccountCircle color="black" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <Button onClick={handleClick}  sx={{margin:"5px",border:"1px solid black",paddingLeft:"10px",paddingRight:"10px",color:"black"}}>Login</Button>
              <Button onClick={()=> setRegister(true)} sx={{margin:"5px",border:"1px solid black",paddingLeft:"10px",paddingRight:"10px",color:"black"}}>SignUp</Button>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "transparent", color: "black", marginTop: "1rem" }}
        elevation={0}
        className="nav"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            style={{
              background: "rgba(222, 215, 215, 0.811)",
              borderRadius: "2rem",
              fontSize:"15px",
              height:"2.4rem"
            }}
          >
            <MenuIcon />
            <h5 className="text-black-500 m-1">Menu</h5>
          </IconButton>

          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, Text: "center" }}
          ></Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              Text: "center",
              color: "rgba(66, 64, 64, 0.811)",
              width: "100%",
              textAlign: "center",
            }}
          >
            <section className="flex w-full items-center justify-center">
            <img src={image} height={"35px"} width={"90px"}/>
             
            </section>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              style={{
                background: "rgba(222, 215, 215, 0.811)",
                borderRadius: "2rem",
                height:"2.5rem"
              }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Tooltip title=" My Cart">
            <IconButton
              size="medium"
              aria-label="show 4 new mails"
              color="inherit"
              style={{margin:"0 0.3rem", color:"rgba(66, 64, 64, 0.811)"}}
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
            <IconButton
              size="large"
              aria-label="show 1 new notifications"
              color="inherit"
              style={{margin:"0 0.3rem", color:"rgba(66, 64, 64, 0.811)"}}
            >
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            </Tooltip>
            <Tooltip title="My Profile">
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              style={{margin:"0 0.3rem", color:"rgba(66, 64, 64, 0.811)"}}
            >
              <AccountCircle />
            </IconButton>
            </Tooltip>
              <Button onClick={handleClick} sx={{margin:"5px",border:"1px solid black",paddingLeft:"10px",paddingRight:"10px",color:"black"}}>Login</Button>
              <Button onClick={()=> setRegister(true)} sx={{margin:"5px",border:"1px solid black",paddingLeft:"10px",paddingRight:"10px",color:"black"}}>SignUp</Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>

         
        </Toolbar>
        <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          style: {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(4px)', // replace with your desired background color
          },
        }}
      >
       <AuthDetail clickHandler={handleClose} register={handleRegister}/>
      </Modal>
      <Modal
        open={register}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

        BackdropProps={{
          style: {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(4px)', // replace with your desired background color
          },
        }}
      >
       <Register clickHandler={()=> setRegister(false)} log={handleLogin}/>
      </Modal>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
