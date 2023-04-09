import { AppBar, Toolbar, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import useStyles from "../../styles/styles";

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
