import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { getPublicAbsoluteUrl } from "../../utils/helper/PathHelper";

const Header = () => {
  // const logo = getPublicAbsoluteUrl("/logoCozy.png");
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="../../../public/logoCozy.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <Link to="/">Acceuil</Link>
          <Link to="/properties">Nos propriétés</Link>
          <Link to="/about">A propos</Link>
          <Link to="/contact">Contact</Link>
          <button className="basicBtn">
            <Link to="/signup">Inscription</Link>
          </button>
          <button className="basicBtn">
            <Link to="/signin">Connexion</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
