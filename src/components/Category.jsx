import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
  topBox: {
    paddingBottom: 2.5,
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "5px"
  },
  subtitle: {
    paddingLeft: 3.85,
    color: "#abb8c3",
    fontSize: 12
  }
}

export default function Category({icon, value, name}) {
  return (
    <Box align="left" sx={styles.paddingBottom}>
      <Box sx={styles.row}>
        {icon}
        <Typography variant="h6" color="primary">
          {value}
        </Typography>
      </Box>
      <Typography sx={styles.subtitle}>{name}</Typography>
    </Box>
  );
}
