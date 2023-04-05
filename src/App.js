import { CssBaseline, Grid, Container } from "@mui/material";
import useStyles from "./styles/styles";
import NavBar from "./components/nav-bar/NavBar.component";
import Header from "./components/header/Header.component";
import CardList from "./components/card-list/CardList.component";
import { useState, useEffect } from "react";

const photos = [
  {
    id: "1",
    photoTitle: "Photo 1",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    photoDate: "Date of photo",
  },
  {
    id: "2",
    photoTitle: "Photo 2",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    photoDate: "Date of photo",
  },
  {
    id: "3",
    photoTitle: "Photo 3",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    photoDate: "Date of photo",
  },
  {
    id: "4",
    photoTitle: "Photo 4",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    photoDate: "Date of photo",
  },
  {
    id: "5",
    photoTitle: "Photo 5",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    photoDate: "Date of photo",
  },
  {
    id: "6",
    photoTitle: "Photo 6",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    photoDate: "Date of photo",
  },
  {
    id: "7",
    photoTitle: "Photo 7",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    photoDate: "Date of photo",
  },
  {
    id: "8",
    photoTitle: "Photo 8",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    photoDate: "Date of photo",
  },
  {
    id: "9",
    photoTitle: "Photo 9",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    photoDate: "Date of photo",
  },
];

function App() {
  const classes = useStyles();
  const [allPhotos, setAllPhotos] = useState(photos);
  const [clickedValue, setClickedValue] = useState("");
  const [filteredPhoto, setFilteredPhoto] = useState(allPhotos);

  const callBackFunc = (message) => {
    setClickedValue(message);
  };

  useEffect(() => {
    const newFilteredPhoto = allPhotos.filter(
      (photo) => photo.id !== clickedValue
    );
    setFilteredPhoto(newFilteredPhoto);
  }, [allPhotos, clickedValue]);

  useEffect(() => {
    setAllPhotos(filteredPhoto);
  }, [filteredPhoto]);

  console.log("App.js");

  return (
    <div>
      <>
        <CssBaseline />
        <NavBar />
        <main className={classes.mainContainer}>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Header />
            </Container>
            <div>
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                  <CardList
                    photos={filteredPhoto}
                    callBackFuncHandlerMain={callBackFunc}
                  />
                </Grid>
              </Container>
            </div>
          </div>
          <h1>Hello World</h1>
        </main>
      </>
    </div>
  );
}

export default App;
