import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
const ImageModal = props => {
  return ReactDOM.createPortal(
    <Ext onClick={props.onDismiss}>
      <Wrapper>
        <h5>
          <i className='far fa-times-circle' style={{ cursor: 'pointer' }} />
        </h5>
        <img src={props.image.link} alt='NOT FOUND' />
        <h5>{props.image.caption}</h5>
      </Wrapper>
    </Ext>,
    document.querySelector('#modal')
  )
}
export default ImageModal
const Ext = styled.div`
  position: fixed;
  z-index: 1100;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(1, 1, 1, 0.7);
`
const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    max-height: 70vh;
    max-width: 95vw;
    border: 2px solid black;
    border-radius: 5px;
  }
  h5 {
    color: white;
    text-align: right;
    i {
      font-size: 30px;
    }
  }
`
