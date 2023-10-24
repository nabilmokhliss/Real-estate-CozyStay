import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import "./About.css";

const About = () => {
  return (
    <>
      <Header />
      {/* First */}
      <section className="about-bg">
        <div className="innerWidth paddings">
        <h2 className="primaryText paddings title-abt">
          À Propos de CozyStay
        </h2>
        <div className="  flexCenter about-c">
          {/* left side */}

          <div className="flexColStart left-a">
            <div>
              <h4 className="orangeText">Notre histoire</h4>
              <p>
                Fondé en 2023, COZYSTAY est fier de jouer un rôle essentiel dans
                la recherche et la location de biens immobiliers de qualité pour
                nos clients. Notre plateforme de l'immobilier est dévouée à vous
                aider à trouver la maison ou l'appartement de vos rêves, que ce
                soit pour une courte durée ou une location à long terme.
              </p>
            </div>
          </div>

          {/* right side */}
          <div className="flexCenter right-a">
            <div className="image-co">
              <img src="./r1.png" alt="" />
            </div>
          </div>
        </div>

        {/* Second */}
        <div className=" flexCenter about-c">
          {/* left side */}
          <div className="flexCenter right-a">
            <div className="image-co">
              <img src="./r2.png" alt="" />
            </div>
          </div>

          {/* right side */}
          <div className="flexColStart left-a">
            <div>
              <h4 className="orangeText">Notre histoire</h4>
              <p>
                Fondé en 2023, COZYSTAY est fier de jouer un rôle essentiel dans
                la recherche et la location de biens immobiliers de qualité pour
                nos clients. Notre plateforme de l'immobilier est dévouée à vous
                aider à trouver la maison ou l'appartement de vos rêves, que ce
                soit pour une courte durée ou une location à long terme.
              </p>
            </div>
          </div>
        </div>

        {/* Third */}
        <div className="  flexCenter about-c">
          {/* left side */}

          <div className="flexColStart left-a">
            <div>
              <h4 className="orangeText">Notre histoire</h4>
              <p>
                Fondé en 2023, COZYSTAY est fier de jouer un rôle essentiel dans
                la recherche et la location de biens immobiliers de qualité pour
                nos clients. Notre plateforme de l'immobilier est dévouée à vous
                aider à trouver la maison ou l'appartement de vos rêves, que ce
                soit pour une courte durée ou une location à long terme.
              </p>
            </div>
          </div>

          {/* right side */}
          <div className="flexCenter right-a">
            <div className="image-co">
              <img src="./r1.png" alt="" />
            </div>
          </div>
        </div>

        {/* General */}
        <div>
          <div className="left-a">
            <div>
              <h4 className="orangeText">Nos valeur</h4>

              <span>
                Chez COZYSTAY, nous sommes guidés par des valeurs fondamentales
                qui définissent notre approche envers nos clients et notre
                travail :
              </span>
              
              <ul>
                <li>
                  Prix Concurrentiels : Nous proposons des prix concurrentiels
                  pour vous garantir le meilleur rapport qualité-prix.
                  N’attendez plus, découvrez le Maroc avec nous.
                </li>
                <li>
                  Qualité Des Produit : Notre plateforme se distingue par son
                  engagement indéfectible envers la qualité. Chaque propriété
                  que nous proposons est soigneusement sélectionnée pour
                  garantir une expérience de location exceptionnelle, alliant
                  propreté, sécurité et confort.
                </li>
                <li>
                  Flexibilité et Adaptabilité : Que vous recherchiez une
                  location à court terme, à long terme, ou des options sur
                  mesure, notre plateforme répondera à vos besoins changeants et
                  de rendre votre expérience de location aussi souple que
                  possible.
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
