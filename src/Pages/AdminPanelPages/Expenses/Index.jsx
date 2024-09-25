/** @format */

import React, { useState, useEffect } from "react";
import Table from "../../../Components/Table/Index";
import { useGetAll } from "../../../Hooks/useGetAll";
import { red, green } from "@mui/material/colors";
import PrimaryButton from "../../../Components/Inputs/PrimaryButton";
import AddExpenses from "../../../Components/AdminPanelDialogs/AddExpenses/Index";
import { Link } from "react-router-dom";

// Import icons from Material-UI
import UrgentIcon from "@mui/icons-material/Warning"; // Icon for urgent
import NonUrgentIcon from "@mui/icons-material/CheckCircle"; // Icon for non-urgent

function Index() {
  const { data: Expenses, refetch } = useGetAll({
    key: `/records/expenses/nt/`,
    select: (data) => data?.data?.rows,
    onSuccess: (data) => {
      console.log(data, "<----------data");
      setRows(mapApiDataToTableRows(data));
    },
  });

  const [rows, setRows] = useState([]);

  const mapApiDataToTableRows = (apiData) => {
    return apiData
      .filter((item) => item.exp_id) // Filter out rows without exp_id
      .map((item, index) => ({
        id: item.exp_id || `unique-${index}`, // Use exp_id or fallback to a unique index-based ID
        exp_id: item.exp_id,
        exp_english_title: item.exp_english_title,
        exp_urdu_title: item.exp_urdu_title,
        is_urgent: item.is_urgent,
        exp_created_at: item.exp_created_at
          ? new Date(item.exp_created_at).toLocaleDateString()
          : "N/A", // Handle null dates
        exp_amount: item.exp_amount,
      }));
  };

  const columns = [
    // { field: "exp_id", headerName: "ID", width: 70 },
    { field: "exp_english_title", headerName: "English Title", width: 130 },
    {
      field: "exp_urdu_title",
      headerName: "Urdu Title",
      width: 130,
      renderCell: (params) => (
        <span className='font-lateef text-[1.2rem]'>{params.value}</span>
      ),
    },
    {
      field: "is_urgent",
      headerName: "Status",
      width: 130,
      renderCell: (params) => {
        const isUrgent = params.value;
        return (
          <span
            className=' py-1 px-2 rounded-md flex items-center'
            style={{
              color: isUrgent ? red[500] : green[500],
            }}
          >
            {isUrgent ? (
              <UrgentIcon style={{ color: red[500], marginRight: "8px" }} />
            ) : (
              <NonUrgentIcon
                style={{ color: green[500], marginRight: "8px" }}
              />
            )}
            {isUrgent ? "Urgent" : "Non-Urgent"}
          </span>
        );
      },
    },
    {
      field: "exp_created_at",
      headerName: "Date",
      type: "string",
      width: 90,
    },
    {
      field: "exp_amount",
      headerName: "Goal Amount",
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
          >
            Edit
          </PrimaryButton>
        </Link>
      ),
    },
  ];

  useEffect(() => {
    if (Expenses) {
      setRows(mapApiDataToTableRows(Expenses));
    }
  }, [Expenses]);

  return (
    <div className=''>
      <Table
        columns={columns}
        title='Expenses'
        rows={rows}
        DeleteUrl={`/records/delete-multiple-expenses/`}
        refetchUrl={`/records/expenses/nt/`}
        addButton={<AddExpenses onSuccess={refetch} />}
      />
    </div>
  );
}

export default Index;
