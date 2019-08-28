import React from "react";
import { connect } from "react-redux";
import { fetchArticle, editArticle } from "../../../actions";
import TextEditor from "../../textEditor/textEditor";

class StreamEdit extends React.Component {
  state = { title: "", author: "" };
  componentDidMount = async () => {
    await this.props.fetchArticle(this.props.match.params.id);
    this.setState({
      title: this.props.article.title,
      author: this.props.article.author,
    });
  };
  onSubmit = formValues => {
    this.props.editArticle(this.props.match.params.id, formValues);
  };

  onChangeTitle = e => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };
  onChangeAuthor = e => {
    e.preventDefault();
    this.setState({ author: e.target.value });
  };
  render() {
    if (!this.props.article) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <h1>Modifier un Article</h1>
        <form className="form-group">
          <label htmlFor="articleTitle">Titre</label>
          <input
            className="form-control"
            placeholder="Entrer le Titre de l'article"
            id="articleTitle"
            onChange={this.onChangeTitle}
            value={this.state.title}
          />
          <label htmlFor="articleAuthor">Auteur</label>
          <input
            className="form-control"
            placeholder="Entrer l'Auteur de l'article"
            id="articleAuthor"
            onChange={this.onChangeAuthor}
            value={this.state.author}
          />
        </form>
        <TextEditor
          content={JSON.parse(this.props.article.content)}
          TypeOfEdition="edit"
          title={this.state.title}
          author={this.state.author}
          id={this.props.match.params.id}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, onwProps) => {
  return { article: state.article[onwProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchArticle, editArticle }
)(StreamEdit);
