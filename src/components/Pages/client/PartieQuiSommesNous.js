import React from "react";

import marie from "../../../images/marie.png";
import justine from "../../../images/justine.jpg";
import marlene from "../../../images/marlene.jpg";
import { Title, TextAndImage, Text } from "./styledComponents";

const CocomposteCestQuoi = () => {
  return (
    <>
      <div className="container">
        <Title>Qui Sommes Nous? </Title>
        <Text>
          <h4>Une Belle Equipe</h4>
          <p>
            Cette thématique du développement durable, nous y avons été
            sensibilisés très tôt et nous sommes toujours intéressés à sa prise
            en compte au sein de l’agenda politique, ainsi qu’aux solutions
            envisageables pour aller plus loin dans les divers aspects que
            regroupe cette notion. En ce sens, la formation du Master que nous
            avons intégrée nous a permis d’acquérir les compétences nécessaires
            à la construction d’une réflexion globale sur le changement de nos
            modèles de développement, plus soucieux de notre environnement et
            plus raisonnable dans l’utilisation des ressources naturelles.
            Sachant que la mise en œuvre de politiques territoriales de
            développement durable, nécessite de sensibiliser et communiquer avec
            les élus, agents, partenaires ainsi que les usagers.
          </p>
        </Text>
        <TextAndImage>
          <div>
            <h4>Marie</h4>
            <p>
              Si vous croisez Marie au George & Dragon, Toulouse, elle sera
              sûrement tout juste en train de rentrer du dernier endroit qu'elle
              a visité, que ce soit en France ou à l'étranger. C'est sans doute
              parce que Marie a toujours vécu dans des milieux préservés, au
              cœur de la nature et loin du brouhaha de la ville qu'elle veut, à
              travers Cocomposte, offrir une bouffée d'air frais aux citadins.
              Engagée dans la défense de l'environnement et la protection des
              animaux, il était donc naturel pour elle de se lancer, avec ses
              camarades, dans un tel projet : qui à la fois vise à
              réduire/valoriser les déchets ménager et est sensible à la cause
              animale.
            </p>
          </div>

          <img src={marie} alt="Marie" />
        </TextAndImage>

        <TextAndImage col="col">
          <img src={justine} alt="Justine" />
          <div>
            <h4>Justine</h4>
            <p>
              Si tu aperçois Justine, elle sera sûrement entrain de bavarder
              comme toujours. Elle saura vous dire combien elle est heureuse de
              vivre depuis maintenant 5 ans dans sa belle ville rose. Partie
              d’un village de campagne dans les Deux-Sèvres pour rejoindre
              Toulouse afin d’y faire ses études, elle sait aujourd’hui la
              frontière qu’il existe entre une vie citadine et celle d’une
              enfant à la campagne. Nostalgique de cette période, c’est à
              travers le projet Cocomposte qu’elle tente de concilier ces deux
              univers. <br />
              Elle est trésorière de l’association.
            </p>
          </div>
        </TextAndImage>
        <TextAndImage>
          <div>
            <h4>Marlène</h4>
            <p>
              Si vous croisez Marlène, elle vous parlera fièrement de sa double
              culture franco-espagnole, de Toulouse qui est devenu son quotidien
              depuis quelques années et auquel elle ne se lassera probablement
              jamais! Mais elle vous racontera surtout son enfance à la
              campagne! Elle rêve d’offrir aux toulousains, la nature qu’elle
              adore retrouver les week-ends chez ses parents!! Pour cela,
              Cocomposte lui semble être l’opportunité parfaite pour intégrer un
              peu plus de nature dans cette belle ville rose. C’est pourquoi
              elle s’implique à fond dans ce projet!! <br />
              Elle est trésorière de l’association.
            </p>
          </div>
          <img src={marlene} alt="Marlène" />
        </TextAndImage>
        <Title>Leur Coups de Pouce</Title>
        <TextAndImage>
          <div>
            <h4>Laura</h4>
            <p>Communication et Evénementiel</p>
          </div>
          <div>
            <h4>Antoine</h4>
            <p>Conception du site Internet</p>
          </div>
          <div>
            <h4>Nicolas</h4>
            <p>Conception des poulaillers et Réflexions techniques</p>
          </div>
        </TextAndImage>
        <TextAndImage>
          <div>
            <h4>Mathilde</h4>
            <p>Aide juridique</p>
          </div>
          <div>
            <h4>Michael</h4>
            <p>Création du Logo</p>
          </div>
          <div>
            <h4>Alexandre</h4>
            <p>Création du Logo</p>
          </div>
        </TextAndImage>
      </div>
    </>
  );
};
export default CocomposteCestQuoi;
