import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
class Footer extends React.Component {
  render () {
    return (
      <FooterWrapper>
        <div>
          <Link to='/MentionsLegales'>mentions légales</Link>
        </div>
      </FooterWrapper>
    )
  }
}
export default Footer

// Style

const FooterWrapper = styled.div`
  z-index: 1099;
  position: sticky;
  bottom: 0;
  background-color: #99c413;
  div {
    text-align: center;
    a {
      font-size: 13px;
      color: black;
      @media screen and (min-width: 2000px) {
        font-size: calc(0.8vw);
      }
    }
  }
`
