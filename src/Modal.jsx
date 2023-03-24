import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import PersonIcon from "@mui/icons-material/Person";
import PaidIcon from "@mui/icons-material/Paid";
import CategoryIcon from "@mui/icons-material/Category";
import CloseIcon from "@mui/icons-material/Close";
//components
import History from "./components/History";
import IncreaseWin from "./components/IncreaseWin";
import DecreaseWin from "./components/DecreaseWin";
import Stat from "./components/Stat";
import Category from "./components/Category";
import Stage from "./components/Stage";
import Title from "./components/Title";
import * as opportunities from "./opportunities.json";



//styles
const outerCardStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 580,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  padding: 4,
  overflow: "auto",
  display: "flex",
  justifyContent: "flex-start"
};

const statBoxStyles = {
  display: "flex",
  gap: "20px",
  width: "100%"
};

const topBoxStyles = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 6,
  width: "100%",
  paddingBottom: 2.5
};

const buttonStyles = {
  color: "#0A193F",
  borderColor: "#0A193F",
  fontWeight: "600",
  padding: 1,
  width: 100,
  "&:hover": {
    color: "#FFFFFF",
    backgroundColor: "#74AEFA",
    borderColor: "#74AEFA"
  }
};

const closeButtonStyles = {
  color: "#0A193F",
  padding: 1,
  "&:hover": {
    color: "#74AEFA"
  }
};

export default function Modal({ closeModal, data, nextData, index }) {
  const [currentRow, setCurrentRow] = useState(data);

  let numStage = null;
  let stageInfo = null;
  let numStars = null;
  let oppName = null;
  let oppInfo = null;
  let amountString = null;
  let amountComma = null;

  if (currentRow) {
    numStage = currentRow.stage[0]; //stage number
    stageInfo = currentRow.stage.slice(2); //stage description
    numStars = parseInt(currentRow.pilytixTier[0], 10); //number of stars
    oppName = currentRow.oppName.slice(13); //solo opp name
    oppInfo = currentRow.oppName.slice(0, 11); //pre-name opp id
    amountString = currentRow.amount.toString(); // turns amount into string
    amountComma = amountString.slice(0, -3) + "," + amountString.slice(-3); // adds comma before third to last postion
  }

  useEffect(() => {
    setCurrentRow(data);
  }, [data]);

  return (
    <Card sx={outerCardStyles}>
      <CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: 6
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              paddingRight: 7.5
            }}
          >
            <Button
              sx={buttonStyles}
              variant="outlined"
              onClick={() => nextData(index - 1)}
              disabled={index === 0}
            >
              Previous
            </Button>
            <Button
              sx={buttonStyles}
              variant="outlined"
              onClick={() => nextData(index + 1)}
              disabled={index === data.length - 1}
            >
              Next
            </Button>
          </Box>

          <Box>
            <Button onClick={() => closeModal(false)} sx={closeButtonStyles}>
              <CloseIcon />
            </Button>
          </Box>
        </CardActions>
        <Box sx={{ paddingBottom: 0.5 }}>
          <Title info={oppInfo} name={oppName} />
        </Box>
        <Box sx={topBoxStyles}>
          <Box>
            <Box sx={{ paddingBottom: 2.5 }}>
              {numStage ? (
                <Stage
                  number={numStage}
                  description={stageInfo}
                  sx={{ paddingBottom: 1 }}
                />
              ) : (
                <p>No numStage found</p>
              )}
            </Box>
            <Category
              icon={<PersonIcon sx={{ color: "#4BDDB5" }} />}
              name="Sales Representative"
              value={currentRow.salesRepName}
            />
            <Category
              icon={<PaidIcon sx={{ color: "#4BDDB5" }} />}
              name="Amount"
              value={`$${amountComma}`}
            />
            <Category
              icon={<CategoryIcon sx={{ color: "#4BDDB5" }} />}
              name="Product"
              value={currentRow.product}
            />
          </Box>
        </Box>
        <Box sx={statBoxStyles}>
          <Stat title="Rep Probablility:" value={currentRow.repProbability} />
          <Stat
            title="Pilytix Probablility:"
            value={currentRow.pilytixProbability}
          />
          <Stat
            title="Pilytix Tier:"
            value={
              <Rating
                name="read-only"
                value={numStars}
                sx={{
                  color: "#FFFFFF"
                }}
                readOnly
              />
            }
          />
        </Box>
        <Box sx={{ paddingTop: 5, paddingBottom: 10 }}>
          {currentRow.probabilityHistory && (
            <History history={currentRow.probabilityHistory} />
          )}
          {currentRow.pilytixFactorsIncreasingWin && (
            <IncreaseWin increase={currentRow.pilytixFactorsIncreasingWin} />
          )}
          {currentRow.pilytixFactorsDecreasingWin && (
            <DecreaseWin decrease={currentRow.pilytixFactorsDecreasingWin} />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}