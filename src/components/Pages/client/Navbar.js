import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../../DropdownMenu";
import cocomposteTitle from "../../../images/cocoposteTitle2.png";
import styled from "styled-components";
import ContactSuggestions from "./ContactsSuggestions";
const Navbar = () => {
  return (
    <Nav>
      <DropdownMenu />
      <Title>
        <Link to="/">
          <img src={cocomposteTitle} alt="COCOMPOSTE" />
        </Link>
      </Title>

      <Wrapper>
        <ContactSuggestions />
      </Wrapper>
    </Nav>
  );
};

// Style
const Nav = styled.nav`
  z-index: 1100;
  position: sticky;
  top: 0;
  font-family: Amatic, Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  height: 100px;
  @media screen and (max-width: 950px) and (min-width: 680px) {
    height: calc(9.26vw + 12px);
  }
  @media screen and (max-width: 680px) {
    height: 11vw;
  }
  background-color: #99c413;
  display: flex;
`;
const Title = styled.div`
  max-width: 0%;
  background-color: cyan;
  img {
    max-height: 95%;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  position: absolute;
  right: 10px;
  top: calc(50% - 40px);
  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export default Navbar;
