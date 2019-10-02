import React from 'react'
import { Link } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'
import cocomposteTitle from '../../../images/cocoposteTitle2.png'
import styled from 'styled-components'
import ContactSuggestions from './ContactsSuggestions'
const Navbar = () => {
  return (
    <Nav>
      <DropdownMenu />
      <Title>
        <Link
          to='/'
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <img src={cocomposteTitle} alt='COCOMPOSTE' />
        </Link>
      </Title>

      <Wrapper>
        <ContactSuggestions />
      </Wrapper>
    </Nav>
  )
}

// Style
const Nav = styled.nav`
  z-index: 1100;
  position: sticky;
  top: 0;
  font-family: Amatic, Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  height: calc(3vw + 71.5px);
  @media screen and (max-width: 950px) and (min-width: 680px) {
    height: calc(9.26vw + 12px);
  }
  @media screen and (max-width: 680px) {
    height: 11vw;
  }
  background-color: #99c413;
  display: flex;
`
const Title = styled.div`
  width: calc(15vw + 358px);
  @media screen and (max-width: 950px) and (min-width: 680px) {
    width: calc(46.3vw + 60px);
  }
  @media screen and (max-width: 680px) {
    width: 66vw;
  }
  img {
    max-height: 95%;
    transition: all 0.2s;
    cursor: pointer;
    :hover {
      max-height: 105%;
      transform: translate(-5%, -5%);
    }
  }
`
const Wrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  @media screen and (max-width: 950px) {
    display: none;
  }
`

export default Navbar
