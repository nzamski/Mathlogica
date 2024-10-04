import DeleteIcon from "@mui/icons-material/Delete"; // Import a delete icon
import { Box, Button, IconButton, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { MathFieldInput } from "./MathFieldInput";
import type { ProofRow } from "./types";
import "//unpkg.com/mathlive";

const defaultRows: ProofRow[] = [{ id: 1, statement: "", reason: "" }];

export const ProofTable = () => {
  const [rows, setRows] = useState<ProofRow[]>(defaultRows);

  const handleAddRow = () => {
    if (rows.length > 0) {
      const lastRow = rows[rows.length - 1];

      if (!lastRow.statement && !lastRow.reason) {
        alert("Please fill out the last row before adding a new one.");
        return;
      }
    }

    const id = rows.length + 1;
    const newRow: ProofRow = { id, statement: "", reason: "" };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const handleDeleteRow = (id: number) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleCellChange = (id: number, field: string, value: string) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "#",
      width: 100,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>{params.value}</span>
          <IconButton
            onClick={() => handleDeleteRow(+params.id)}
            sx={{ visibility: "hidden" }}
            className="delete-icon"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
    {
      field: "statement",
      headerName: "Statement",
      width: 500,
      renderCell: (params) => (
        <MathFieldInput
          value={params.value}
          onInput={(e) => {
            handleCellChange(+params.id, "statement", e.currentTarget.value);
          }}
        />
      ),
    },
    {
      field: "reason",
      headerName: "Reason",
      width: 500,
      renderCell: (params) => (
        <TextField
          value={params.value}
          onChange={(e) =>
            handleCellChange(+params.id, "reason", e.target.value)
          }
          onKeyDown={(event) => {
            event.stopPropagation();
          }}
          sx={{
            height: "100%",
            width: "100%",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
        />
      ),
    },
  ];

  return (
    <Box
      sx={{
        "& .MuiDataGrid-row:hover .delete-icon": { visibility: "visible" },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooterPagination
        hideFooter
        autoHeight
      />
      <Button onClick={handleAddRow} variant="outlined" sx={{ mt: 2 }}>
        Add row
      </Button>
    </Box>
  );
};
