import React from 'react'
import GoogleAuth from './GoogleAuth'
import ArticlesList from './ArticlesList'
import ImagesList from './ImagesList'
class AdminPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { display: 'articles' }
  }

  onClickDisplay = () => {
    this.state.display === 'articles'
      ? this.setState({ display: 'images' })
      : this.setState({ display: 'articles' })
  }
  renderSelected = () => {
    return this.state.display === 'articles' ? <ArticlesList /> : <ImagesList />
  }
  render () {
    return (
      <div className='container'>
        <h2>Administration Cocomposte</h2>
        <div className='row'>
          <button
            className='btn btn-primary m-1'
            disabled={this.state.display === 'articles'}
            onClick={this.onClickDisplay}
          >
            articles
          </button>
          <button
            className='btn btn-primary m-1'
            disabled={this.state.display === 'images'}
            onClick={this.onClickDisplay}
          >
            images
          </button>
        </div>

        {this.renderSelected()}
      </div>
    )
  }
}
export default AdminPage
