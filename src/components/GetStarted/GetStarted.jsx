import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Réserver Vos Vacances Avec CozyStay</span>
          <span className="secondaryText">
            Inscriver vous et trouver votre logement préferé avec les meilleurs prix sur le marché
            <br />
            Trouvez votre logement
          </span>

          <button className="button">
            <a href="mailto:nabilmokhliss97@gmail.com">C'est Parti !</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
