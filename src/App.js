/** @format */

// App.js
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboustUs/Index";
import StatsAndExpense from "./Pages/StatsAndExpenses/Index";
import DepartmentsAndFacilities from "./Pages/Departments&Facilities/Index";
import OngoingCampaign from "./Pages/OngoingCampaign/Index";
import BoardOfManagement from "./Pages/BoardOfManagement/Index";
import Login from "./Pages/Login/Index";
import PrivacyPolicy from "./Pages/PrivacyPolicy/Index";
import RefundPolicy from "./Pages/RefundPolicy/Index";
import TermsAndCondition from "./Pages/TermsAndCondition/Index";
import ContactUs from "./Pages/ContactUs/Index";
import AdminRoutes from "./Pages/AdminRoutes/Index";
import AuthState from "./context/authContext/AuthState";
import PublicRoutes from "./utils/PublicRoutes";
import PrivateRoutes from "./utils/PrivateRoutes";
import CampaignByCategory from "./Pages/CampaignByCategory/Index";
import CampaignDetails from "./Pages/CampaignDetails/Index";
import Donate from "./Pages/Donate/Index";
import PageDoesNotExists from "./Pages/PageDoesNotExists/NotFoundPage";
function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <AuthState>
      <div className='main-container'>
        <ScrollToTop />

        <Routes>
          <Route
            path='/'
            element={
              <PublicRoutes>
                <Home />
              </PublicRoutes>
            }
          />
          <Route
            path='/about/Overview'
            element={
              <PublicRoutes>
                <AboutUs />
              </PublicRoutes>
            }
          />
          <Route
            path='/about/Departments&Facilities'
            element={<DepartmentsAndFacilities />}
          />
          <Route
            path='/about/Board-of-Management'
            element={<BoardOfManagement />}
          />
          <Route
            path='/account/Stats-And-Expense'
            element={<StatsAndExpense />}
          />
          <Route
            path='/account/Ongoing-Campaigns'
            element={<OngoingCampaign />}
          />
          <Route
            path='Campaign-By-Category/:title'
            element={<CampaignByCategory />}
          />
          <Route
            path='/Login'
            element={
              <PublicRoutes restricted>
                <Login />
              </PublicRoutes>
            }
          />
          <Route path='/Privacy-Policy' element={<PrivacyPolicy />} />
          <Route path='/Refund-Policy' element={<RefundPolicy />} />
          <Route
            path='/TermsAndCondition-Policy'
            element={<TermsAndCondition />}
          />
          <Route path='/Contact-Us' element={<ContactUs />} />
          <Route path='/Campaign-Details/:id' element={<CampaignDetails />} />
          <Route path='/Donate/:id' element={<Donate />} />

          <Route
            path='/Admin-Panel/*'
            element={
              <PrivateRoutes>
                <AdminRoutes />
              </PrivateRoutes>
            }
          />
          <Route path='*' element={<PageDoesNotExists />} />
        </Routes>
      </div>
    </AuthState>
  );
}

export default App;
