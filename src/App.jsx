import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './App.css'
import BasicTable from "./Table";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(",")
  },
  palette: {
    primary: {
      main: "#0A193F"
    },
    secondary: {
      main: "#74AEFA"
    }
  }
});

const styles = {
  headline: {
    fontWeight: "800",
    p: 2.5
  }
}

export default function App() {

  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Typography variant="h5" sx={ styles.headline }>
          {" "}
          Best Smart Plants App Ever
        </Typography>
        <BasicTable></BasicTable>
      </div>
    </ThemeProvider>
  </React.Fragment>
  )
}

