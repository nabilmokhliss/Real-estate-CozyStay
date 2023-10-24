import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactForm from "./ContactForm";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      <section className="img-bg">
        <div className="innerWidth paddings flexCenter">
          <div className="left-a">
            <h1>
              Besoin d'aide ? <br />
              Ou de partager votre avis ? <br />
              N'héitez pas de nous envoyer un msg
            </h1>
          </div>
          <div className="right-a">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
