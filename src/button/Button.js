import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    margin: "0 0 0 0",
    padding: "0 0 0 0",

    "&:hover": {
      backgroundColor: green[700],
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: green[700],
      borderColor: "#005cbf",
    },
    // "&:focus": {
    //   //   boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    // },
  },
}))(Button);

const CustomizedButtons = (props) => {
  const { name, action, value } = props;

  return (
    <ColorButton fullWidth value={value} onClick={(e) => action(e, name, "value")}>
      {name}
    </ColorButton>
  );
};

export default CustomizedButtons;
