import React from 'react'
import styled from 'styled-components'
import hensBackGround from '../../../images/home_page_2.jpg'
import { TweenMax, Bounce } from 'gsap/TweenMax'
const onClickScrollDown = () => {
  let i = 10
  let int = setInterval(() => {
    window.scrollTo(0, i)
    i += 30
    if (i >= Math.max(window.innerHeight * 1.04, 530)) clearInterval(int)
  }, 20)
}

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.sloganTitle = null
    this.slogan = null
    this.pointer = null
  }
  showSlogan = () => {
    TweenMax.from(this.sloganTitle, 1, {
      opacity: 0,
      ease: Bounce.easeOut,
      y: -200
    })
    TweenMax.from(this.slogan, 1, { opacity: 0 })
  }
  onPointerOVer = () => {}
  onEnterPointer = () => {
    TweenMax.to(this.pointer, 0.2, { scale: 1.2 })
  }

  onLeavePointer = () => {
    TweenMax.to(this.pointer, 0.2, { scale: 1 })
  }
  componentDidMount () {
    this.showSlogan()
  }

  render () {
    return (
      <div>
        <HeaderBackGround>
          <SloganContainer>
            <SloganTitle ref={div => (this.sloganTitle = div)}>
              Cocomposte
            </SloganTitle>
            <SloganText ref={div => (this.slogan = div)}>
              Cocomposte promeut la réduction des déchets et le bien être animal
              par l'installation de poulaillers urbains et propose des oeufs
              frais aux habitants en échange de leurs déchets alimentaires
              compostables
            </SloganText>
          </SloganContainer>
        </HeaderBackGround>
        <ScrollDownLink
          onClick={onClickScrollDown}
          ref={div => (this.pointer = div)}
          onMouseEnter={this.onEnterPointer}
          onMouseLeave={this.onLeavePointer}
        >
          C'est Parti !
          <EggImage src='https://svgsilh.com/svg_v2/2181491.svg' alt='' />
          <br />
          <LinkArrowImage
            src='https://labsud.org/wp-content/uploads/2017/07/down-arrow.png'
            alt=''
          />
        </ScrollDownLink>
      </div>
    )
  }
}
export default Header

// Style

const HeaderBackGround = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  min-height: 500px;
  background: url(${hensBackGround}) no-repeat center/cover;
`
const SloganContainer = styled.div`
  margin: 40vmin 11.5% 0;
  color: white;
`
const SloganTitle = styled.h1`
  font-family: 'Amatic', Impact, Haettenschweiler, 'Arial Narrow Bold',
    sans-serif;
  font-size: 13vmax;
  line-height: 0.9;
  text-align: left;
  margin-bottom: 10px;
  text-shadow: 2px 2px 3px black;
`
const SloganText = styled.div`
  max-width: 600px;
  font-size: calc(15px + 0.72vw);
  line-height: 1.4;
  left: 10vw;
  text-shadow: 2px 2px 3px black;
`

const ScrollDownLink = styled.div`
  font-family: 'Amatic', Impact, Haettenschweiler, 'Arial Narrow Bold',
    sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: black;
  position: absolute;
  bottom: -20px;
  cursor: pointer;
  text-decoration: none;
  left: 50%;
  text-shadow: 1px 1px 3px white;
  transform: translateX(-50%);
  white-space: nowrap;
  @media screen and (max-width: 950px) {
    bottom: -20px;
  }
`

const EggImage = styled.img`
  width: 30px;
`
const LinkArrowImage = styled.img`
  position: relative;
  top: -15px;
  left: 30%;
  height: 20px;
  width: 50px;
`
