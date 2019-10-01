import React from 'react'
import styled from 'styled-components'

class Cookies extends React.Component {
  render () {
    return (
      <CookieWrapper>
        <div>
          <p>
            Ce site utilise des cookies pour vous garantir la meilleure
            expérience
          </p>
          <a href='http://www.youronlinechoices.com/fr/'>En savoir plus</a>
          <button
            className='btn btn-secondary m-1'
            onClick={this.props.callback}
          >
            OK
          </button>
        </div>
      </CookieWrapper>
    )
  }
}
export default Cookies

// Style

const CookieWrapper = styled.div`
  z-index: 1200;
  position: fixed;
  bottom: 25px;
  width: 400px;
  max-width: 90%;
  border-radius: 10px;
  background-color: #99c413;
  padding: 5px;
  div {
    a {
      color: blue;
    }
  }
`
