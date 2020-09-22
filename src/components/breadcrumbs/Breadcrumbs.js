import React, {useEffect} from "react";
import { Typography, Breadcrumbs, Link } from "@material-ui/core";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Breadcrumb(value) {
    console.log(value);
    useEffect(()=>{
        if(value!= null) {
            if(value.launch_year){
                return value.launch_year
            }
        }
    },[])
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
          {(value.launch_year) ? value.launch_year : null}
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
      >
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
}
