import React from "react";
import Header from "../../components/Header/Header";

const About = () => {
  return (
    <section>
      <div className="paddings innerWidth flexCenter">
        <Header />
        <div>
          <h2>À Propos de Notre Site de Location d'Immobilier</h2>
          <h4>Notre histoire</h4>
          <p>
            Fondé en 2023, COZYSTAY est fier de jouer un rôle essentiel dans la
            recherche et la location de biens immobiliers de qualité pour nos
            clients. Notre plateforme de l'immobilier est dévouée à vous aider à
            trouver la maison ou l'appartement de vos rêves, que ce soit pour
            une courte durée ou une location à long terme.
          </p>
        </div>

        {/* left side */}
        <div className="flexColStart">
          <h4>Notre mission</h4>
          <p>
            Notre mission sue COZYSTAY est de simplifier le processus de
            recherche et de location immobilière. Nous comprenons à quel point
            cela peut être stressant et chronophage, c'est pourquoi nous avons
            créé une plateforme conviviale et efficace pour vous aider à trouver
            rapidement et facilement votre prochain logement. Que vous cherchiez
            un appartement moderne en centre-ville, une maison spacieuse en
            banlieue, ou même une location de vacances, nous avons ce qu'il vous
            faut.
          </p>
        </div>

        {/* right side */}
        <div className="flexCenter">
          <div>
            <img src="./r1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
