import React from "react";
import Header from "../../components/Header/Header";
import "./Login.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <>
      <Header />
      <div className="body-signup">
        <div className="center">
          <h1>Se Connecter</h1>
          <form action="" method="post">
            <div className="txt_field">
              <input type="text" required />
              <span></span>
              <label htmlFor="">Email</label>
            </div>
            <div className="txt_field">
              <input type="password" required />
              <span></span>
              <label htmlFor="">Mot de passe</label>
            </div>
            <div className="pass">Mot de passe oublié?</div>
            <input type="submit" value="Connexion" />
            <div className="signup_link">
              Vous n'avez pas un compte? <Link to="/signup">Créez un compte</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
