/** @format */

import * as React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import { colors } from "../../Constants/theme";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";
import { DeleteBox } from "../../Components/Layout/dialogBox/delete";
import Image from "../../Constants/Image";
import NoData from "../Layout/AdminPanel/NoData";

// Create custom styles for DataGrid
const useStyles = makeStyles({
  root: {
    "& .MuiDataGrid-columnHeaders .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
      background: `${colors.primary.light} !important`, // Ensure the header background color is applied
      fontSize: "1rem", // Customize the header text size
      fontFamily: "roboto",
      color: colors.text.main,
    },
    "& .MuiDataGrid-columnHeaders .MuiDataGrid-columnHeaderTitleContainer .MuiDataGrid-iconButtonContainer .MuiButtonBase-root":
      {
        color: colors.text.main,
      },
    "& .MuiDataGrid-columnHeaders .MuiDataGrid-menuIcon .MuiButtonBase-root": {
      color: colors.text.main,
    },
    "& .MuiDataGrid-cell": {
      background: colors.secondary.light, // Customize the cell background color
      color: colors.text.dark, // Customize the cell text color
      fontSize: "0.875rem", // Customize the cell text size
      fontFamily: "roboto",
    },
    "& .MuiDataGrid-checkboxInput .MuiSvgIcon-root": {
      color: colors.secondary.main, // Change the checkbox color
      borderColor: "white", // Change the checkbox border color
    },
  },
});

function DataTable({ title, columns, rows, DeleteUrl, refetchUrl, addButton }) {
  const classes = useStyles();
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    columns.some((column) => {
      const value = row[column.field];
      return (
        value !== undefined &&
        value !== null &&
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
  );

  // Adjust columns to use flex for equal width
  const adjustedColumns = columns.map((column) => ({
    ...column,
    flex: 1,
  }));

  return (
    <div style={{ height: 500, width: "100%", position: "relative" }}>
      <div className='flex w-full justify-between mb-4 max-tablet:flex-col max-tablet:items-start max-desktop:mb-3 max-tablet:mb-2 items-center'>
        <div className='flex gap-4 items-center '>
          <TextField
            sx={{
              width: "250px",

              "& .MuiOutlinedInput-root": {
                background: colors.secondary.light,

                borderRadius: "10px",
                "& fieldset": {
                  borderColor: colors.primary.dark,
                },
                "&:hover fieldset": {
                  borderColor: colors.primary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: colors.primary.light,
                  boxShadow: "2px 2px 4px #00000033",
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "8px 0px",
              },
            }}
            placeholder='...Search'
            variant='outlined'
            value={searchQuery}
            onChange={handleSearchChange}
            margin='normal'
            InputProps={{
              startAdornment: (
                <InputAdornment position='end'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {selectedRows.length > 0 && (
            <DeleteBox
              url={DeleteUrl}
              data={selectedRows || []}
              title={title}
              refetchUrl={refetchUrl}
            >
              <h1 className='text-[1rem] font-medium text-red-600 font-roboto '>
                Delete {selectedRows.length} items!
              </h1>
              <p className='text-[1rem] font-medium font-roboto '>
                Are you sure to <span className='text-red-600'>delete</span>{" "}
                this {title}!
              </p>
            </DeleteBox>
          )}
        </div>
        <div className='max-tablet:w-full max-tablet:justify-end max-tablet:flex'>
          {addButton}
        </div>
      </div>

      {filteredRows.length === 0 ? (
        <NoData />
      ) : (
        <DataGrid
          className={classes.root}
          rows={filteredRows}
          columns={adjustedColumns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          autoHeight
          onRowSelectionModelChange={handleSelectionChange}
          disableSelectionOnClick
          sx={{
            "& .MuiDataGrid-checkboxInput .MuiSvgIcon-root": {
              color: "#8a8ada", // Change the checkbox color
              borderColor: "white", // Change the checkbox border color
            },
          }}
        />
      )}
    </div>
  );
}

DataTable.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      width: PropTypes.number,
      type: PropTypes.string,
      description: PropTypes.string,
      sortable: PropTypes.bool,
      valueGetter: PropTypes.func,
    })
  ).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      lastName: PropTypes.string,
      firstName: PropTypes.string,
      age: PropTypes.number,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DataTable;
