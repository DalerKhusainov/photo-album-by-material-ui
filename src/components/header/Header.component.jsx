import { Button, Typography, Grid } from "@mui/material";
import useStyles from "../../styles/styles";

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h1" align="center" color="primary">
        Photo Album
      </Typography>
      <Typography variant="h3" align="center" color="textSecondary" paragraph>
        To showcase your special events.
      </Typography>
      <div className={classes.buttons}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained">SEE MY PHOTOS</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">ADD PHOTOS</Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Header;
