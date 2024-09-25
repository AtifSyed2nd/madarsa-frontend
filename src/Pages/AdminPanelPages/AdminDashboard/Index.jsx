/** @format */

import React, { useState } from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { colors } from "../../../Constants/theme";
import Image from "../../../Constants/Image";
import { useGetAll } from "../../../Hooks/useGetAll";
// Sample data for the charts
const lineChartData = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const barChartData = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

function MainContent() {
  const [stats, setStats] = useState({});
  const dashboards = [
    {
      DashBoardImg: Image.Student,
      DashBoardTotal: stats?.Total_Current_Students,
      DashBoardText: "Total Student",
    },
    {
      DashBoardImg: Image.Teacher,
      DashBoardTotal: stats?.Total_Current_Teacher,
      DashBoardText: "Total Teacher ",
    },
    {
      DashBoardImg: Image.Hafeez,
      DashBoardTotal: stats?.Total_Current_Hafiz,
      DashBoardText: "Total Hafiz",
    },
    {
      DashBoardImg: Image.Aalim,
      DashBoardTotal: stats?.Total_Current_Alim,
      DashBoardText: "Total Alim ",
    },
    {
      DashBoardImg: Image.calender,
      DashBoardTotal: stats?.Total_Annual_Expense,
      DashBoardText: "Annual Expenses (₹)",
    },
    {
      DashBoardImg: Image.Money,
      DashBoardTotal: stats?.Total_Fund_Raised,
      DashBoardText: "Funds Raised (₹)",
    },
    {
      DashBoardImg: Image.Donor,
      DashBoardTotal: stats?.Total_Donations,
      DashBoardText: "Total Donations",
    },
    {
      DashBoardImg: Image.campaign,
      DashBoardTotal: stats?.Total_Active_Campaigns,
      DashBoardText: "Active Campaigns",
    },
    {
      DashBoardImg: Image.Student,
      DashBoardTotal: stats?.Total_Number_Of_Employees,
      DashBoardText: "Total Employees ",
    },
    {
      DashBoardImg: Image.Hafeez,
      DashBoardTotal: stats?.Total_Passed_Out_Hafiz,
      DashBoardText: "Passed Out Hafiz",
    },
    {
      DashBoardImg: Image.Aalim,
      DashBoardTotal: stats?.Total_Passed_Out_Alim,
      DashBoardText: "Passed Out Alim",
    },
    {
      DashBoardImg: Image.Student,
      DashBoardTotal: stats?.Total_Passed_Out_Students,
      DashBoardText: "Passed Out Students",
    },
  ];

  useGetAll({
    key: `/dashboard/get-dashboard-data/nt/`,
    enabled: true,
    select: (data) => {
      return data.data.data;
    },
    onSuccess: (data) => {
      setStats(data);
    },
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {dashboards.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <Paper
                elevation={9}
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  height: "full",
                }}
              >
                <img src={item.DashBoardImg} alt='' />
                <Box sx={{ width: 3/5 }}>
                  <Typography
                    variant='h5'
                    sx={{
                      typography: {
                        xs: "subtitle1",
                        md: "h6",
                      },
                    }}
                  >
                    {item.DashBoardText}
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      typography: {
                        xs: "subtitle1",
                        md: "h6",
                      },
                    }}
                  >
                    {item.DashBoardTotal}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}

        {/* <Grid item xs={12}>
          <Paper
            elevation={6}
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
          >
            <Typography variant='h6'>Statistics</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant='body2'>Users: 1000</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant='body2'>Sessions: 2000</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant='body2'>Bounce Rate: 20%</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid> */}

{/*         
        <Grid item xs={12} lg={6}>
          <Paper
            elevation={6}
            sx={{ p: 2, display: "flex", flexDirection: "column", height: 380 }}
          >
            <Typography variant='h6'>Line Chart</Typography>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart
                data={lineChartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='pv'
                  stroke={`${colors.primary.light}`}
                  activeDot={{ r: 8 }}
                />
                <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid> */}

{/*         
        <Grid item xs={12} lg={6}>
          <Paper
            elevation={6}
            sx={{ p: 2, display: "flex", flexDirection: "column", height: 380 }}
          >
            <Typography variant='h6'>Bar Chart</Typography>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart
                data={barChartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='pv' fill={`${colors.primary.light}`} />
                <Bar dataKey='uv' fill='#82ca9d' />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid> */}
        
      </Grid>
    </Box>
  );
}

export default MainContent;
