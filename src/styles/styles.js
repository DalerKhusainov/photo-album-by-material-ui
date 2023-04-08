import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: { padding: "50px" },
  icon: { marginRight: "20px" },
  buttons: { margin: "60px" },
  cardGrid: { padding: "20px 0" },
  card: { height: "100%", display: "flex", flexDirection: "column" },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: { flexGrow: "1" },
  footer: { borderTop: "solid #1976D2 1px", padding: "50px 0" },
  mainContainer: {
    backgroundColor: "#e9ecef",
    height: "2000px",
  },
  selectListItems: {
    width: "200px",
    margin: "auto auto 30px auto",
  },
  contentArea: {
    position: "relative",
    padding: "80px",
  },
  btnActions: {
    position: "absolute",
    top: "0px",
    right: "35px",
    display: "flex",
    flexDirection: "rows",
    alignItems: "center",
    padding: "20px",
  },
  filterSelector: { height: "55px", marginRight: "20px" },
}));

export default useStyles;
