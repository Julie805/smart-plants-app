import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import UploadIcon from "@mui/icons-material/Upload";
import { v4 as uuidv4 } from "uuid";

//MUI Tabs setup
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

export default function IncreaseWin(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const factors = props.increase.map((item) => ({
    name: item.name,
    message: item.message,
    weight: item.weight,
    key: uuidv4()
  }));

  //gets labels
  const labelArray = factors.map((item) => item.name);
  const labelTabs = labelArray.map((label, index) => {
    return (
      <Tab
        key={index}
        label={label}
        {...a11yProps({ index })}
        sx={{
          bgcolor: value === index ? "secondary.main" : "inherit",
          "&:hover": {
            bgcolor: "secondary.light"
          }
        }}
      />
    );
  });

  //gets stage number
  const weightArray = factors.map((item) => item.weight);
  const weightMessages = weightArray.map((weight, index) => {
    return (
      <Typography key={index} color="secondary">
        {`(Score ${weight.value}) - ${weight.description}`}
      </Typography>
    );
  });

  //gets message for label
  const messageArray = factors.map((item) => item.message);
  const messages = messageArray.map((message, index) => {
    return (
      <TabPanel key={index} value={value} index={index} align="left">
        {weightMessages[index]} {message}
      </TabPanel>
    );
  });

  //styles
  const row = {
    display: "flex",
    alignItems: "flex-end",
    gap: "5px",
    paddingTop: 4,
    paddingBottom: 2
  };

  const iconStyles = {
    color: "#4BDDB5",
    paddingBottom: 0.35,
    fontSize: 28
  };

  const tabBox = {
    flexGrow: 1,
    bgcolor: "background.paper",
    display: "flex",
    height: 224
  };

  return (
    <Box align="left" sx={{ paddingBottom: 3 }}>
      <Box sx={row}>
        <UploadIcon sx={iconStyles} />
        <Typography variant="h6">Factors Increasing Win</Typography>
      </Box>
      <Card>
        <CardContent>
          <Box sx={tabBox}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              {labelTabs}
            </Tabs>
            {messages}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
