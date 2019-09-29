import React from "react";
import styled from "styled-components";

class ContactSuggestions extends React.Component {
  state = { gmail: false };
  onclickGmail = () => {
    this.setState({ gmail: true });
    navigator.clipboard.writeText("mabit");
    console.log("copied");
  };
  onClickOutGmail = () => {
    this.setState({ gmail: false });
  };

  render() {
    return (
      <ContactWrapper onclick>
        <Messenger
          href="https://www.facebook.com/WeAreCocomposte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-messenger" />
        </Messenger>
        <Gmail
          href="mailto:contact.composte@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope" />
        </Gmail>
        <Facebook
          href="https://m.me/WeAreCocomposte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f" />
        </Facebook>
      </ContactWrapper>
    );
  }
}
export default ContactSuggestions;

// Style

const ContactWrapper = styled.div`
  position: sticky;
  bottom: 10px;
  right: 20px;
  display: flex;
  flex-direction: row-reverse;
  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: flex-end;
  }

  a {
    margin: 5px;
    color: #99c413 !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    width: 50px;
    height: 50px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2);
    border: 2px solid #99c413 !important;
    border-radius: 50%;
    display: flex;
    transition: all 0.25s;
    font-size: 25px;
    @media screen and (min-width: 950px) {
      width: 70px;
      height: 70px;
    }
    i {
      margin: auto;
    }
    :hover {
      color: #ffffff !important;
      background: #99c413;
      border-color: #ffffff !important;
    }
  }
`;
const Facebook = styled.a``;
const Gmail = styled.a``;
const Messenger = styled.a``;
