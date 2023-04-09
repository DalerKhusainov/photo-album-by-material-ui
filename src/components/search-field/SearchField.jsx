import React from "react";
import { TextField } from "@mui/material";

export default function SearchField({ onSearchHandler }) {
  return (
    <>
      <TextField
        onChange={onSearchHandler}
        id="filled-basic"
        label="Search Photo"
        variant="filled"
      />
    </>
  );
}
