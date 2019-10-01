import React from 'react'
import { connect } from 'react-redux'
import { fetchImages } from '../../../actions/imageActions'
import ImageModal from '../ImageModal'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ImageWrapper } from './styledComponents'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 10000, min: 1300 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 1300, min: 992 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 992, min: 500 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1
  }
}

class ShowImages extends React.Component {
  state = { fetched: false, showModalImage: false, autoPlay: true }

  componentDidMount = async () => {
    await this.props.fetchImages()
    this.setState({ fetched: true })
  }
  renderModalImage = () => {
    if (this.state.showModalImage) {
      return (
        <ImageModal
          image={this.state.showModalImage}
          onDismiss={() => {
            this.setState({ showModalImage: false, autoPlay: true })
          }}
        />
      )
    }
  }
  render () {
    if (this.props.images !== [] && this.state.fetched) {
      return (
        <div
          onMouseEnter={() => {
            this.setState({ autoPlay: false })
          }}
          onMouseLeave={() => {
            this.setState({ autoPlay: true })
          }}
          style={{
            border: '2px solid  rgba(200, 200, 20, 0.5)',
            borderRadius: '10px',
            backgroundColor: 'rgb(250, 250, 250)',
            marginBottom: '2vw'
          }}
        >
          {this.renderModalImage()}
          <Carousel
            responsive={responsive}
            infinite
            autoPlay={this.state.autoPlay}
            partialVisbile
            itemClass='image-item'
            autoPlaySpeed={3000}
          >
            {this.props.images.map(image => {
              return (
                <ImageWrapper
                  key={image._id}
                  onClick={() => {
                    this.setState({ showModalImage: image })
                  }}
                >
                  <img src={image.link} draggable={false} alt='' />
                </ImageWrapper>
              )
            })}
          </Carousel>
        </div>
      )
    } else {
      return (
        <div className='m-20'>
          <h3>Images Are Loading...</h3>
        </div>
      )
    }
  }
}
const mapStateToProps = state => {
  return {
    images: Object.values(state.images)
  }
}
export default connect(
  mapStateToProps,
  { fetchImages }
)(ShowImages)
