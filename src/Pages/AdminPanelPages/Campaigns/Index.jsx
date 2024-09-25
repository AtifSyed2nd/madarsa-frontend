/** @format */

import React, { useState, useEffect } from "react";
import Table from "../../../Components/Table/Index";
import { useGetAll } from "../../../Hooks/useGetAll";
import { red, green, yellow, blue } from "@mui/material/colors";
import PrimaryButton from "../../../Components/Inputs/PrimaryButton";
import AddCampaign from "../../../Components/AdminPanelDialogs/AddCampaigns/Index";
import { Link } from "react-router-dom";
import { useQueryClient } from "react-query";

// Import the necessary icons from Material-UI
import PendingIcon from "@mui/icons-material/HourglassEmpty";
import CompleteIcon from "@mui/icons-material/CheckCircle";
import ActiveIcon from "@mui/icons-material/PlayCircleFilled";
import DefaultIcon from "@mui/icons-material/Done";
import Image from "../../../Constants/Image";

function Index() {
  const [rows, setRows] = useState([]);
  const [totalCount, setTotalCount] = useState(5); // default limit
  const queryClient = useQueryClient();

  // Function to map API data to table rows
  const mapApiDataToTableRows = (apiData) => {
    return apiData.map((item) => ({
      id: item.campaign_id,
      campaign_id: item.campaign_id,
      campaign_name: item.campaign_name,
      campaign_status: item.campaign_status,
      category: item.categories.category_title,
      createdAt: new Date(item.campaign_created_at).toLocaleDateString(),
      target_date: new Date(item.target_date).toLocaleDateString(),
      target_amount: item.target_amount,
      fund_raised: item.fund_raised,
    }));
  };

  const { data: initialData, refetch } = useGetAll({
    key: `/campaign/nt/`,
    select: (data) => data?.data,
    onSuccess: (data) => {
      if (data && data.total_count) {
        setTotalCount(data.total_count);
      }
    },
  });

  const { data: campaignData } = useGetAll({
    key: `/campaign/nt/?page=1&limit=${totalCount}`,
    select: (data) => data?.data.rows,
    onSuccess: (data) => {
      if (data) {
        setRows(mapApiDataToTableRows(data));
      }
    },
  });

  const handleDelete = (selectedRows) => {
    if (rows && rows.length > 0) {
      const remainingRows = rows.filter(
        (row) => !selectedRows.includes(row.id)
      );
      setRows(remainingRows);
    }
  };

  const handleEdit = (id) => {
    // console.log("Edit campaign with ID:", id);
    // Add your edit functionality here
  };

  const columns = [
    // { field: "campaign_id", headerName: "ID", width: 70 },
    {
      field: "campaign_name",
      headerName: "Title",
      width: 130,
      // renderCell: (row) => {
      //   return (
      //     <div className='flex  '>
      //       <div className='w-[80px] truncate'>{row?.original?.title}</div>
      //       <a
      //         href={`/campaign-details/${row.id}`}
      //         state={{ id: `${row.id}` }}
      //         target='_blank'
      //       >
      //         <img className='ml-2' src={Image.Aalim} alt='CampaignDetails' />
      //       </a>
      //     </div>
      //   );
      // },
    },
    {
      field: "campaign_status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        let icon;
        let color;

        switch (params.value) {
          case "pending":
            icon = (
              <PendingIcon style={{ color: red[500], marginRight: "8px" }} />
            );
            color = red[500];
            break;
          case "complete":
            icon = (
              <CompleteIcon
                style={{ color: yellow[500], marginRight: "8px" }}
              />
            );
            color = yellow[500];
            break;
          case "active":
            icon = (
              <ActiveIcon style={{ color: blue[900], marginRight: "8px" }} />
            );
            color = blue[900];
            break;
          default:
            icon = (
              <DefaultIcon style={{ color: green[500], marginRight: "8px" }} />
            );
            color = green[500];
            break;
        }

        return (
          <span
            className=' py-1 px-2 rounded-md flex items-center'
            style={{
              color: color,
            }}
          >
            {icon}
            {params.value}
          </span>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      type: "string",
      width: 90,
    },
    {
      field: "createdAt",
      headerName: "Created Date",
      type: "string",
      width: 90,
    },

    {
      field: "target_date",
      headerName: "Target Date",
      type: "string",
      width: 90,
    },
    {
      field: "target_amount",
      headerName: "Goal Amount",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
    {
      field: "fund_raised",
      headerName: "Raised Amount",
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
    if (initialData && !campaignData) {
      setTotalCount(initialData.total_count);
    }
  }, [initialData, campaignData]);

  return (
    <div className=''>
      <Table
        columns={columns}
        rows={rows}
        title='Campaigns'
        DeleteUrl={`/campaign/delete-multiple-campaigns/`}
        refetchUrl={`/campaign/nt/`}
        addButton={<AddCampaign onSuccess={refetch} />}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Index;
