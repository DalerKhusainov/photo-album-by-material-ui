import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import useStyles from "../../styles/styles";
// import { useState } from "react";
// import { useEffect } from "react";

const CardItems = ({ photos, callBackFuncHandler }) => {
  const classes = useStyles();
  // const [clickedBtnValue, setClickedBtnValue] = useState("");
  // const [sendValue, setSendValue] = useState(clickedBtnValue);

  // console.log(sendValue);

  // useEffect(() => {
  //   callBackFuncHandler(clickedBtnValue);
  // }, []);

  // callBackFuncHandler(clickedBtnValue);

  console.log("CardItems");
  // console.log(clickedBtnValue);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" color="primary">
          {photos.photoTitle}
        </Typography>
        <Typography variant="caption" gutterBottom>
          {photos.photoInfo}
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          {photos.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button
          className={`button-${photos.id}`}
          size="small"
          // onClick={() => setClickedBtnValue(photos.id)}
          onClick={() => callBackFuncHandler(photos.id)}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItems;
