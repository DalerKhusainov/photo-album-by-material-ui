import { Grid } from "@mui/material";
import CardItems from "../card/CardItems.component";
import { useState } from "react";

const CardList = ({ photos, callBackFuncHandlerMain }) => {
  const [value, setValue] = useState("");

  const callBackFunc = (message) => {
    setValue(message);
    // callBackFuncHandlerMain(message);
    // console.log(message);
  };

  callBackFuncHandlerMain(value);

  console.log(`CardList`);
  console.log(`CardList ${value}`);

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
