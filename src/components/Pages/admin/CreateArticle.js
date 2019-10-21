import React from "react";
import TextEditor from "../../textEditor/textEditor";
import Modal from "../../modal";
import history from "../../../history";
import { Link } from "react-router-dom";
import newContent from "../../textEditor/newContent";
import { connect } from "react-redux";
import ImageModal from "../ImageModal";
class CreateArticle extends React.Component {
  state = {
    title: "",
    author: "",
    image: "",
    noEditor: false,
    renderModal: "",
    showModalImage: false,
  };

  componentDidMount = () => {
    if (!this.props.isSignedIn) {
      this.setState({ renderModal: true });
    }
  };
  renderModal = () => {
    if (this.state.renderModal) {
      return (
        <Modal
          title="Compte Administrateur"
          content="Si vous n'êtes pas connecté sur un compte administrateur, aucune modification ne sera prise en compte"
          actions={this.renderModalActions()}
          onDismiss={() => {
            history.push("/admin");
          }}
        />
      );
    }
  };
  renderModalActions = () => {
    return (
      <>
        <Link className="btn btn-secondary m-1" to="/admin">
          Retour
        </Link>
        <button
          className="btn btn-warning m-1"
          onClick={() => {
            this.setState({ renderModal: false });
          }}
        >
          Continuer
        </button>
      </>
    );
  };
  onChangeTitle = e => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };
  onChangeAuthor = e => {
    e.preventDefault();
    this.setState({ author: e.target.value });
  };
  onChangeImage = e => {
    e.preventDefault();
    this.setState({ image: e.target.value });
  };
  onChangeNoEditor = e => {
    this.setState({ noEditor: e.target.checked });
  };

  renderModalImage = () => {
    if (this.state.showModalImage) {
      return (
        <ImageModal
          image={{
            link: this.state.image,
            caption: `${this.state.title},  ${this.state.author}`,
          }}
          onDismiss={() => {
            this.setState({ showModalImage: false });
          }}
        />
      );
    }
  };
  render() {
    return (
      <div className="container">
        {this.renderModal()}
        {this.renderModalImage()}
        <h1>Ecrire un Article</h1>
        <div className="row">
          <div className="col">
            <form className="form-group">
              <label htmlFor="articleTitle">Titre</label>
              <input
                className="form-control"
                placeholder="Entrer le Titre de l'article"
                id="articleTitle"
                value={this.state.title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="articleAuthor">Auteur</label>
              <input
                className="form-control"
                placeholder="Entrer l'Auteur de l'article"
                id="articleAuthor"
                value={this.state.author}
                onChange={this.onChangeAuthor}
              />
              <label htmlFor="articleImage">Image</label>
              <input
                className="form-control"
                placeholder="Entrer l'URL de l'image"
                id="articleImage"
                value={this.state.image}
                onChange={this.onChangeImage}
              />
              <div className="form-check m-1">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={this.state.noEditor}
                  onChange={this.onChangeNoEditor}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Afficher uniquement l'image en plein écran ?
                </label>
              </div>
            </form>
          </div>
          <div className="col">
            <h5>Apperçu de l'image</h5>
            <img
              style={{
                maxWidth: "300px",
                maxHeight: "200px",
                cursor: "pointer",
              }}
              src={this.state.image !== "" ? this.state.image : null}
              alt={this.state.image !== "" ? "NOT FOUND" : null}
              onClick={() => {
                this.setState({ showModalImage: true });
              }}
            />
          </div>
        </div>
        <TextEditor
          content={newContent}
          TypeOfEdition="create"
          title={this.state.title}
          author={this.state.author}
          image={this.state.image}
          noEditor={this.state.noEditor}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(
  mapStateToProps,
  {}
)(CreateArticle);
