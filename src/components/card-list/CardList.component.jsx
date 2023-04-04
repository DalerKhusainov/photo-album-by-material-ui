import { Grid } from "@mui/material";
import CardItems from "../card/CardItems.component";

const CardList = ({ photos }) => {
  return (
    <>
      {photos.map((photo) => (
        <Grid item key={photo.id} xs={12} sm={6} md={4}>
          <CardItems photos={photo} />
        </Grid>
      ))}
    </>
  );
};

export default CardList;
