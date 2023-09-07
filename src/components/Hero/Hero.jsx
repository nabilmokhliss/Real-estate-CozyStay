import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* LEFT SIDE */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Des Logement  <br />
              D'exception Pour Un <br />
              Séjour De Rêve
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
            Trouvez une variété de logements qui vous conviennent très facilement
            </span>
            <span className="secondaryText">Oubliez toutes les difficultés pour trouver une résidence pour vous</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Ex : Marrakech, Fes .."/>
            <button className="button">Chercher</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={90} end={150} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Logements</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={750} end={800} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Clients satisfaits</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={10} />
                <span>+</span>
              </span>
              <span className="secondaryText">Ville au Maroc</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./soft.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
