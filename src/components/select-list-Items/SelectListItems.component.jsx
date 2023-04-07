// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useStyles from "../../styles/styles";
import { useState } from "react";

const SelectListItems = ({ callBackSelectHandler }) => {
  const classes = useStyles();
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  callBackSelectHandler(sort);
  console.log(`Value from SelectedListItems is ${sort}`);

  return (
    <>
      <div className={classes.selectListItems}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"Weekend"}>Weekends</MenuItem>
            <MenuItem value={"Wedding"}>Weddings</MenuItem>
            <MenuItem value={"Birthday"}>Birthdays</MenuItem>
            <MenuItem value={"Party"}>Parties</MenuItem>
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

// const numsArr = [5, 4, 3, 2, 1]
// const sortArr = (arr, str) => {
//     const newArr = [...arr];
//     if (str === 'Asc') return newArr.sort((a, b) => a - b)
//     else if (str === 'Des') return newArr.sort((a, b) => b - a)
//     else if (str === 'None') return newArr
// }

// const ascendingNums = sortArr(numsArr, 'Asc');
// console.log(ascendingNums); // [1, 2, 3, 4, 5]

// const descendingNums = sortArr(ascendingNums, 'Des');
// console.log(descendingNums); // [5, 4, 3, 2, 1]

// const initialNums = sortArr(descendingNums, 'None');
// console.log(initialNums); // [5, 4, 3, 2, 1]
