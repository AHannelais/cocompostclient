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
  bottom: 0px;
  background-color: #99c413;
  min-height: 20px;
  height: 1.3vw;

  div {
    text-align: center;
    a {
      color: black;
      font-size: 13px;
    }
  }
`
