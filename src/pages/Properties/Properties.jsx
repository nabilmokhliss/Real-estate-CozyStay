import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Properties.css";
import { Link } from "react-router-dom";

export default function Proprieties() {
  return (
    <>
      <Header />
      <section className="innerWidth paddings">
        <div className="primaryText">
          <h1>Trouvez votre Villa ou Appartement de rêve</h1>
          <h3 className="orangeText">
            Choisissez le type de logement qui vous convient
          </h3>
        </div>
        <div className="flexCenter">
          {/* left */}
          <Link to="/properties/villa">
            <div>
              <div className="container-card">
                <img
                  src="./maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite.jpg"
                  alt=""
                />
                <div className="overlay">
                  <div className="content">
                    <h1>Villa</h1>
                    <p>Des villa comfy et élégantes</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* right */}
          <Link to="/properties/appartement">
            <div>
              <div className="container-card">
                <img src="./paysage-analogique-ville-batiments.jpg" alt="" />
                <div className="overlay">
                  <div className="content">
                    <h1>Appartement</h1>
                    <p>Des appartements modernes et luxueux</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="paddings proper-parag">
          Sur CozyStay, nous comprenons que chaque personne a des préférences de
          vie différentes. C'est pourquoi nous offrons une variété de choix pour
          répondre à vos besoins spécifiques. Que vous préfériez l'intimité,
          l'espace et les commodités d'une villa ou la praticité, la gestion
          sans tracas et l'accès à des équipements partagés dans un appartement,
          nous avons la solution idéale pour vous. Explorez notre sélection de
          villas élégantes pour profiter d'un chez-vous spacieux, ou découvrez
          nos appartements modernes pour une expérience de vie urbaine
          exceptionnelle. Quel que soit votre choix, notre objectif est de vous
          offrir un lieu de résidence qui correspond parfaitement à votre style
          de vie et à vos préférences. Découvrez dès maintenant les deux options
          et trouvez votre prochaine destination.
        </div>
      </section>

      <Footer />
    </>
  );
}
