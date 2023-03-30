import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const styles = {
  card: {
    backgroundColor: "#74AEFA",
    minWidth: 150
  }
}


export default function Stat({ title, value }) {
  return (
    <Card sx={styles.card}>
      <CardContent align="left">
        <Typography variant="caption" color="#FFFFFF">
          {title}
        </Typography>
        <Typography variant="h2" color="#FFFFFF" align="center">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
