/** @format */

import React, { useState } from "react";
import Table from "../../../Components/Table/Index";
import { useGetAll } from "../../../Hooks/useGetAll";
import PrimaryButton from "../../../Components/Inputs/PrimaryButton";
import AdminPanelDialog from "../../../Components/AdminPanelDialogs/AddImageInGallery/Index";
import { Link } from "react-router-dom";

function Index() {
  const [rows, setRows] = useState([]);

  const { data: Gallery, refetch } = useGetAll({
    key: `/records/images/nt/`,
    select: (data) => data.data || [],
    onSuccess: (data) => {
      setRows(mapApiDataToTableRows(data));
    },
  });

  const handleEdit = (id) => {
    console.log("Edit campaign with ID:", id);
  };

  const mapApiDataToTableRows = (apiData) => {
    if (!Array.isArray(apiData)) {
      return [];
    }
    return apiData
      .filter((item) => item.image_id)
      .map((item, index) => ({
        id: item.image_id || `unique-${index}`,
        image_id: item.image_id,
        image_title: item.image_title,
        createdAt: item.createdAt
          ? new Date(item.createdAt).toLocaleDateString()
          : "N/A",
        updatedAt: item.updatedAt
          ? new Date(item.updatedAt).toLocaleDateString()
          : "N/A",
      }));
  };

  const columns = [
    { field: "image_id", headerName: "ID", width: 70 },
    { field: "image_title", headerName: "Title", width: 130 },
    {
      field: "createdAt",
      headerName: "Create Date",
      type: "string",
      width: 90,
    },
    {
      field: "updatedAt",
      headerName: "Update Date",
      type: "string",
      width: 90,
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
  return (
    <div className=''>
      <Table
        columns={columns}
        DeleteUrl={`/records/delete-multiple-images/`}
        refetchUrl={"/records/images/nt/"}
        addButton={<AdminPanelDialog onSuccess={refetch} />}
        rows={rows}
        title='Images'
      />
    </div>
  );
}

export default Index;
