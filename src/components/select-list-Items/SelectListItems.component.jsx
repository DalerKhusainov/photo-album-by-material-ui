// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useStyles from "../../styles/styles";

const SelectListItems = ({ onSelectedHandler, valueForSelected }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.selectListItems}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valueForSelected}
            label="Age"
            onChange={onSelectedHandler}
          >
            <MenuItem value={"People"}>People</MenuItem>
            <MenuItem value={"Car"}>Car</MenuItem>
            <MenuItem value={"City"}>City</MenuItem>
            <MenuItem value={"Food"}>Food</MenuItem>
            <MenuItem value={"Asc"}>Alphabetical A-Z</MenuItem>
            <MenuItem value={"Des"}>Alphabetical Z-B</MenuItem>
            <MenuItem value={"All categories"}>All categories</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default SelectListItems;
