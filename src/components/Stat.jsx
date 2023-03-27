import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const cardStyles = {
  backgroundColor: "#74AEFA",
  minWidth: 150
};

export default function Stat(props) {
  return (
    <Card sx={ cardStyles }>
      <CardContent align="left">
        <Typography variant="caption" color="#FFFFFF">
          {props.title}
        </Typography>
        <Typography variant="h2" color="#FFFFFF" align="center">
          {props.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
