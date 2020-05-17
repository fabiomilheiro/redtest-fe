import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

const CalculationsTable = ({ results }) => {
  return (
    <TableContainer component={Paper} data-testid="results">
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Calculation type</TableCell>
            <TableCell align="right">A</TableCell>
            <TableCell align="right">B</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.length === 0 && (
            <TableRow>
              <TableCell>No results yet.</TableCell>
            </TableRow>
          )}
          {results.map((row, key) => (
            <TableRow key={key}>
              <TableCell className="cell-calculation-type">
                {row.calculationType.name}
              </TableCell>
              <TableCell align="right">
                <span className="cell-a">{row.a}</span>%
              </TableCell>
              <TableCell align="right">
                <span className="cell-b">{row.b}</span>%
              </TableCell>
              <TableCell align="right">
                <span className="cell-value">{row.value}</span>%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CalculationsTable.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      calculationType: PropTypes.shape({
        name: PropTypes.string,
      }),
      a: PropTypes.number,
      b: PropTypes.number,
      value: PropTypes.number,
    }).isRequired
  ),
};

export default CalculationsTable;
