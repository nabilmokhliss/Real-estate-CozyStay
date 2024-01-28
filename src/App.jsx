import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Properties from "./pages/Properties/Properties";
import About from "./pages/AboutUs/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Appartement from "./pages/Appartement/Appartement";
import Villa from "./pages/Villa/Villa";
import PropertiesDetails from "./pages/PropertiesDetails/PropertiesDetails";
import Profile from "./pages/Profile/Profile";
import Overview from "./components/SideBarProfile/SubMenuPage/Overview";
import {
  Reports,
  ReportsOne,
  ReportsThree,
  ReportsTwo,
} from "./components/SideBarProfile/SubMenuPage/Report";
import Team from "./components/SideBarProfile/SubMenuPage/Team";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/villa" element={<Villa />} />
      <Route path="/properties/appartement" element={<Appartement />} />
      <Route path="/properties/villa/:id" element={<PropertiesDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/signup" element={<Registration />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      {/* Routes de la section du profil */}
      <Route path="/profile/*" element={<Profile />}>
        <Route path="overview" element={<Overview />} />
        <Route path="reports" element={<Reports />} />
        <Route path="reports/reports1" element={<ReportsOne />} />
        <Route path="reports/reports2" element={<ReportsTwo />} />
        <Route path="reports/reports3" element={<ReportsThree />} />
        <Route path="team" element={<Team />} />
      </Route>
    </Routes>
  );
}

export default App;
