import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const title = {
  fontWeight: "800",
  color: "primary",
};

export default function Title (props) {
  return (
    <Box align="left" >
     <Typography  color="primary" gutterBottom>
          {props.info}
      </Typography>
      <Typography sx={title} variant="h4" gutterBottom>
          {props.name} 
      </Typography>
    </Box>
  );
}