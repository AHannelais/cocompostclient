import React from "react";
import { Link } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";
import Modal from "../components/modal";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  state = { access: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "182862176374-r5fho167s8q44drasc4m5ohe7r6s6o6q.apps.googleusercontent.com",
          scope: "email",
          // prompt: "login",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.auth.signOut();
          this.onAuthchange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthchange);
        });
    });
  }
  onAuthchange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };
  onAccessDenied = () => {
    return (
      <Link to={"/"} className="ui button">
        OK
      </Link>
    );
  };
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (!this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Connexion au compte Google
        </button>
      );
    } else if (this.props.adminAccount) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Deconnexion
        </button>
      );
    } else {
      return (
        <Modal
          title="Administration Refusée"
          content="ce compte ne possède pas les droit d'administration, toute modification ne sera pas prise en compte"
          actions={this.onAccessDenied()}
          onDismiss={() => history.push("/admin")}
        />
      );
    }
  }
  componentWillUnmount() {
    return this.auth.signOut();
  }
  render() {
    return <div> {this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    adminAccount: state.auth.adminAccount,
  };
};
export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
