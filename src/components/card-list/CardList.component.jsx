import { Grid } from "@mui/material";
import CardItems from "../card/CardItems.component";

const CardList = ({ photos, onClickHandler, onClickFilterHandler1 }) => {
  return (
    <>
      {photos.map((photo) => (
        <Grid item key={photo.id} xs={12} sm={6} md={4}>
          <CardItems
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
