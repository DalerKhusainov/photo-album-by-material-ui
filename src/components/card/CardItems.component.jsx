import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import useStyles from "../../styles/styles";

const CardItems = ({ photos }) => {
  const classes = useStyles();

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
        <Typography variant="h6">{photos.photoInfo}</Typography>
        <Typography variant="caption">{photos.photoDate}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export default CardItems;
