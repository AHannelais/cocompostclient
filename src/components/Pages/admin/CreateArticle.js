import React from "react";
import TextEditor from "../../textEditor/textEditor";
import newContent from "../../textEditor/newContent";
class CreateArticle extends React.Component {
  state = { title: null, author: null };
  onChangeTitle = e => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };
  onChangeAuthor = e => {
    e.preventDefault();
    this.setState({ author: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <h1>Ecrire un Article</h1>
        <form className="form-group">
          <label htmlFor="articleTitle">Titre</label>
          <input
            className="form-control"
            placeholder="Entrer le Titre de l'article"
            id="articleTitle"
            onChange={this.onChangeTitle}
          />
          <label htmlFor="articleAuthor">Auteur</label>
          <input
            className="form-control"
            placeholder="Entrer l'Auteur de l'article"
            id="articleAuthor"
            onChange={this.onChangeAuthor}
          />
        </form>
        <TextEditor
          content={newContent}
          TypeOfEdition="create"
          title={this.state.title}
          author={this.state.author}
        />
      </div>
    );
  }
}
export default CreateArticle;
