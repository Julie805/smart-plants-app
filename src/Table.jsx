import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as opportunities from "./opportunities.json";
import Modal from "./Modal";

//styles
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0A193F",
    color: theme.palette.common.white,
    fontWeight: 600
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

//styles
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  "&:hover": {
    backgroundColor: "#74AEFA",
    "& td, & th": {
      backgroundColor: "#74AEFA",
      color: theme.palette.common.white
    }
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

export default function BasicTable() {
  const [show, setShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const data = opportunities.default;
  const [rowIndex, setRowIndex] = useState(null);

  //opens modal and sets state to selected row
  function handleRowClick(event, row, index) {
    console.log({ row });
    setRowIndex(index);

    setShow(!show);
    setSelectedRow(data[index]);
  }

  function getNextData(newIndex) {
    setSelectedRow(data[newIndex]);
    setRowIndex(newIndex);
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "600px" }}>
      {show && (
        <Modal
          closeModal={setShow}
          data={selectedRow}
          nextData={getNextData}
          index={rowIndex}
        />
      )}
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Opp Name </StyledTableCell>
            <StyledTableCell align="left">Opp Stage </StyledTableCell>
            <StyledTableCell align="right">Rep Probability</StyledTableCell>
            <StyledTableCell align="right">PX Probability</StyledTableCell>
            <StyledTableCell align="left">PX Tier</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="left">Product</StyledTableCell>
            <StyledTableCell align="left">Sales Rep</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow
              onClick={(event) => handleRowClick(event, row, index)}
              key={index}
              hover={true}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.oppName}
              </TableCell>
              <TableCell align="left">{row.stage}</TableCell>
              <TableCell align="right">{row.repProbability}</TableCell>
              <TableCell align="right">{row.pilytixProbability}</TableCell>
              <TableCell align="left">{row.pilytixTier}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="left">{row.product}</TableCell>
              <TableCell align="left">{row.salesRepName}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
