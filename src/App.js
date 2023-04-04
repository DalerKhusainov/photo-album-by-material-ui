import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
  Grid,
  Container,
  AppBar,
  Toolbar,
  CardActions,
  Button,
} from "@mui/material";
import "./App.css";
import { PhotoCamera } from "@mui/icons-material";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();

  return (
    <div>
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera className={classes.icon} />
            <Typography variant="h6">Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Hello this is photo album and I'm trying to make this sentence
                as long as possible.
              </Typography>
              <div className={classes.buttons}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained">See my photos</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined">Secondary action</Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
            <div>
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                  {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image="https://source.unsplash.com/random"
                          title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5">
                            Heading
                          </Typography>
                          <Typography>
                            This is a media card. You can use this section to
                            describe the content.
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">View</Button>
                          <Button size="small">Edit</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </div>
          </div>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="secondary">
            Something here to give the footer a purpose
          </Typography>
        </footer>
      </>
    </div>
  );
}

export default App;
