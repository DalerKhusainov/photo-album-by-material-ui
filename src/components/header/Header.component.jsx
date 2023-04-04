import { Button, Typography, Grid } from "@mui/material";
import useStyles from "../../styles/styles";

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        Photo Album
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Photo album is a collection of photographs that are arranged in a book
        or binder to preserve memories and tell a story. It can be used to
        showcase special events, such as weddings or graduations, or to document
        everyday moments.
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
