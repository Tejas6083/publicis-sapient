import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomizedButtons from "../button/Button";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));

const YearFilter = ({action, value}) => {
  const years = [
    {
      year: '2006',
      key: 0,
    },
    {
      year: '2007',
      key: 1,
    },
    {
      year: '2008',
      key: 2,
    },
    {
      year: '2009',
      key: 3,
    },
    {
      year: '2010',
      key: 4,
    },
    {
      year: '2011',
      key: 5,
    },
    {
      year: '2012',
      key: 6,
    },
    {
      year: '2013',
      key: 7,
    },
    {
      year: '2014',
      key: 8,
    },
    {
      year: '2015',
      key: 9,
    },
    {
      year: '2016',
      key: 10,
    },
    {
      year: '2017',
      key: 11,
    },
    {
      year: '2018',
      key: 12,
    },
    {
      year: '2019',
      key: 13,
    },
    {
      year: '2020',
      key: 14,
    },
  ];

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
