import React from "react";
import Navbar from "./Navbar";
import { ContentWrapper, Title, Text, TextAndImage } from "./styledComponents";
import Header from "./Header";
import ContactSuggestion from "./ContactsSuggestions";
import Footer from "./Footer";
import ShowImages from "./ShowImages";
import ShowArticles from "./ShowArticles";
import Schema from "../../../images/schema1.jpg";
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
    window.scrollTo(0, 0);
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
          <div className="container">
            <Title>Bienvenue</Title>
            <Text>
              <p>
                Bonjour à toutes et à tous,
                <br />
                <br /> Nous avons l'immense honneur de vous présenter notre
                projet Cocomposte, des poules et du compost dans vos quartiers
                !! Cocomposte est un projet pour les habitants des centres ville
                qui n'ont pas la place d'accueillir des poules pour avoir des
                oeufs ou de faire un compost.
              </p>
              <Title>
                <img
                  style={{ maxWidth: "100%" }}
                  src={Schema}
                  alt="Schema Cocomposte"
                />
              </Title>

              <p>
                Notre idée est de participer au développement durable par la
                réduction des déchets et la promotion des activités locales.
                Pour ce faire, nous aimerions installer des poulaillers urbains
                dans les différents jardins publics de Toulouse afin de pouvoir
                proposer des œufs frais aux habitants, en échange de leurs
                bio-déchets
              </p>
            </Text>
            <TextAndImage />
            <ShowArticles />
          </div>
          <div className="container ">
            <Title>Photos</Title>
            <ShowImages />
          </div>
          {this.renderContactSuggestion()}
          <Footer />
        </ContentWrapper>
      </>
    );
  }
}
export default HomePage;
