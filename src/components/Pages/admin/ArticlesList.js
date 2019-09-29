import React from 'react'
import { connect } from 'react-redux'
import { fetchArticles } from '../../../actions'
import { Link } from 'react-router-dom'
import DeleteArticle from './DeleteArticle'
class ArticlesList extends React.Component {
  state = { renderDelete: null }
  componentDidMount () {
    this.props.fetchArticles()
  }

  renderList = () => {
    return (
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Titre</th>
            <th scope='col'>Auteur</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.articles.map(article => {
            return (
              <tr key={article._id}>
                <td> {article.title}</td>
                <td>{article.author}</td>
                <td>
                  <Link
                    to={`/admin/edit_article/${article._id}`}
                    className='btn btn-warning m-1'
                  >
                    Modifier
                  </Link>
                  <button
                    onClick={() => {
                      this.setState({ renderDelete: article._id })
                    }}
                    className='btn btn-danger m-1'
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
  dismissDelete = () => {
    this.setState({ renderDelete: null })
  }
  render () {
    return (
      <div>
        <h2>Articles</h2>
        {this.state.renderDelete ? (
          <DeleteArticle
            _id={this.state.renderDelete}
            callback={this.dismissDelete}
          />
        ) : null}
        {this.renderList()}
        <Link
          to='/admin/new_article'
          onClick={this.onClickCreate}
          className='btn btn-primary'
        >
          Ecrire un nouvel Article
        </Link>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    articles: Object.values(state.articles),
    isSignedIn: state.auth.isSignedIn
  }
}
export default connect(
  mapStateToProps,
  { fetchArticles }
)(ArticlesList)
