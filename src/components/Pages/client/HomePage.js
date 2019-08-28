import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Header from "./Header";
import ContactSuggestion from "./ContactsSuggestions";

class HomePage extends React.PureComponent {
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
    return (
      <>
        <Header />

        <Navbar />
        <ContentWrapper>
          <div className="container bg-success" style={{ height: "60vh" }}>
            partie articles
          </div>
          <div className="container bg-primary" style={{ height: "40vh" }}>
            partie photos
          </div>
          {this.renderContactSuggestion()}
        </ContentWrapper>
      </>
    );
  }
}
export default HomePage;

const ContentWrapper = styled.div`
  align-items: flex-start;
`;
