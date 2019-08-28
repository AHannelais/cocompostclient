import React from "react";
import { connect } from "react-redux";
import { createArticle, editArticle } from "../../actions";

const onSaveClick = props => {
  const { title, author, content } = props;
  const article = { title, author, content };

  if (props.TypeOfEdition === "create") {
    props.createArticle(article);
  }
  if (props.TypeOfEdition === "edit") {
    props.editArticle(props.id, article);
  }
};
const Save = props => {
  if (props.title && props.author) {
    if (props.TypeOfEdition === "create" || "edit") {
      return (
        <button
          className="btn btn-primary"
          onClick={() => {
            onSaveClick(props);
          }}
        >
          Save
        </button>
      );
    }
  }
  return <React.Fragment />;
};
export default connect(
  null,
  { createArticle, editArticle }
)(Save);
