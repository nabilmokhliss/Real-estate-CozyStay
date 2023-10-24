import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Properties from "./pages/Properties/Properties";
import About from "./pages/AboutUs/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Appartement from "./pages/Appartement/Appartement";
import Villa from "./pages/Villa/Villa";
import PropertiesDetails from "./pages/PropertiesDetails/PropertiesDetails";

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
    </Routes>
  );
}

export default App;
