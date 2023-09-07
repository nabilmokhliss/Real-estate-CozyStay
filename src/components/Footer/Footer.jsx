import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logoCozy.png" alt="" width={120} />

          <span className="secondaryText">
          Notre vision est de faire en sorte que tout le monde <br />
          trouve le meilleur endroit où passer ses vacances
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Informations</span>
          <span className="secondaryText">Contactez nous</span>

          <div className="flexCenter f-menu">
            <span>Propriétés</span>
            <span>Services</span>
            <span>Nous Contacter</span>
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
