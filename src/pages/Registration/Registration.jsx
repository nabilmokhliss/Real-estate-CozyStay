import React from "react";
import "./Registration.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <Header />
      <div className="body-regist">
        <div className="container">
          <div className="title">Inscription</div>
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Nom</span>
                <input type="text" placeholder="Entrez votre nom" required />
              </div>
              <div className="input-box">
                <span className="details">Prénom</span>
                <input type="text" placeholder="Entrez votre prénom" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Entrez votre Email" required />
              </div>
              <div className="input-box">
                <span className="details">Téléphone</span>
                <input type="tel" placeholder="Entrez votre Phone" required />
              </div>
              <div className="input-box">
                <span className="details">Pays</span>
                <input type="text" placeholder="Entrez votre Pays" required />
              </div>
              <div className="input-box">
                <span className="details">Ville</span>
                <input type="text" placeholder="Entrez votre Ville" required />
              </div>
              <div className="input-box">
                <span className="details">Mot de passe</span>
                <input
                  type="text"
                  placeholder="Entrez votre Mot de passe"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Password confirmation</span>
                <input
                  type="text"
                  placeholder="Confirmer votre Mot de passe"
                  required
                />
              </div>
            </div>

            <div className="button">
              <input type="submit" value="Register" />
            </div>
            <div className="signup_link">
              Vous avez déjà un compte? <Link to="/signin">Se connecter</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
