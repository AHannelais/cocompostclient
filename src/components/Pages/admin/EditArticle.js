import React from "react";
import { connect } from "react-redux";
import Modal from "../../modal";
import ImageModal from "../ImageModal";
import { Link } from "react-router-dom";
import history from "../../../history";
import { fetchArticle, editArticle } from "../../../actions";
import TextEditor from "../../textEditor/textEditor";

class ArticleEdit extends React.Component {
  state = {
    title: "",
    author: "",
    image: "",
    renderModal: null,
    showModalImage: false,
  };
  componentDidMount = async () => {
    if (!this.props.isSignedIn) {
      this.setState({ renderModal: true });
    }
    await this.props.fetchArticle(this.props.match.params._id);
    this.setState({
      title: this.props.article.title,
      author: this.props.article.author,
      image: this.props.article.image,
    });
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
  render() {
    if (!this.props.article) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        {this.renderModal()}
        {this.renderModalImage()}
        <h1>Modifier un Article</h1>
        <div className="row">
          <div className="col">
            <form className="form-group">
              <label htmlFor="articleTitle">Titre</label>
              <input
                className="form-control"
                placeholder="Entrer le Titre de l'article"
                _id="articleTitle"
                onChange={this.onChangeTitle}
                value={this.state.title}
              />
              <label htmlFor="articleAuthor">Auteur</label>
              <input
                className="form-control"
                placeholder="Entrer l'Auteur de l'article"
                _id="articleAuthor"
                onChange={this.onChangeAuthor}
                value={this.state.author}
              />
              <label htmlFor="articleImage">Image</label>
              <input
                className="form-control"
                placeholder="Entrer l'URL de l'image"
                id="articleImage"
                value={this.state.image}
                onChange={this.onChangeImage}
              />
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
          content={JSON.parse(this.props.article.content)}
          TypeOfEdition="edit"
          title={this.state.title}
          author={this.state.author}
          _id={this.props.match.params._id}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, onwProps) => {
  return {
    article: state.articles[onwProps.match.params._id],
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(
  mapStateToProps,
  { fetchArticle, editArticle }
)(ArticleEdit);
