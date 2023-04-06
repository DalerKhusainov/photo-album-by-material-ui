///////////////////////////////////////////////////////////
/////// MATERIAL UI COMPONENTS
import { CssBaseline, Grid, Container, Button } from "@mui/material";
import useStyles from "./styles/styles";

///////////////////////////////////////////////////////////
/////// COMPONENTS
import NavBar from "./components/nav-bar/NavBar.component";
import Header from "./components/header/Header.component";
import SelectListItems from "./components/select-list-Items/SelectListItems.component";
import CardList from "./components/card-list/CardList.component";

///////////////////////////////////////////////////////////
/////// REACT COMPONENTS
import { useState, useEffect } from "react";

///////////////////////////////////////////////////////////
/////// THE MAIN DATA
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
    photoTitle: "Photo 3",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Party",
  },
  {
    id: "4",
    photoTitle: `Photo 4`,
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Wedding",
  },
  {
    id: "5",
    photoTitle: "Photo 5",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Wedding",
  },
  {
    id: "6",
    photoTitle: "Photo 6",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Weekend",
  },
  {
    id: "7",
    photoTitle: "Photo 7",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Party",
  },
  {
    id: "8",
    photoTitle: "Photo 8",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Birthday",
  },
  {
    id: "9",
    photoTitle: "Photo 9",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Birthday",
  },
  {
    id: "10",
    photoTitle: "Photo 10",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Weekend",
  },
  {
    id: "11",
    photoTitle: "Photo 11",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Birthday",
  },
  {
    id: "12",
    photoTitle: "Photo 12",
    photoInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum.",
    category: "Party",
  },
];

///////////////////////////////////////////////////////////
/////// FUNCTIONAL COMPONENT STARTS
const App = () => {
  ///////////////////////////////////////////////////////////
  /////// MATERIAL UI HOOK STYLES
  const classes = useStyles();

  ///////////////////////////////////////////////////////////
  /////// MAIN DATA
  const [allPhotos, setAllPhotos] = useState(photos);

  ///////////////////////////////////////////////////////////
  /////// EVENT HANDLERS
  const [clickedValue, setClickedValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  ///////////////////////////////////////////////////////////
  /////// FILTER AND SORT VARIABLES
  const [filteredPhoto, setFilteredPhoto] = useState(allPhotos);
  const [sortedPhotoByWedding, setSortedPhotoByWedding] = useState(allPhotos);
  const [sortedPhotoByBirthday, setSortedPhotoByBirthday] = useState(allPhotos);
  const [sortedPhotoByWeekend, setSortedPhotoByWeekend] = useState(allPhotos);
  const [sortedPhotoByParty, setSortedPhotoByParty] = useState(allPhotos);
  const [allCategories, setAllCategories] = useState(allPhotos);
  const [ascSortPhoto, setAscSortPhoto] = useState(allPhotos);
  const [desSortPhoto, setDesSortPhoto] = useState(allPhotos);

  ///////////////////////////////////////////////////////////
  /////// FUNCTIONS
  const callBackFunc1 = (value) => {
    setClickedValue(value);
  };

  const callBackFunc2 = (value) => {
    setSelectedValue(value);
  };

  ////////////////////////////////////////////////////////////
  /////// IT SHOULD BE FIXED

  // useEffect(() => {
  //   const newFilteredPhoto = allPhotos.filter(
  //     (photo) => photo.id !== clickedValue
  //   );
  //   setFilteredPhoto(newFilteredPhoto);
  // }, [allPhotos, clickedValue]);

  ////////////////////////////////////////////////////////////
  // STORING THE SORTED VARIABLES OF ARRAYS
  useEffect(() => {
    const newSortedPhotoByWedding = allPhotos.filter((photo) =>
      photo.category.includes("Wedding")
    );
    setSortedPhotoByWedding(newSortedPhotoByWedding);
  }, [allPhotos]);

  useEffect(() => {
    const newSortedPhotoByBirthday = allPhotos.filter((photo) =>
      photo.category.includes("Birthday")
    );
    setSortedPhotoByBirthday(newSortedPhotoByBirthday);
  }, [allPhotos]);

  useEffect(() => {
    const newSortedPhotoByWeekend = allPhotos.filter((photo) =>
      photo.category.includes("Weekend")
    );
    setSortedPhotoByWeekend(newSortedPhotoByWeekend);
  }, [allPhotos]);

  useEffect(() => {
    const newSortedPhotoByParty = allPhotos.filter((photo) =>
      photo.category.includes("Party")
    );
    setSortedPhotoByParty(newSortedPhotoByParty);
  }, [allPhotos]);

  useEffect(() => {
    const copyforAscPhotos = [...allPhotos];
    const newAscSortedPhoto = copyforAscPhotos.sort((a, b) => {
      const categorA = a.category.toLocaleLowerCase();
      const categorB = b.category.toLocaleLowerCase();
      if (categorA < categorB) return -1;
      if (categorA > categorB) return 1;
      else return 0;
    });
    setAscSortPhoto(newAscSortedPhoto);
  }, [allPhotos]);

  useEffect(() => {
    const copyForDesPhoto = [...allPhotos];
    const newDesSortedPhoto = copyForDesPhoto.sort((a, b) => {
      const categorA = a.category.toLocaleLowerCase();
      const categorB = b.category.toLocaleLowerCase();
      if (categorA > categorB) return -1;
      if (categorA < categorB) return 1;
      else return 0;
    });
    setDesSortPhoto(newDesSortedPhoto);
  }, [allPhotos]);

  ///////////////////////////////////////////////////////////
  /////// CONDITIONS FOR FILTER SELECTOR
  useEffect(() => {
    if (selectedValue === "Wedding") {
      setFilteredPhoto(sortedPhotoByWedding);
    } else if (selectedValue === "Birthday") {
      setFilteredPhoto(sortedPhotoByBirthday);
    } else if (selectedValue === "Weekend") {
      setFilteredPhoto(sortedPhotoByWeekend);
    } else if (selectedValue === "Party") {
      setFilteredPhoto(sortedPhotoByParty);
    } else if (selectedValue === "All categories") {
      setFilteredPhoto(allCategories);
    } else if (selectedValue === "Asc") {
      setFilteredPhoto(ascSortPhoto);
    } else if (selectedValue === "Des") {
      setFilteredPhoto(desSortPhoto);
    }
  }, [selectedValue]);

  return (
    <div>
      <>
        <CssBaseline />
        <NavBar />
        <main className={classes.mainContainer}>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Header />
              <SelectListItems callBackSelectHandler={callBackFunc2} />
            </Container>
            <div>
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                  <CardList
                    photos={filteredPhoto}
                    callBackFuncHandlerMain={callBackFunc1}
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
