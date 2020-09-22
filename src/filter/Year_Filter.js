import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomizedButtons from "../components/button/Button";

const YearFilter = ({ action, value }) => {
  var currentYear = new Date().getFullYear(),
    years = [];
  var startYear = 2006;
  var count = 0;
  while (startYear <= currentYear) {
    // years.push(startYear++);
    years.push({
      year: JSON.stringify(startYear),
      key: count++,
    });
    startYear++;
  }

  return (
    <Grid container spacing={1}>
      {years.map((year) => (
        <Grid item xs={6} key={year.key}>
          <CustomizedButtons action={action} value={value} name={year.year} />
        </Grid>
      ))}
    </Grid>
  );
};

export default YearFilter;
