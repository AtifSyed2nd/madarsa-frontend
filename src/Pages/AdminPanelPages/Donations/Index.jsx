/** @format */

import React, { useState, useEffect } from "react";
import Table from "../../../Components/Table/Index";
import { useGetAll } from "../../../Hooks/useGetAll";
import Button from "@mui/material/Button";
import { red, green } from "@mui/material/colors";
import PrimaryButton from "../../../Components/Inputs/PrimaryButton";

function Index() {
  const [rows, setRows] = useState([]);

  const { data: Donations } = useGetAll({
    key: `/payment/donation/nt/`,
    select: (data) => data?.data?.rows || [], // Ensure data is an array
    onSuccess: (data) => {
      console.log(data, "<----------data");
      setRows(mapApiDataToTableRows(data));
    },
  });

  const handleDelete = (selectedRows) => {
    const remainingRows = rows.filter((row) => !selectedRows.includes(row.id));
    setRows(remainingRows);
  };

  const handleEdit = (id) => {
    console.log("Edit campaign with ID:", id);
    // Add your edit functionality here
  };

  const mapApiDataToTableRows = (apiData) => {
    // Ensure apiData is defined and is an array before filtering
    if (!Array.isArray(apiData)) {
      return [];
    }
    return apiData
      .filter((item) => item.donation_id)
      .map((item, index) => ({
        id: item.donation_id || `unique-${index}`,
        donation_id: item.donation_id,
        donor_name: item.donor_name,
        donor_email: item.donor_email,
        isPaid: item.isPaid,
        donation_date: new Date(item.donation_date).toLocaleDateString(),
        donation_amount: item.donation_amount,
      }));
  };

  const columns = [
    { field: "donation_id", headerName: "ID", width: 70 },
    { field: "donor_name", headerName: "Name", width: 130 },
    { field: "donor_email", headerName: "Email", width: 130 },
    {
      field: "isPaid",
      headerName: "Status",
      width: 130,
      renderCell: (params) => (
        <span
          className='bg-white py-1 px-2 rounded-md'
          style={{
            color: params.value ? green[500] : red[500],
          }}
        >
          {params.value ? "Paid" : "Un Paid"}
        </span>
      ),
    },
    {
      field: "donation_date",
      headerName: "Date",
      type: "string",
      width: 90,
    },
    {
      field: "donation_amount",
      headerName: "Donate Amount",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
  ];

  useEffect(() => {
    if (Donations) {
      setRows(mapApiDataToTableRows(Donations));
    }
  }, [Donations]);

  return (
    <div className=''>
      <Table
        columns={columns}
        rows={rows}
        title='Donations'
        onDelete={handleDelete}
        // url={`/campaign/nt/`}
      />
    </div>
  );
}

export default Index;
