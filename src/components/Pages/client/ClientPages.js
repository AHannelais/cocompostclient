import React from 'react'
import ContactSuggestion from './ContactsSuggestions'
import Navbar from './Navbar'
import PartieCocomposteCestQuoi from './PartieCocomposteCestQuoi'
import PartieNosPartenaires from './PartieNosPartenaires'
import PartieQuiSommesNous from './PartieQuiSommesNous'
export default class ClientPage extends React.Component {
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
  renderPage = () => {
    switch (this.props.match.params.page) {
      case 'CocomposteCestQuoi':
        return <PartieCocomposteCestQuoi />
      case 'NosPartenaires':
        return <PartieNosPartenaires />
      case 'QuiSommesNous':
        return <PartieQuiSommesNous />
      default:
        return <div>404 NOT FOUND</div>
    }
  }

  componentDidMount () {
    window.scrollTo(0, 0)
    window.addEventListener('resize', this.updateHeight)
  }
  componentDidUpdate () {
    window.scrollTo(0, 0)
    window.removeEventListener('resize', this.updateHeight)
  }
  componentWillMount = () => {
    this.updateHeight()
  }

  render () {
    return (
      <>
        <Navbar />
        {this.renderPage()}

        {this.renderContactSuggestion()}
      </>
    )
  }
}
