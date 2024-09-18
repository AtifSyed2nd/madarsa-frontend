/** @format */

import React, { useState, useEffect } from "react";
import Image from "../../../Constants/Image";
import { colors } from "../../../Constants/theme";
import { useGetAll } from "../../../Hooks/useGetAll";

const Dashboard = () => {
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
      DashBoardText: "Total Hafeez",
    },
    {
      DashBoardImg: Image.Aalim,
      DashBoardTotal: stats?.Total_Current_Alim,
      DashBoardText: "Total Aalim ",
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 4) % dashboards.length);
        setFade(true);
      }, 500); // Time to complete the fade-out transition
    }, 4000); // Change items every 5 seconds

    return () => clearInterval(interval);
  }, [dashboards.length]);

  const currentDashboards = dashboards.slice(currentIndex, currentIndex + 4);

  return (
    <div
      className='flex w-full justify-evenly gap-y-12 flex-wrap py-12'
      style={{
        background: colors.tertiary.gradient,
        boxShadow: "0px 3px 15px #00000033",
      }}
    >
      {currentDashboards.map((data, index) => (
        <div
          key={index}
          className={`transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          } ${index >= 4 ? "mt-4" : ""}`}
          style={{
            width: 235,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
            borderRadius: "20px",
            transitionDelay: `${index * 0.1}s`,
          }}
        >
          <div style={{ width: 56, height: 56, position: "relative" }}>
            <img src={data.DashBoardImg} alt={`dashboard-${index}`} />
          </div>

          <p
            style={{
              flex: "1 0 0",
              alignSelf: "stretch",
              textAlign: "center",
              color: colors.primary.light,
              fontSize: "1.15rem",
              fontWeight: 500,
              fontFamily: "lato",
              wordWrap: "break-word",
            }}
          >
            {data.DashBoardText}
          </p>
          <h1
            style={{
              textAlign: "center",
              color: colors.text.dark,
              fontSize: "1.5rem",
              fontWeight: 700,
              fontFamily: "montserrat",
              wordWrap: "break-word",
            }}
          >
            {data.DashBoardTotal}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
