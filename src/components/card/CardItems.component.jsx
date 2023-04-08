import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Divider,
} from "@mui/material";
import useStyles from "../../styles/styles";

const CardItems = ({ photos, onClickHandler }) => {
  const classes = useStyles();
  const { imgUrl, photoTitle, photoInfo, id, category } = photos;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={imgUrl}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" color="primary" gutterBottom>
          {photoTitle}
        </Typography>
        <Divider />
        <Typography variant="caption" gutterBottom>
          {photoInfo}
        </Typography>
        <Divider />
        <Typography variant="subtitle1" color="secondary">
          {category}
        </Typography>
      </CardContent>
      <div className={classes.buttonsField}>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
          <Button
            className={`button-${id}`}
            size="small"
            color="warning"
            onClick={() => onClickHandler(id)}
          >
            Delete
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default CardItems;
