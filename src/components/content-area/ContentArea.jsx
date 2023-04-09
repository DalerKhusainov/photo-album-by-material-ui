///////////////////////////////////////////////////////////
/////// REACT COMPONENTS
import { useState, useEffect } from "react";

///////////////////////////////////////////////////////////
/////// MATERIAL UI COMPONENTS
import { Grid, Container, Typography, TextField } from "@mui/material";
import useStyles from "../../styles/styles";

///////////////////////////////////////////////////////////
/////// LOCAL COMPONENTS
import SelectListItems from "../select-list-Items/SelectListItems";
import CardList from "../card-list/CardList";
import SearchField from "../search-field/SearchField";

///////////////////////////////////////////////////////////
/////// KEY VALUE OF LOCALE STORAGE
const LOCALE_STORAGE_KEY = "albumApp.photos";

///////////////////////////////////////////////////////////
/////// FUNCTIONAL COMPONENT STARTS
const ContentField = ({ contentPhotos }) => {
  ///////////////////////////////////////////////////////////
  /////// MATERIAL UI HOOK STYLES
  const classes = useStyles();

  ///////////////////////////////////////////////////////////
  /////// THE VARIABLES
  const [allPhotos, setAllPhotos] = useState(contentPhotos);
  const [filteredPhoto, setFilteredPhoto] = useState(allPhotos);
  /////// VALUES OF EVENT HANDLERS
  const [selectedValue, setSelectedValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  /////// VALUES OF CARDS MESSAGES
  const [messageForCards, setMessageForCards] = useState("");
  const [messageColor, setMessageColor] = useState("primary");

  ///////////////////////////////////////////////////////////
  /////// GETTING DATA FROM LOCALE STORAGE
  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY));
    setAllPhotos(storedPhotos);
    setFilteredPhoto(storedPhotos);
  }, []);

  ///////////////////////////////////////////////////////////
  /////// STORING DATA TO LOCALE STORAGE
  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(allPhotos));
  }, [allPhotos]);

  ///////////////////////////////////////////////////////////
  /////// DELETE BUTTON EVENT
  const onCLickChange = (id) => {
    const newFilteredPhotos = allPhotos.filter((photo) => photo.id !== id);
    setFilteredPhoto(newFilteredPhotos);
    setAllPhotos(newFilteredPhotos);
  };

  ///////////////////////////////////////////////////////////
  /////// SELECTOR BUTTON EVENT
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
    if (selectedValue === "All categories") {
      setFilteredPhoto(allPhotos);
    }
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

  const onSearchChange = (e) => {
    const newSearchValue = e.target.value.toLocaleLowerCase();
    setSearchValue(newSearchValue);
  };

  // useEffect(() => {
  //   const newFilteredPhotos = filteredPhoto.filter((photo) =>
  //     photo.photoTitle.toLocaleLowerCase().includes(searchValue)
  //   );
  //   console.log(newFilteredPhotos);
  //   setFilteredPhoto(newFilteredPhotos);
  // }, [filteredPhoto, searchValue]);

  ///////////////////////////////////////////////////////////
  /////// SET MESSAGE FOR FINDING CARDS
  useEffect(() => {
    if (filteredPhoto.length > 1) {
      setMessageForCards(`There are ${filteredPhoto.length} cards found`);
      setMessageColor("primary");
    } else if (filteredPhoto.length === 1) {
      setMessageForCards(`There is ${filteredPhoto.length} card found`);
      setMessageColor("primary");
    } else if (filteredPhoto.length <= 0) {
      setMessageForCards(`There are no cards found`);
      setMessageColor("error");
    }
  }, [filteredPhoto]);

  return (
    <>
      <div className={classes.btnActions}>
        <div className={classes.searchField}>
          <SearchField onSearchHandler={onSearchChange} />
        </div>
        <div className={classes.filterSelector}>
          <SelectListItems
            onSelectedHandler={onSelectedChange}
            valueForSelected={selectedValue}
          />
        </div>
      </div>
      <div className={classes.messageForCards}>
        <Typography variant="h4" textAlign="center" color={messageColor}>
          {messageForCards}
        </Typography>
      </div>
      <div className={classes.contentArea}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <CardList photos={filteredPhoto} onClickHandler={onCLickChange} />
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ContentField;
