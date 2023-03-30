import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const styles = {
  title: {
    fontWeight: "800",
    color: "primary",
  } 
}

export default function Title ({ info, name }) {
  return (
    <Box align="left" >
     <Typography  color="primary" gutterBottom>
          {info}
      </Typography>
      <Typography sx={styles.title} variant="h4" gutterBottom>
          {name} 
      </Typography>
    </Box>
  );
}