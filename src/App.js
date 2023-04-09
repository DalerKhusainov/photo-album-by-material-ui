///////////////////////////////////////////////////////////
/////// THE MAIN DATAS
import { photos } from "./data/data";

///////////////////////////////////////////////////////////
/////// MATERIAL UI COMPONENTS
import { CssBaseline, Container } from "@mui/material";
import useStyles from "./styles/styles";

///////////////////////////////////////////////////////////
/////// LOCAL COMPONENTS
import NavBar from "./components/nav-bar/NavBar";
import Header from "./components/header/Header";
import ContentField from "./components/content-area/ContentArea";

///////////////////////////////////////////////////////////
/////// FUNCTIONAL COMPONENT STARTS
const App = () => {
  ///////////////////////////////////////////////////////////
  /////// MATERIAL UI HOOK STYLES
  const classes = useStyles();

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
            <ContentField contentPhotos={photos} />
          </div>
        </main>
      </>
    </div>
  );
};

export default App;
