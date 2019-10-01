import React from 'react'
import ContactSuggestion from './ContactsSuggestions'
import Footer from './Footer'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { fetchArticle } from '../../../actions'
import { Title, TitleH4 } from './styledComponents'
import TextEditor from '../../textEditor/textEditor'

class ShowArticle extends React.Component {
  state = { width: null }
  componentDidMount = async () => {
    window.addEventListener('resize', this.updateHeight)
    await this.props.fetchArticle(this.props.match.params._id)
  }

  componentWillMount = () => {
    this.updateHeight()
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateHeight)
  }
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
    if (this.props.article) {
      return (
        <>
          <Title>{this.props.article.title}</Title>
          <TitleH4>{this.props.article.author}</TitleH4>
          <TextEditor
            content={JSON.parse(this.props.article.content)}
            TypeOfEdition='read'
            readOnly
            title={this.props.article.title}
            author={this.props.article.author}
            _id={this.props.match.params._id}
          />
        </>
      )
    }
    return <div>404 NOT FOUND</div>
  }

  render () {
    return (
      <>
        <Navbar />
        {this.renderPage()}
        {this.renderContactSuggestion()}
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state, onwProps) => {
  return {
    article: state.articles[onwProps.match.params._id]
  }
}
export default connect(
  mapStateToProps,
  { fetchArticle }
)(ShowArticle)
