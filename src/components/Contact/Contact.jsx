import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Notre Contact</span>
          <span className="primaryText">Facile De Nous Contacter</span>
          <span className="secondaryText">
            Nous sommes toujours prêts à vous aider en vous fournissant le meilleur service. Nous pensons qu'un bon endroit où vivre peut rendre votre vie meilleure.
          </span>

          <div className="flexStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Service client</span>
                    <span className="secondaryText">Contactez directement notre service client</span>
                  </div>
                </div>
                <div className="flexCenter basicBtn">Appellez maintenant</div>
              </div>

              {/* second mode */}
              {/* <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">06243537271</span>
                  </div>
                </div>
                <div className="flexCenter basicBtn">Chat Now</div>
              </div> */}
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">Chattez direcement pour avoir une réponse</span>
                  </div>
                </div>
                <div className="flexCenter basicBtn">Envoyer un message</div>
              </div>

              {/* fourth mode */}
              {/* <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">06243537271</span>
                  </div>
                </div>
                <div className="flexCenter basicBtn">Message Now</div>
              </div> */}
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
