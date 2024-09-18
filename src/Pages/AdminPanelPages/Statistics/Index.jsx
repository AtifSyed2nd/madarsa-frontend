/** @format */

import React, { useState, useEffect } from "react";
import Table from "../../../Components/Table/Index";
import { useGetAll } from "../../../Hooks/useGetAll";
import { red, green } from "@mui/material/colors";
import PrimaryButton from "../../../Components/Inputs/PrimaryButton";
import AddStatistics from "../../../Components/AdminPanelDialogs/AddStatistics/Index";
import { Link } from "react-router-dom";

// Import icons from Material-UI
import CurrentIcon from "@mui/icons-material/CheckCircle"; // Icon for Current
import PassedOutIcon from "@mui/icons-material/ExitToApp"; // Icon for Passed Out

function Index() {
  const { data: Statistics, refetch } = useGetAll({
    key: `/records/statistics/nt/`,
    select: (data) => data?.data?.rows,
    onSuccess: (data) => {
      console.log(data, "<----------data");
      setRows(mapApiDataToTableRows(data));
    },
  });

  const [rows, setRows] = useState([]);

  const handleEdit = (id) => {
    console.log("Edit campaign with ID:", id);
    // Add your edit functionality here
  };

  const mapApiDataToTableRows = (apiData) => {
    return apiData
      .filter((item) => item.stat_id) // Filter out rows without stat_id
      .map((item, index) => ({
        id: item.stat_id || `unique-${index}`, // Use stat_id or fallback to a unique index-based ID
        stat_id: item.stat_id,
        stat_english_title: item.stat_english_title,
        stat_urdu_title: item.stat_urdu_title,
        stat_type: item.stat_type,
        is_current: item.is_current,
        stat_created_at: item.stat_created_at
          ? new Date(item.stat_created_at).toLocaleDateString()
          : "N/A", // Handle null dates
        stat_count: item.stat_count,
      }));
  };

  const columns = [
    { field: "stat_id", headerName: "ID", width: 70 },
    { field: "stat_english_title", headerName: "English Title", width: 130 },
    {
      field: "stat_urdu_title",
      headerName: "Urdu Title",
      width: 130,
      renderCell: (params) => (
        <span className='font-lateef text-[1.2rem]'>{params.value}</span>
      ),
    },
    {
      field: "stat_type",
      headerName: "Roles ",
      width: 130,
    },
    {
      field: "is_current",
      headerName: "Status ",
      width: 130,
      renderCell: (params) => {
        const isCurrent = params.value;
        return (
          <span
            className=' py-1 px-2 rounded-md flex items-center'
            style={{
              color: isCurrent ? green[500] : red[500],
            }}
          >
            {isCurrent ? (
              <CurrentIcon style={{ color: green[500], marginRight: "8px" }} />
            ) : (
              <PassedOutIcon style={{ color: red[500], marginRight: "8px" }} />
            )}
            {isCurrent ? "Current" : "Passed Out"}
          </span>
        );
      },
    },
    {
      field: "stat_created_at",
      headerName: "Date",
      type: "string",
      width: 90,
    },
    {
      field: "stat_count",
      headerName: "Total Counts",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <Link to='Edit' state={{ id: params?.id }}>
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

  useEffect(() => {
    if (Statistics) {
      setRows(mapApiDataToTableRows(Statistics));
    }
  }, [Statistics]);

  return (
    <div className=''>
      <Table
        columns={columns}
        rows={rows}
        DeleteUrl={`/records/delete-multiple-statistics/`}
        refetchUrl={`/records/statistics/nt/`}
        addButton={<AddStatistics onSuccess={refetch} />}
        title='Stats'
      />
    </div>
  );
}

export default Index;
