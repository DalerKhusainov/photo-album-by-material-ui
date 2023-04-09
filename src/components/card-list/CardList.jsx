import { Grid } from "@mui/material";
import CardItem from "../card-item/CardItem";

const CardList = ({ photos, onClickHandler, onClickFilterHandler1 }) => {
  return (
    <>
      {photos.map((photo) => (
        <Grid item key={photo.id} xs={12} sm={6} md={4}>
          <CardItem
            photos={photo}
            onClickHandler={onClickHandler}
            onClickFilterHandler1={onClickFilterHandler1}
          />
        </Grid>
      ))}
    </>
  );
};

export default CardList;
