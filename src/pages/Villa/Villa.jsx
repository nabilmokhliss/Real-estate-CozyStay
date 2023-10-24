import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Villa.css";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import data from "../../utils/slider.json";

const Villa = () => {
  return (
    <>
      {/* changer properties-container par villa */}
      <Header />
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar />
        <div>
          <div className="residence-list paddings innerWidth flexCenterWrap">
            {/* residence-list chat gpt class */}
            {data.map((card, i) => (
              <Link to={`/properties/villa/${card.id}`} key={i}>
                <PropertyCard card={card} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Villa;
