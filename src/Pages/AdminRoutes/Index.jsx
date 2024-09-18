/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../AdminPanelPages/AdminDashboard/Index";
import Users from "../AdminPanelPages/Users/Index";
import AdminPanel from "../../Components/Layout/AdminPanel/index";
import Campaigns from "../AdminPanelPages/Campaigns/Index";
import CampaignCategory from "../AdminPanelPages/CampaignCategory/Index";
import Expenses from "../AdminPanelPages/Expenses/Index";
import Statistics from "../AdminPanelPages/Statistics/Index";
import Donations from "../AdminPanelPages/Donations/Index";
import Gallery from "../AdminPanelPages/Gallery/Index";
import EditGallery from "../AdminPanelPages/Gallery/EditGallery";
import EditUser from "../AdminPanelPages/Users/EditUser";
import EditCategory from "../AdminPanelPages/CampaignCategory/EditCategory";
import EditExpenses from "../AdminPanelPages/Expenses/EditExpenses";
import EditStats from "../AdminPanelPages/Statistics/EditStats";
import EditCampaign from "../AdminPanelPages/Campaigns/EditCampaign";
import PageDoesNotExists from "../PageDoesNotExists/NotFoundPage";
function Index() {
  return (
    <Routes>
      <Route
        path='/Dashboard'
        element={
          <AdminPanel>
            <AdminDashboard />
          </AdminPanel>
        }
      />

      <Route
        path='/Users'
        element={
          <AdminPanel>
            <Users />
          </AdminPanel>
        }
      />
      <Route
        path='/Users/Edit'
        element={
          <AdminPanel>
            <EditUser />
          </AdminPanel>
        }
      />
      <Route
        path='/Campaigns'
        element={
          <AdminPanel>
            <Campaigns />
          </AdminPanel>
        }
      />
      <Route
        path='/Campaigns/Edit'
        element={
          <AdminPanel>
            <EditCampaign />
          </AdminPanel>
        }
      />
      <Route
        path='/Campaigns-Category'
        element={
          <AdminPanel>
            <CampaignCategory />
          </AdminPanel>
        }
      />
      <Route
        path='/Campaigns-Category/Edit'
        element={
          <AdminPanel>
            <EditCategory />
          </AdminPanel>
        }
      />
      <Route
        path='/Expenses'
        element={
          <AdminPanel>
            <Expenses />
          </AdminPanel>
        }
      />
      <Route
        path='/Expenses/Edit'
        element={
          <AdminPanel>
            <EditExpenses />
          </AdminPanel>
        }
      />
      <Route
        path='/Statistics'
        element={
          <AdminPanel>
            <Statistics />
          </AdminPanel>
        }
      />
      <Route
        path='/Statistics/Edit'
        element={
          <AdminPanel>
            <EditStats />
          </AdminPanel>
        }
      />
      <Route
        path='/Donations'
        element={
          <AdminPanel>
            <Donations />
          </AdminPanel>
        }
      />
      <Route
        path='/Gallery'
        element={
          <AdminPanel>
            <Gallery />
          </AdminPanel>
        }
      />
      <Route
        path='/Gallery/Edit'
        element={
          <AdminPanel>
            <EditGallery />
          </AdminPanel>
        }
      />
      <Route path='*' element={<PageDoesNotExists />} />
    </Routes>
  );
}

export default Index;
