///////////////////////////////////////////////////////////
/////// THE MAIN DATA
import { photos } from "./data/data";

///////////////////////////////////////////////////////////
/////// MATERIAL UI COMPONENTS
import { CssBaseline, Grid, Container, Switch } from "@mui/material";
import useStyles from "./styles/styles";

///////////////////////////////////////////////////////////
/////// LOCAL COMPONENTS
import NavBar from "./components/nav-bar/NavBar.component";
import Header from "./components/header/Header.component";
import SelectListItems from "./components/select-list-Items/SelectListItems.component";
import CardList from "./components/card-list/CardList.component";

///////////////////////////////////////////////////////////
/////// REACT COMPONENTS
import { useState } from "react";

///////////////////////////////////////////////////////////
/////// FUNCTIONAL COMPONENT STARTS
const App = () => {
  ///////////////////////////////////////////////////////////
  /////// MATERIAL UI HOOK STYLES
  const classes = useStyles();
  const label = { inputProps: { "aria-label": "Color switch demo" } };

  ///////////////////////////////////////////////////////////
  /////// VALUES OF EVENT HANDLERS
  const [selectedValue, setSelectedValue] = useState("");

  ///////////////////////////////////////////////////////////
  /////// THE VARIABLES
  const [allPhotos, setAllPhotos] = useState(photos);
  const [filteredPhoto, setFilteredPhoto] = useState(allPhotos);

  ///////////////////////////////////////////////////////////
  /////// EVENT HANDLERS

  // FROM DELETE BUTTON
  const onCLickChange = (id) => {
    const newFilteredPhotos = allPhotos.filter((photo) => photo.id !== id);
    setFilteredPhoto(newFilteredPhotos);
    setAllPhotos(newFilteredPhotos);
  };

  // FROM SELECTOR
  const onSelectedChange = (e) => {
    const selectedValue = e.target.value;

    // SET THE VALUE FROM SELECT EVENT TO SELECTLISTITEMS COMPONENT
    setSelectedValue(selectedValue);

    // SORTING BY CATEGORY
    const sortedPhotosByCategory = allPhotos.filter(
      (photo) => photo.category === selectedValue
    );
    setFilteredPhoto(sortedPhotosByCategory);

    // SORTING BY ALPHABETICAL A-Z
    if (selectedValue === "All categories") setFilteredPhoto(allPhotos);
    if (selectedValue === "Asc") {
      const copyforAscPhotos = [...allPhotos];
      const newAscSortedPhoto = copyforAscPhotos.sort((a, b) => {
        const categorA = a.category.toLocaleLowerCase();
        const categorB = b.category.toLocaleLowerCase();
        if (categorA < categorB) return -1;
        if (categorA > categorB) return 1;
        else return 0;
      });
      setFilteredPhoto(newAscSortedPhoto);

      // SORTING BY ALPHABETICAL Z-A
    } else if (selectedValue === "Des") {
      const copyForDesPhoto = [...allPhotos];
      const newDesSortedPhoto = copyForDesPhoto.sort((a, b) => {
        const categorA = a.category.toLocaleLowerCase();
        const categorB = b.category.toLocaleLowerCase();
        if (categorA > categorB) return -1;
        if (categorA < categorB) return 1;
        else return 0;
      });
      setFilteredPhoto(newDesSortedPhoto);
    }
  };

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
            <div className={classes.contentArea}>
              <div className={classes.btnActions}>
                <div className={classes.filterSelector}>
                  <SelectListItems
                    onSelectedHandler={onSelectedChange}
                    valueForSelected={selectedValue}
                  />
                </div>
                <div>
                  <Switch {...label} defaultChecked color="warning" />
                </div>
              </div>
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                  <CardList
                    photos={filteredPhoto}
                    onClickHandler={onCLickChange}
                  />
                </Grid>
              </Container>
            </div>
          </div>
        </main>
      </>
    </div>
  );
};

export default App;
