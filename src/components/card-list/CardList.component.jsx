import { Grid } from "@mui/material";
import CardItems from "../card/CardItems.component";
import { useState, useEffect } from "react";

const CardList = ({ photos, callBackFuncHandlerMain }) => {
  const [value, setValue] = useState("");

  const callBackFunc = (message) => {
    setValue(message);
  };

  console.log(`CardList`);
  callBackFuncHandlerMain(value);

  return (
    <>
      {photos.map((photo) => (
        <Grid item key={photo.id} xs={12} sm={6} md={4}>
          <CardItems photos={photo} callBackFuncHandler={callBackFunc} />
        </Grid>
      ))}
    </>
  );
};

export default CardList;
