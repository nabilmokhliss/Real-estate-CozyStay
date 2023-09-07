import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logoCozy.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <Link to="/">Acceuil</Link>
          <Link to="/proprieties" >Nos propriétés</Link>
          <Link to="/about">A propos</Link>
          <Link to="/contact">Contact</Link>
          <button className="button">
            <Link to="/signup">Inscription</Link>
          </button>
          <button className="button">
            <Link to="/signin">Connexion</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
