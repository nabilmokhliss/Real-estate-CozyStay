import React from "react";
import { useParams } from "react-router-dom";
import "./PropertiesDetails.css"; // Assurez-vous d'importer votre fichier CSS
import data from "../../utils/slider.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { FaBed, FaShower } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";

const PropertiesDetails = () => {
  const { id } = useParams(); // Obtenez l'ID de la résidence à partir des paramètres d'URL

  // Recherchez la résidence correspondante dans les données en fonction de l'ID
  const selectedResidence = data.find(
    (residence) => residence.id === parseInt(id)
  );

  if (!selectedResidence) {
    return <div>Résidence non trouvée</div>;
  }

  const options = Array.from({ length: 11 }, (_, i) => (
    <option key={i} value={i}>
      {i}
    </option>
  ));

  return (
    <>
      <Header />
      <section className="paddings innerWidth ">
        <div className="flexCenter">
          {/* Left side */}
          <div className="flexColStart left-a">
            <img
              src={selectedResidence.image}
              alt={selectedResidence.name}
              style={{ width: "700px", height: "500px" }}
            />
          </div>

          {/* Right side */}
          <div className="flexColStartr right-a">
            <h2 className="orangeText">{selectedResidence.name}</h2>
            <p className="primaryText">Prix : {selectedResidence.price} €</p>
            <p className="">Adresse : {selectedResidence.detail}</p>

            <form className="resForm" action="">
              <div className="resFormDiv">
                <span>Nombre d'adultes </span>
                <select>{options}</select>
              </div>
              <div className="resFormDiv">
                <span>Nombre d'enfants </span>
                <select>{options}</select>
              </div>

              <div className="icoDetails">
                <span>
                  <FaShower size={30} />
                  {selectedResidence.shower}
                </span>
                <span>
                  <MdMeetingRoom size={30} />
                  {selectedResidence.room}
                </span>
                <span>
                  <FaBed size={30} />
                  {selectedResidence.bed}
                </span>
              </div>
              <div className="resFormDiv">
                <button className="basicBtn ReserveBtn">Réserver</button>
              </div>
            </form>
          </div>

          {/* Ajoutez d'autres détails spécifiques de la résidence en fonction de vos données */}
        </div>
        <div className="paddings">
          <div className="primaryText">Description :</div>
          <p className="SecondaryText">
            Adresse : {selectedResidence.description}
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PropertiesDetails;
