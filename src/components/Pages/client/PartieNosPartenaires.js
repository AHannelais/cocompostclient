import React from "react";
import { Title, TitleH4, TextAndImage, Text } from "./styledComponents";
import laCloche from "../../../images/lacloche.png";
import georgeetdragon from "../../../images/george&dragon.png";
import georgeetdragoncocomposte from "../../../images/cocompostegeorgeetdragon.jpg";
import faculteadmin1 from "../../../images/faculteadmin1.jpg";
import faculteadmin2 from "../../../images/faculteadmin2.jpg";
import mairietoulouse from "../../../images/mairietoulouse.png";
import humusetassocies from "../../../images/humus&associes.png";
import mariesouvestre from "../../../images/mariesouvestre.png";

const CocomposteCestQuoi = () => {
  return (
    <>
      <div className="container">
        <Title>Nos intervenants sur le Projet </Title>
        <Text>
          <div>
            <h4>L’ESAT Château Blanc </h4>
            <p>
              L’ESAT Château Blanc est à la fois un établissement médico-social
              et une entreprise dont la mission consiste à employer des
              travailleurs handicapés afin de leur permettre d’exercer une
              activité professionnelle et de maintenir un lien social. Une
              équipe de travailleurs interviendra sur le projet pour entretenir
              le poulailler, prendre soin des poules et accueillir le public
              lors de la tenue de permanence. Nous les remercions pour tout
              l’intérêt que l’équipe de l’ESAT porte à notre projet, leur
              confiance et pour leur investissement.
            </p>
          </div>
        </Text>
        <TextAndImage col="col">
          <img src={laCloche} alt="La Cloche" />
          <div>
            <h4>L’Association la Cloche </h4>
            <p>
              La Cloche est une association qui développe des programmes visant
              à changer le regard porté sur le monde de la rue et réhabiliter
              l’image des plus démunis, en encourageant le faire ensemble entre
              voisins avec ou sans domicile.
              <p>
                Des personnes sans domicile ont ainsi accepté de nous apporter
                leur aide lors de la construction et l’installation du futur
                poulailler mais également d’intervenir lors de l’organisation
                d’évènements. Un grand merci pour leur aide si précieuse, leur
                volonté et leur bonne humeur!
              </p>
            </p>
          </div>
        </TextAndImage>
        <Title>Nos partenaires financiers </Title>
        <TitleH4>George & Dragon</TitleH4>
        <TextAndImage>
          <img src={georgeetdragon} alt="george et dragon" />

          <img
            src={georgeetdragoncocomposte}
            alt="cocomposte chez george et dragon"
          />
        </TextAndImage>
        <TitleH4>
          Faculté d’administration et de communitation de l’Université Toulouse
          1 Capitole
        </TitleH4>

        <TextAndImage>
          <img
            src={faculteadmin1}
            alt="cocomposte chez la faculté d'administration"
          />

          <img src={faculteadmin2} alt="faculté d'administration de toulouse" />
        </TextAndImage>
        <Title>Nos partenaires techniques </Title>
        <TextAndImage col="col">
          <img src={mairietoulouse} alt="Mairie de Toulouse" />
          <div>
            <h4>Mairie de Toulouse </h4>
            <p>
              La Mairie de Toulouse nous accueille dans ces jardins pour que nos
              poulettes puissent bénéficier du meilleur environnement qui soit
              en centre ville.
            </p>
          </div>
        </TextAndImage>
        <TextAndImage>
          <div>
            <h4>Humus & Associés </h4>
            <p>
              Humus & Associés nous accompagnent et nous apportent toutes les
              connaissances et compétences dont nous allons avoir besoin en
              termes de biodéchets et de compost pour pouvoir mener à bien notre
              projet.
            </p>
          </div>
          <img src={humusetassocies} alt="Humus et Assouciés" />
        </TextAndImage>
        <TextAndImage col="col">
          <img src={mariesouvestre} alt="Marie Souvestre" />
          <div>
            <h4>Marie Souvestre  </h4>
            <p>
              Marie est doctorante à l’école vétérinaire de Toulouse. Son savoir
              et son expertise concernant le soin animalier, les normes
              sanitaires, l’aménagement des lieux et la récole des œufs nous
              sont précieux.
            </p>
          </div>
        </TextAndImage>
      </div>
    </>
  );
};
export default CocomposteCestQuoi;
