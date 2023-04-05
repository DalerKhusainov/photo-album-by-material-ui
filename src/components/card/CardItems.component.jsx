import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import useStyles from "../../styles/styles";

const CardItems = ({ photos, callBackFuncHandler }) => {
  const classes = useStyles();

  console.log("CardItems");

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
        <Typography variant="subtitle1">{photos.photoDate}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button
          className={`button-${photos.id}`}
          size="small"
          color="error"
          onClick={() => callBackFuncHandler(photos.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItems;
