import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Button, Drawer, List, ListItem } from "@mui/material";
import { logout } from "../store/actions/user.action";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { useDispatch } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  bar: {
    background: "linear-gradient(45deg, #22577E 30%, #2ca7ff 90%)",
  },
  buttonburger: {
    color: "white",
    padding: "10px",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export default function MenuAppBar() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const exit = () => {
    dispatch(logout());
    toggleDrawer();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="./" className="mainhome">
              We Care
            </Link>
          </Typography>


            <MenuIcon className={classes.buttonburger} onClick={toggleDrawer} />

            <Drawer
              open={drawer}
              onClose={toggleDrawer}
              style={{ width: "250px" }}
              anchor={"top"}
            >
              <List>
                <ListItem>
                  <Link to="/">
                    <Button color="secondary" onClick={exit}>
                      <ExitToAppIcon /> Logout
                    </Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/dashboard">
                    <Button color="primary" onClick={toggleDrawer}>
                      <DashboardIcon /> Dashboard
                    </Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/login">
                    <Button color="primary" onClick={toggleDrawer}>
                      <LoginIcon />
                      LogIN
                    </Button>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link to="/signup">
                    <Button color="primary" onClick={toggleDrawer}>
                      <LoginIcon />
                      SignUp
                    </Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/rdvs">
                    <Button color="primary" onClick={toggleDrawer}>
                      <AccountCircle />
                      Profil
                    </Button>
                  </Link>
                </ListItem>
              </List>
            </Drawer>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
