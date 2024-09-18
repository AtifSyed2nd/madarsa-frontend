/** @format */

import React, { useState, useEffect } from "react";
import Table from "../../../Components/Table/Index";
import { useGetAll } from "../../../Hooks/useGetAll";
import { red, green, yellow } from "@mui/material/colors";
import PrimaryButton from "../../../Components/Inputs/PrimaryButton";
import AddUsers from "../../../Components/AdminPanelDialogs/AddUsers/Index";
import { Link } from "react-router-dom";
import { useAlert } from "../../../Components/Layout/Alerts/Index";

function Index() {
  const addAlert = useAlert();

  const { data: User } = useGetAll({
    key: `/user_auth/get-user-list`,
    select: (data) => data.data,
    onSuccess: (data) => {
      console.log(data, "<----------data");
      setRows(mapApiDataToTableRows(data));
    },
    onError: (error) => {
      const errorMessages = error.response?.data
        ? Object.values(error.response.data).flat().join("\n")
        : "An unexpected error occurred.";

      addAlert(
        errorMessages,
        "error",
        {
          vertical: "top",
          horizontal: "center",
        },
        3000
      );
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
      id: item.user_id,
      user_id: item.user_id,
      username: item.username,
      contact_no: item.contact_no,
      email: item.email,
      // is_staff: item.is_staff,
      // is_superuser: item.is_superuser,

      user_role: item.user_role,
    }));
  };

  const columns = [
    { field: "user_id", headerName: "ID", width: 70 },
    { field: "username", headerName: "User Name", width: 130 },
    { field: "contact_no", headerName: "Contact No", width: 130 },
    { field: "email", headerName: "Email", width: 130 },

    // {
    //   field: "is_active",
    //   headerName: "Status",
    //   width: 130,
    //   renderCell: (params) => (
    //     <span
    //       className="bg-white py-1 px-2 rounded-md"
    //       style={{
    //         color: params.value ? green[500] : red[500],
    //       }}
    //     >
    //       {params.value ? "Active" : "In Active"}
    //     </span>
    //   ),
    // },
    // {
    //   field: "is_staff",
    //   headerName: "Staff",
    //   width: 130,
    //   renderCell: (params) => (
    //     <span
    //       className="bg-white py-1 px-2 rounded-md"
    //       style={{
    //         color: params.value ? green[500] : red[500],
    //       }}
    //     >
    //       {params.value ? "Yes" : "No"}
    //     </span>
    //   ),
    // },
    // {
    //   field: "is_superuser",
    //   headerName: "User Type",
    //   width: 130,
    //   renderCell: (params) => (
    //     <span
    //       className="bg-white py-1 px-2 rounded-md"
    //       style={{
    //         color: params.value ? green[500] : red[500],
    //       }}
    //     >
    //       {params.value ? "Super User" : "Normal User"}
    //     </span>
    //   ),
    // },

    // {
    //   field: "user_role",
    //   headerName: "User Role",
    //   description: "This column has a value getter and is not sortable.",
    //   width: 160,
    // },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
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

  useEffect(() => {
    if (User) {
      setRows(mapApiDataToTableRows(User));
    }
  }, [User]);

  return (
    <div className=''>
      <Table
        columns={columns}
        rows={rows}
        title='Users'
        DeleteUrl={`/user_auth/delete-multiple-users/`}
        refetchUrl={`/user_auth/get-user-list`}
        addButton={<AddUsers />}
      />
    </div>
  );
}

export default Index;
