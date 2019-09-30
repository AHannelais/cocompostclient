import React from 'react'
import { connect } from 'react-redux'
import { fetchArticles } from '../../../actions/articleActions'
import {
  CarouselWrapper,
  ArticleWrapper,
  TextAndImage
} from './styledComponents'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 10000, min: 1300 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 1300, min: 992 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 992, min: 500 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1
  }
}

class ShowArticles extends React.Component {
  state = { fetched: false }
  componentDidMount = async () => {
    await this.props.fetchArticles()
    this.setState({ fetched: true })
  }

  render () {
  
    if (this.state.fetched && this.props.articles !== []) {
      return (
        <TextAndImage>
          <CarouselWrapper>
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={5000}
            >
              {this.props.articles.map(article => {
                return (
                  <ArticleWrapper
                    key={article._id}
                    onClick={() => {
                      window.open('/articles/' + article._id)
                    }}
                  >
                    <img src={article.image} alt='' />
                    <div>
                      <h4>{article.title}</h4>
                      <p>{article.author}</p>
                    </div>
                  </ArticleWrapper>
                )
              })}
            </Carousel>
          </CarouselWrapper>

          <div>
            <h4>Articles</h4>
            <p>
              La recette du mois ? L'avancée du projet ? Des news en tout genre
              ? jettez un coup d'oeil aux articles conconctés par la fine équipe
              de Cocomposte
            </p>
          </div>
        </TextAndImage>
      )
    }

    return (
      <div className='m-20'>
        <h3>Articles Are Loading...</h3>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    articles: Object.values(state.articles)
  }
}
export default connect(
  mapStateToProps,
  { fetchArticles }
)(ShowArticles)
