import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//styles
const row = {
  display: "flex",
  alignItems: "center",
  gap: "5px"
};

const subtitle = {
  paddingLeft: 3.85,
  color: "#abb8c3",
  fontSize: 12
};

export default function Category(props) {
  return (
    <Box align="left" sx={{ paddingBottom: 2.5 }}>
      <Box sx={row}>
        {props.icon}
        <Typography variant="h6" color="primary">
          {props.value}
        </Typography>
      </Box>
      <Typography sx={subtitle}>{props.name}</Typography>
    </Box>
  );
}
