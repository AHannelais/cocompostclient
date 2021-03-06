import React from 'react'
import { connect } from 'react-redux'
import { deleteImage, fetchImage } from '../../../actions/imageActions'
import Modal from '../../modal'

class DeleteArticle extends React.Component {
  componentDidMount = async () => {
    await this.props.fetchImage(this.props._id)
  }
  renderModalActions = () => {
    if (!this.props.isSignedIn) {
      return (
        <button onClick={this.props.callback} className='btn btn-secondary m-1'>
          OK
        </button>
      )
    } else {
      return (
        <>
          <button
            className='btn btn-secondary m-1'
            onClick={this.props.callback}
          >
            Annuler
          </button>
          <button
            className='btn btn-danger m-1'
            onClick={() => {
              this.props.deleteImage(this.props._id)
              this.props.callback()
            }}
          >
            Supprimer
          </button>
        </>
      )
    }
  }
  render () {
    if (!this.props.isSignedIn) {
      return (
        <Modal
          title='Compte Administrateur'
          content="Si vous n'êtes pas connecté sur un compte administrateur, aucune modification ne sera prise en compte"
          actions={this.renderModalActions()}
          onDismiss={() => {
            this.props.callback()
          }}
        />
      )
    } else {
      return (
        <Modal
          title="Suppression d'Article"
          content={`Etes-vous sûr de vouloir supprimer l'image : ${
            this.props.image.caption
          } `}
          actions={this.renderModalActions()}
          onDismiss={() => {
            this.props.callback()
          }}
        />
      )
    }
  }
}
const mapStateToProps = (state, onwProps) => {
  return {
    image: state.images[onwProps._id],
    isSignedIn: state.auth.isSignedIn
  }
}
export default connect(
  mapStateToProps,
  { deleteImage, fetchImage }
)(DeleteArticle)
