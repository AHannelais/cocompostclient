import React from 'react'
import Navbar from './Navbar'
import { ContentWrapper, Title, Text } from './styledComponents'
import Header from './Header'
import ContactSuggestion from './ContactsSuggestions'
import ShowImages from './ShowImages'
import ShowArticles from './ShowArticles'
class HomePage extends React.PureComponent {
  state = { width: null }

  updateHeight = () => {
    const w = window
    const d = document
    const documentElement = d.documentElement
    const body = d.getElementsByTagName('body')[0]
    const width =
      w.innerWidth || documentElement.clientWidth || body.clientWidth
    this.setState({ width })
  }
  renderContactSuggestion = () => {
    if (this.state.width < 951) {
      return <ContactSuggestion />
    }
  }
  componentWillMount = () => {
    this.updateHeight()
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.updateHeight)
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateHeight)
  }
  render () {
    return (
      <>
        <Header />

        <Navbar />
        <ContentWrapper>
          <div className='container '>
            <Title>Bienvenue</Title>
            <Text>
              <p>
                Bonjour à tous, Nous avons l'immense honneur de vous présenter
                notre projet Cocomposte, des poules et du compost dans vos
                quartiers !! Cocomposte est un projet pour les habitants des
                centres ville qui n'ont pas la place d'accueillir des poules
                pour avoir des oeufs ou de faire un compost.
              </p>
              <p>
                L'idée de participer au DEVELOPPEMENT DURABLE par la réduction
                des déchets et la promotion des activités locales en installant
                des poulaillers urbains à l'échelle des quartiers pour rétribuer
                le geste citoyen en œufs frais issus de nos poules (pour les
                habitants)
              </p>
            </Text>
            <ShowArticles />
          </div>
          <div className='container '>
            <Title>Photos</Title>
            <ShowImages />
          </div>
          {this.renderContactSuggestion()}
        </ContentWrapper>
      </>
    )
  }
}
export default HomePage
