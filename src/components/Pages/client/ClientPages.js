import React from "react";
import ContactSuggestion from "./ContactsSuggestions";
import Navbar from "./Navbar";
import PartieCocomposteCestQuoi from "./PartieCocomposteCestQuoi";

export default class ClientPage extends React.Component {
  state = { width: null };

  updateHeight = () => {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName("body")[0];
    const width =
      w.innerWidth || documentElement.clientWidth || body.clientWidth;
    this.setState({ width });
  };
  renderContactSuggestion = () => {
    if (this.state.width < 951) {
      return <ContactSuggestion />;
    }
  };
  renderPage = () => {
    switch (this.props.match.params.page) {
      case "CocomposteCestQuoi":
        return <PartieCocomposteCestQuoi />;
      default:
        return <div>404 NOT FOUND</div>;
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentWillMount = () => {
    this.updateHeight();
  };
  componentDidMount = () => {
    window.addEventListener("resize", this.updateHeight);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateHeight);
  };

  render() {
    console.log(this.props.match.params.page);
    return (
      <>
        <Navbar />
        {this.renderPage()}

        {this.renderContactSuggestion()}
      </>
    );
  }
}
