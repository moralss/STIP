import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import "../../../App.css";
// import { createTheme } from "@mui/material/styles";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from '@mui/icons-material/Adb';
// import logo from "./assets/logo_color.png";
// import dsi from "./assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import Register from "./Register";
import About from "./about";
import Home from "./home";
import Sponsors from "./sponsors";
import Contact from "./contact";
import Faqs from "./faqs";

import logo from "../../../assets/logo_color.png";
import dsi from "../../../assets/logo.jpg";

const pages = ["Home", "About", "Sponsors", "Faqs", "contact", "Register", "Login"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function LandingPage() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [selectPage, setSelectPage] = React.useState("Home");
  // const buttonFont = createTheme({
  //   typography: {
  //     fontFamily: ["Josefin Sans", "sans-serif"].join(","),
  //   },
  // });
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const displayRightLink = (page) => {
    if (
      page === "Register" ||
      page === "Home" ||
      page === "About" ||
      page === "contact" ||
      page === "Sponsors" ||
      page === "Faqs"
    ) {
      setSelectPage(page);
      return "";
    }
    // console.log(page);
    navigate(`/dashboards/analytics`); // use either relative or absolute path both will work,navigate to help page or wherever want to navigate
    return "";
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="navbar" style={{ overflow: "hidden" }}>
      <div style={{ textAlign: "center" }}>
        <img style={{ width: "11rem", margin: "0.5rem" }} alt="" src={logo} />
        <img style={{ width: "11rem", margin: "0.5rem" }} alt="" src={dsi} />
      </div>
      <div style={{ flexGrow: "1" }}>
        <AppBar
          style={{
            background: "linear-gradient(195deg, #49a3f1, #1A73E8)",
          }}
          position="static"
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                style={{
                  justifySelf: "center",
                  display: "grid",
                  gridTemplateColumns: "repeat(7 , 1fr)",
                }}
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              >
                {pages.map((page) => (
                  <Button
                    className="navbar"
                    style={{
                      color: "white",
                      fontFamily: ["sans-serif", "sans-serif"].join(","),
                      fontWeight: 200,
                      lineHeight: 1.625,
                      letterSpacing: "0.00938em",
                    }}
                    key={page}
                    onClick={() => displayRightLink(page)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>

      {selectPage === "Register" ? <Register /> : null}
      {selectPage === "Home" ? <Home /> : null}
      {selectPage === "About" ? <About /> : null}
      {selectPage === "Sponsors" ? <Sponsors /> : null}
      {selectPage === "contact" ? <Contact /> : null}
      {selectPage === "Faqs" ? <Faqs /> : null}
    </div>
  );
}
export default LandingPage;
