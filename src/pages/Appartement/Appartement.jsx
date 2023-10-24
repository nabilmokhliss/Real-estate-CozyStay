import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Appartement.css"
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import data from "../../utils/slider.json"

const Appartement = () => {
  return (
    <>
    {/* changer properties-container par villa */}
      <Header />
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar />
        <div>
        <div className="residence-list paddings innerWidth flexCenterWrap"> {/* residence-list chat gpt class */}
          {data.map((card, i) => (
            <PropertyCard key={i} card={card} />
          ))}
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Appartement;