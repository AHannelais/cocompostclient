import React from "react";
import "./textEditorStyle.css";
import {
  MegadraftEditor as Editor,
  editorStateFromRaw,
  editorStateToJSON,
} from "megadraft";
import actions from "megadraft/lib/actions/default";
import UnderlineIcon from "./UnderlineIcon";
import Save from "./Save";
class textEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(this.props.content) };
  }

  onChange = editorState => {
    this.setState({ editorState });
  };

  render() {
    const customActions = actions.concat([
      { type: "inline", label: "U", style: "UNDERLINE", icon: UnderlineIcon },
    ]);
    return (
      <div>
        <div className="container border">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            actions={customActions}
            readOnly={this.props.readOnly}
          />
        </div>

        <Save
          content={editorStateToJSON(this.state.editorState)}
          TypeOfEdition={this.props.TypeOfEdition}
          title={this.props.title}
          author={this.props.author}
          image={this.props.image}
          noEditor={this.props.noEditor}
          _id={this.props._id}
        />
      </div>
    );
  }
}
export default textEditor;
