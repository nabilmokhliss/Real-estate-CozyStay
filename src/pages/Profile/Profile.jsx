import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBarProfile/Sidebar";
import Footer from "../../components/Footer/Footer";
import { Routes, Route, Outlet } from "react-router-dom";
import Overview from "../../components/SideBarProfile/SubMenuPage/Overview";
import {
  Reports,
  ReportsOne,
  ReportsThree,
  ReportsTwo,
} from "../../components/SideBarProfile/SubMenuPage/Report";
import Team from "../../components/SideBarProfile/SubMenuPage/Team";
import './Profile.css'

const Profile = () => {
  return (
    <>
      <Header />
      <section>
        <div className="paddings innerWidth profile-container">
          <div className="sidebar-container">
            <Sidebar />
          </div>
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="overview" element={<Overview />} />
              <Route path="reports" element={<Reports />} />
              <Route path="reports/reports1" element={<ReportsOne />} />
              <Route path="reports/reports2" element={<ReportsTwo />} />
              <Route path="reports/reports3" element={<ReportsThree />} />
              <Route path="team" element={<Team />} />
            </Routes>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
