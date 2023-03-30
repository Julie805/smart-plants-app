import React from "react";
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';

const styles = {
  chip: {
    backgroundColor: "#4BDDB5",
    color: "primary",
  }
}


export default function Stage ({ number, description }) {
  return (
    <Box>
      <Chip 
        sx={styles.chip} 
        label={`STAGE ${number} - ${description}`} 
      />
    </Box>
  );
}