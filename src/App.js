// MATERIAL UI COMPONENTS
import { CssBaseline, Grid, Container } from "@mui/material";
import useStyles from "./styles/styles";

// COMPONENTS
import NavBar from "./components/nav-bar/NavBar.component";
import Header from "./components/header/Header.component";
import SelectListItems from "./components/select-list-Items/SelectListItems.component";
import CardList from "./components/card-list/CardList.component";

// REACT COMPONENTS
import { useState, useEffect } from "react";

const photos = [
  {
    id: "1",
    photoTitle: "Photo 1",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Wedding",
  },
  {
    id: "2",
    photoTitle: "Photo 2",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Birthday",
  },
  {
    id: "3",
    photoTitle: `Photo 3`,
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Wedding",
  },
  {
    id: "4",
    photoTitle: "Photo 4",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Wedding",
  },
  {
    id: "5",
    photoTitle: "Photo 5",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Weekend",
  },
  {
    id: "6",
    photoTitle: "Photo 6",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Birthday",
  },
  {
    id: "7",
    photoTitle: "Photo 7",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Birthday",
  },
  {
    id: "8",
    photoTitle: "Photo 8",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Weekend",
  },
  {
    id: "9",
    photoTitle: "Photo 9",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Birthday",
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

  // const setImg = () => {
  // };
  // setImg();

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
              <SelectListItems />
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
        </main>
      </>
    </div>
  );
}

export default App;
