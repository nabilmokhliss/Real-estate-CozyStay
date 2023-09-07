import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Proprieties from "./pages/Proprieties/Proprieties";
import About from "./pages/AboutUs/About";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proprieties" element={<Proprieties />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes> */}
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
