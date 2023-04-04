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
  mainContainer: { backgroundColor: "#e9ecef" },
}));

export default useStyles;
