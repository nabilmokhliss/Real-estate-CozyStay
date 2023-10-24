import React from "react";
import "./ContactUs.css";

const ContactForm = () => {
  return (
    <div>
      <h2 className="orangeText">CONTACTEZ NOUS</h2>
      <span className="subtitle">Veuillez remplir ce formulaire</span>
      <form action="#">
        <div className="user-details">
          <div className="input-form">
            <span className="details">Nom & Prénom</span>
            <input type="text" placeholder="Entrez votre nom" required />
          </div>
          <div className="input-form">
            <span className="details">Email</span>
            <input type="text" placeholder="Entrez votre Email" required />
          </div>
          <div className="input-form">
            <span className="details">Objet</span>
            <input type="text" placeholder="Entrez votre prénom" required />
          </div>
          <div className="input-form">
            <span className="details">Message</span>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Saisissez votre message ici ..."
            ></textarea>
          </div>
          <div className="button">
            <input type="submit" value="Envoyer Voter message" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
