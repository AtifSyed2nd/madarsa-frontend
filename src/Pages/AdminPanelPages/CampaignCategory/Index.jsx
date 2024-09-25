/** @format */

import React, { useState, useEffect } from "react";
import Table from "../../../Components/Table/Index";
import { useGetAll } from "../../../Hooks/useGetAll";
import { red, green } from "@mui/material/colors";
import PrimaryButton from "../../../Components/Inputs/PrimaryButton";
import AddCategory from "../../../Components/AdminPanelDialogs/AddCategory/Index";
import { Link } from "react-router-dom";
import { useQueryClient } from "react-query";

// Import icons from Material-UI
import ActiveIcon from "@mui/icons-material/CheckCircle";
import InactiveIcon from "@mui/icons-material/Cancel";

function Index() {
  const { data: CampaignCategory, refetch } = useGetAll({
    key: `campaign/categories/nt/`,
    select: (data) => data?.data?.row,
    onSuccess: (data) => {
      console.log(data, "<----------data");
      setRows(mapApiDataToTableRows(data));
    },
  });

  const [rows, setRows] = useState([]);

  const handleDelete = (selectedRows) => {
    const remainingRows = rows.filter((row) => !selectedRows.includes(row.id));
    setRows(remainingRows);
  };

  const handleEdit = (id) => {
    console.log("Edit campaign with ID:", id);
    // Add your edit functionality here
  };

  const mapApiDataToTableRows = (apiData) => {
    return apiData.map((item) => ({
      id: item.category_id,
      category_id: item.category_id,
      category_title: item.category_title,
      image: item.image,
      is_active: item.is_active,
      createdAt: new Date(item.createdAt).toLocaleDateString(),
    }));
  };

  const columns = [
    // { field: "category_id", headerName: "ID", width: 70 },
    { field: "category_title", headerName: "Title", width: 130 },
    {
      field: "image",
      headerName: "Image",
      width: 130,
      renderCell: (params) => (
        <img
          className='bg-white py-1 px-2 rounded-md max-h-12 '
          src={process.env.REACT_APP_FE_URL + params.value}
        />
      ),
    },
    {
      field: "is_active",
      headerName: "Status",
      width: 130,
      renderCell: (params) => {
        const isActive = params.value;
        return (
          <span
            className='py-1 px-2 rounded-md flex items-center'
            style={{
              color: isActive ? green[500] : red[500],
            }}
          >
            {isActive ? (
              <ActiveIcon style={{ color: green[500], marginRight: "8px" }} />
            ) : (
              <InactiveIcon style={{ color: red[500], marginRight: "8px" }} />
            )}
            {isActive ? "Active" : "Inactive"}
          </span>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Date",
      type: "string",
      width: 130,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Link to='Edit' state={{ id: params?.id }}>
          {console.log(params, "<-----------------")}
          <PrimaryButton
            sx={{
              borderRadius: 1,
              height: "30px",
              background: "#8a8ada",
              "&:hover": {
                background: "#8a8adaba",
              },
            }}
            onClick={() => handleEdit(params.id)}
          >
            Edit
          </PrimaryButton>
        </Link>
      ),
    },
  ];

  return (
    <div className=''>
      <Table
        columns={columns}
        rows={rows}
        title="Category's"
        addButton={<AddCategory onSuccess={refetch} />}
        DeleteUrl={`/campaign/delete-multiple-categories/`}
        refetchUrl={`/campaign/categories/nt/`}
      />
    </div>
  );
}

export default Index;
