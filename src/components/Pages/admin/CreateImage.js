import React from "react";
import { connect } from "react-redux";
import { createImage } from "../../../actions/imageActions";
import ImageModal from "../ImageModal";
class CreateImage extends React.Component {
  state = { link: "", caption: "", showModalImage: false };
  onChangeLink = e => {
    e.preventDefault();
    this.setState({ link: e.target.value });
  };
  onChangeCaption = e => {
    e.preventDefault();
    this.setState({ caption: e.target.value });
  };
  onClickCreate = e => {
    e.preventDefault();
    if (this.state.link && this.state.caption) {
      const content = { link: this.state.link, caption: this.state.caption };
      this.props.createImage(content);
      this.setState({ link: "", caption: "" });
    }
  };
  renderModalImage = () => {
    if (this.state.showModalImage) {
      return (
        <ImageModal
          image={this.state}
          onDismiss={() => {
            this.setState({ showModalImage: false });
          }}
        />
      );
    }
  };
  render() {
    return (
      <form className="m-1">
        {this.renderModalImage()}
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Lien"
              value={this.state.link}
              onChange={this.onChangeLink}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Légende"
              value={this.state.caption}
              onChange={this.onChangeCaption}
            />
          </div>
          <div className="form-group col">
            <div className="row">
              <p>Apperçu :</p>
              <img
                style={{
                  maxWidth: "50px",
                  maxHeight: "50px",
                  cursor: "pointer",
                }}
                src={this.state.link !== "" ? this.state.link : null}
                alt={this.state.link !== "" ? "NOT FOUND" : null}
                onClick={() => {
                  this.setState({ showModalImage: true });
                }}
              />
            </div>
          </div>
          <button className="btn btn-primary " onClick={this.onClickCreate}>
            Ajouter
          </button>
        </div>
      </form>
    );
  }
}
export default connect(
  null,
  { createImage }
)(CreateImage);
