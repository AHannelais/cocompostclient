import React from "react";
import { connect } from "react-redux";
import adminAccounts from "./adminAccounts";
import Modal from "../../modal";
import { signIn, signOut } from "../../../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "631609271480-clskh501ibbejhlncvcr2j5jupj29g5e.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthchange(this.auth.isSignedIn.get());
          this.onSignOutClick();
          this.auth.isSignedIn.listen(this.onAuthchange);
        });
    });
  }
  onAuthchange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
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
  renderModalActions() {
    return (
      <React.Fragment>
        <button className="btn btn-secondary m-1" onClick={this.onSignOutClick}>
          OK
        </button>
      </React.Fragment>
    );
  }
  renderAuthButton = () => {
    if (this.props.isSignedIn) {
      if (this.auth) {
        console.log("ID compte Google :", this.auth.currentUser.get().getId());
        if (
          !Object.values(adminAccounts).includes(
            this.auth.currentUser.get().getId()
          )
        ) {
          return (
            <>
              <div>
                <button
                  onClick={this.onSignInClick}
                  className="btn btn-danger m-1"
                >
                  <i className="fab fa-google" /> Connexion au compte Google
                </button>
              </div>
              <Modal
                title="Ce Compte n'est pas Administrateur"
                content="Si vous n'êtes pas connecté sur un compte administrateur, aucune modification ne sera prise en compte"
                actions={this.renderModalActions()}
                onDismiss={this.onSignOutClick}
              />
            </>
          );
        }
      }

      return (
        <div>
          <button onClick={this.onSignOutClick} className="btn btn-danger m-1">
            <i className="fab fa-google" /> Deconnexion
          </button>
          <button className="btn btn-outline-secondary m-1" disabled>
            Connecté
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.onSignInClick} className="btn btn-danger m-1">
            <i className="fab fa-google" /> Connexion au compte Google
          </button>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
