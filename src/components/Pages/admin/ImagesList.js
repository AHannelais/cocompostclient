import React from "react";
import { connect } from "react-redux";
import { fetchImages } from "../../../actions";
import DeleteImage from "./DeleteImage";
import CreateImage from "./CreateImage";
import ImageModal from "../ImageModal";
class ImagesList extends React.Component {
  state = { renderDelete: null, showModalImage: false };
  componentDidMount() {
    this.props.fetchImages();
  }
  renderModalImage = () => {
    if (this.state.showModalImage) {
      return (
        <ImageModal
          image={this.state.showModalImage}
          onDismiss={() => {
            this.setState({ showModalImage: false });
          }}
        />
      );
    }
  };
  renderList = () => {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Lien</th>
            <th scope="col">Légende</th>
            <th scope="col">Actions</th>
            <th scope="col">Miniature </th>
          </tr>
        </thead>
        <tbody>
          {this.props.images.map(image => {
            return (
              <tr key={image._id}>
                <td> {image.link ? image.link.substring(0, 40) : null}...</td>
                <td>{image.caption}</td>
                <td>
                  <button
                    onClick={() => {
                      this.setState({ renderDelete: image._id });
                    }}
                    className="btn btn-danger m-1"
                  >
                    Supprimer
                  </button>
                </td>
                <td>
                  <img
                    src={image.link}
                    style={{
                      maxHeight: "50px",
                      maxWidth: "50px",
                      cursor: "pointer",
                    }}
                    alt="NOT FOUND"
                    onClick={() => {
                      this.setState({ showModalImage: image });
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  dismissDelete = () => {
    this.setState({ renderDelete: null });
  };
  render() {
    return (
      <div>
        {this.renderModalImage()}
        <h2>Images</h2>
        {this.state.renderDelete ? (
          <DeleteImage
            _id={this.state.renderDelete}
            callback={this.dismissDelete}
          />
        ) : null}
        {this.renderList()}
        <CreateImage />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    images: Object.values(state.images),
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(
  mapStateToProps,
  { fetchImages }
)(ImagesList);
