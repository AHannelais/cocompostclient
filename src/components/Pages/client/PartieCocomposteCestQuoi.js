import React from 'react'
import poulesVille from '../../../images/poulesVille.jpg'
import poulesPleinAir from '../../../images/poulesPleinAir.png'
import pouleAndComposte from '../../../images/pouleAndComposte.jpg'
import { Title, TextAndImage, Text } from './styledComponents'

const CocomposteCestQuoi = () => {
  return (
    <>
      <div className='container'>
        <Title>Cocomposte C'est Quoi ? </Title>
        <TextAndImage>
          <div>
            <h4>Objectif</h4>
            <p>
              Cocomposte est une association qui se donne pour mission, à
              travers l'installation de poulaillers dans les jardins publics des
              grandes villes
            </p>
          </div>

          <img src={poulesVille} alt='des poules dans la ville' />
        </TextAndImage>
        <TextAndImage>
          <img src={poulesPleinAir} alt='des poules en plein air' />
          <div>
            <h4>Environnement</h4>
            <p>
              Inciter les citoyens à entrer dans une démarche de réduction des
              déchets en leur offrant des oeufs frais issus des poules de leur
              quartier, en échange de leurs déchets alimentaires compostables.
            </p>
          </div>
        </TextAndImage>
        <Text>
          <h4>Condition animale</h4>
          <p>
            Sensibiliser les populations à la cause et au bien être animal en
            leur proposant de devenir des consommateurs plus responsables. Nos
            poules sont toutes issues d'élevages intensifs, et ont échappé de
            justesse à l'abattoir car considérées comme plus suffisamment
            rentables par les producteurs. Il s'agit de montrer aux citoyens
            pourquoi il est important de consommer, à minima, des produits issus
            de poules élevées en plein air et que le bien être animal n'est pas
            à négliger.
          </p>
        </Text>

        <TextAndImage>
          <div>
            <h4>Rencontres</h4>
            <p>
              Promouvoir le lien social en faisant des poulaillers un lieu de
              rencontre et d'échange. Notre projet a également pour volonté
              d'impliquer des associations d'insertion professionnelle et
              sociale, de sa conception à sa gestion en passant par son
              installation.
            </p>
            <h4>Pédagogie</h4>
            <p>
              Intégrer davantage de nature en ville et informer les populations
              aux enjeux du développement durable, de la transitions énergétique
              et de la préservation des ressources à travers un parcours
              pédagogique adossé aux poulaillers.
            </p>
          </div>

          <img src={pouleAndComposte} alt='des poules en plein air' />
        </TextAndImage>
      </div>
    </>
  )
}
export default CocomposteCestQuoi
