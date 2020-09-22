import React from "react";
import ColorButton from "./Button_Style";

const ColourButton = ColorButton;

const CustomizedButtons = (props) => {
  const { name, action, value } = props;

  return (
    <ColourButton
      fullWidth
      value={value}
      onClick={(e) => action(e, name, "value")}
    >
      {name}
    </ColourButton>
  );
};

export default CustomizedButtons;
