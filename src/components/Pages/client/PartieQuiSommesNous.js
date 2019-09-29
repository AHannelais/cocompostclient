import React from 'react'

import marie from '../../../images/marie.png'
import jade from '../../../images/jade.png'
import justine from '../../../images/justine.png'
import marlene from '../../../images/marlene.png'
import pascal from '../../../images/pascal.png'
import { Title, TextAndImage, Text } from './styledComponents'

const CocomposteCestQuoi = () => {
  return (
    <>
      <div className='container'>
        <Title>Qui Sommes Nous? </Title>
        <Text>
          <h4>Une Belle Equipe</h4>
          <p>
            Cette thématique du développement durable, nous y avons été
            sensibilisés très tôt et nous sommes toujours intéressés à sa prise
            en compte au sein de l’agenda politique, ainsi qu’aux solutions
            envisageables pour aller plus loin dans les divers aspects que
            regroupe cette notion. En ce sens, la formation du Master que nous
            avons intégré nous a permis d’acquérir les compétences nécessaires à
            la construction d’une réflexion globale sur le changement de nos
            modèles de développement, plus soucieux de notre environnement et
            plus raisonnable dans l’utilisation des ressources naturelles.
            Sachant que la mise en œuvre de politiques territoriales de
            développement durable, nécessite de sensibiliser et communiquer avec
            les élus, agents, partenaires ainsi que les usagers
          </p>
        </Text>
        <TextAndImage>
          <div>
            <h4>Marie</h4>
            <p>
              Issue d’un petit village perdu en haut de la montagne, fan de
              sports de pleine nature et bonne vivante. Préoccupée par
              l’intégration de la nature en ville et le partage
            </p>
          </div>

          <img src={marie} alt='Marie' />
        </TextAndImage>
        <TextAndImage>
          <img src={jade} alt='Jade' />
          <div>
            <h4>Jade</h4>
            <p>
              Jeune montpelliéraine à la main verte, aimerait s’assurer que nos
              espaces urbains demeurent vivables et continuent de nous rendre
              plus heureux, plus ingénieux et en meilleure santé. Non pas
              uniquement parce que notre environnement nous influence tout
              autant que nous l’influençons, mais parce que chaque personne a le
              droit à une société durable.
            </p>
          </div>
        </TextAndImage>
        <TextAndImage>
          <div>
            <h4>Justine</h4>
            <p>
              Née à la campagne, étudiante en ville. Ramasser les œufs au
              poulailler, nourrir les poules font partie de mes souvenirs
              d’enfance. Garantir à tous cet accès aux espaces verts et réussir
              à intégrer des pratiques saines répandues en campagne, à la ville
              font partie de mes convictions.
            </p>
          </div>

          <img src={justine} alt='Justine' />
        </TextAndImage>
        <TextAndImage>
          <img src={marlene} alt='Marlène' />
          <div>
            <h4>Marlène</h4>
            <p>
              Etudiante toulousaine originaire de Fronton, village avec une
              identité agricole et viticole forte, soucieuse de valoriser les
              producteurs locaux et les circuits courts ainsi qu’intégrer
              pleinement la nature dans notre belle ville rose.
            </p>
          </div>
        </TextAndImage>
        <TextAndImage>
          <div>
            <h4>Pascal</h4>
            <p>
              Enfant de la ruralité, j’aime à repenser la ville à travers
              l’innovation sociale. La collaboration, l’échange et
              l’intelligence collective sont mes moteurs.
            </p>
          </div>

          <img src={pascal} alt='Pascal' />
        </TextAndImage>
      </div>
    </>
  )
}
export default CocomposteCestQuoi
