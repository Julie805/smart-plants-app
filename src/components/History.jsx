import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function History(props) {
  const labels = props.history.map((item) => item.daysAgo);

  const data = {
    labels,
    datasets: [
      {
        label: "Rep Probability",
        data: props.history.map((item) => item.repProb),
        borderColor: "#74AEFA",
        backgroundColor: "#74AEFA"
      },
      {
        label: "Pilytix Probability",
        data: props.history.map((item) => item.pilytixProb),
        borderColor: "#4BDDB5",
        backgroundColor: "#4BDDB5"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: false, 
        text: "Probability History"
      }
    },
    scales: {
      x: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false
        },
        title: { display: true, text: "Days Ago" }
      }
    }
  };

  //styles
  const row = {
    display: "flex",
    alignItems: "flex-end",
    gap: "5px",
    paddingTop: 3,
    paddingBottom: 3
  };

  return (
    <Box sx={{ paddingBottom: 1.5 }}>
      <Box sx={row}>
        <SettingsBackupRestoreIcon
          sx={{ color: "#4BDDB5", paddingBottom: 0.35, fontSize: 28 }}
        />
        <Typography variant="h6" align="left">
          Probability History
        </Typography>
      </Box>
      <Box>
        <Line options={options} data={data} />
      </Box>
    </Box>
  );
}
