import React from "react";
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';

const chipStyles = {
  backgroundColor: "#4BDDB5",
  color: "primary",
};

export default function Stage (props) {
  return (
    <Box>
      <Chip 
        sx={ chipStyles } 
        label={`STAGE ${props.number} - ${props.description}`} 
      />
    </Box>
  );
}