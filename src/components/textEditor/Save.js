import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../modal";
import { createArticle, editArticle } from "../../actions";

class Save extends React.Component {
  state = { renderModal: null };

  onSaveClick = () => {
    if (this.props.title && this.props.author && this.props.isSignedIn) {
      const { title, author, content, image, noEditor } = this.props;
      const article = { title, author, content, image, noEditor };

      if (this.props.TypeOfEdition === "create") {
        this.props.createArticle(article);
      }
      if (this.props.TypeOfEdition === "edit") {
        this.props.editArticle(this.props._id, article);
      }
    } else {
      this.setState({ renderModal: true });
    }
  };
  renderModalActions = () => {
    return (
      <>
        <button
          className={`btn btn-${
            this.props.isSignedIn ? "danger" : "secondary"
          } m-1`}
          onClick={() => {
            history.push("/admin");
          }}
        >
          Retour
        </button>
        <button
          className={`btn btn-${
            this.props.isSignedIn ? "primary" : "warning"
          } m-1`}
          onClick={() => {
            this.setState({ renderModal: false });
          }}
        >
          Continuer
        </button>
      </>
    );
  };
  renderModal = () => {
    let title, content;
    let onDismiss = () => {
      this.setState({ renderModal: false });
    };
    if (!this.props.isSignedIn) {
      title = "Compte Administrateur";
      content =
        "Si vous n'êtes pas connecté sur un compte administrateur, aucune modification ne sera prise en compte";
    } else if (!this.props.title && !this.props.author) {
      title = "Champs Requis";
      content = "Vous devez entrer un Titre et un Auteur";
    } else if (this.props.noEditor) {
      title = "Affichage de l'Article";
      content =
        "Vous avez choisis d'afficher uniquement l'image, l'éditeur de texte ne sera pas pris en compte ";
    }
    return (
      <Modal
        title={title}
        content={content}
        onDismiss={onDismiss}
        actions={this.renderModalActions()}
      />
    );
  };
  renderNoEditorWarnning() {
    if (this.props.noEditor) {
      return (
        <div>
          /!\ Vous avez choisis d'afficher uniquement l'image, l'éditeur de
          texte ne sera pas pris en compte /!\{" "}
        </div>
      );
    }
    return;
  }
  render() {
    if (this.state.renderModal) {
      return this.renderModal();
    }
    if (
      this.props.TypeOfEdition === "create" ||
      this.props.TypeOfEdition === "edit"
    ) {
      return (
        <>
          <button className="btn btn-primary" onClick={this.onSaveClick}>
            Save
          </button>
          {this.renderNoEditorWarnning()}
        </>
      );
    }
    return null;
  }
}
const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(
  mapStateToProps,
  { createArticle, editArticle }
)(Save);
