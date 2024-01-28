import React from "react";
import { Link } from "react-router-dom";
import './Overview.css';

const Overview = () => {
  return (
    <div className="home">
      <div className="">
        <div className="container">
          {/* banière profile */}
          <div className="flexStart prof-banner paddings">
            <div className="prof-pic">
              <img src="../../../../public/c1.jpg" alt="" />
            </div>
            <div className="prof-title">
              <h2>Bonjour,</h2>
              <h2> Nabil MOKHLISS</h2>
            </div>
          </div>
          <h1>Overview</h1>
          <div className="title">Mes information personnelle</div>
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Nom</span>
                <input type="text" placeholder="Mokhliss" required disabled />
              </div>
              <div className="input-box">
                <span className="details">Prénom</span>
                <input type="text" placeholder="Nabil" required disabled />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="nabilmokhliss@gmail.com"
                  required
                  disabled
                />
              </div>
              <div className="input-box">
                <span className="details">Téléphone</span>
                <input type="tel" placeholder="0708178817" required disabled />
              </div>
              <div className="input-box">
                <span className="details">Pays</span>
                <input type="text" placeholder="Maroc" required disabled />
              </div>
              <div className="input-box">
                <span className="details">Ville</span>
                <input type="text" placeholder="Casablanca" required disabled />
              </div>
            </div>

            <div className="button">
              <input type="submit" value="Modifier" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Overview;
