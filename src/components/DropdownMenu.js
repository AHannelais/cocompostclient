import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TweenMax, Back } from 'gsap/TweenMax'

class DropdownMenu extends Component {
  constructor (props) {
    super(props)
    this.menuItems = []
    this.menuButton = null
    this.state = { showMenu: false }
  }
  componentDidMount () {
    window.scrollTo(0, 0)
    TweenMax.to(this.menuItems, 0, { autoAlpha: 0 })
  }
  onEnterShowMenu = () => {
    if (!this.state.showMenu) {
      TweenMax.fromTo(this.menuButton, 0.2, { scale: 1 }, { scale: 1.1 })
      TweenMax.staggerFromTo(
        this.menuItems,
        0.2,
        { autoAlpha: 0, scale: 0.5, y: -30 },
        { autoAlpha: 1, scale: 1, y: 0, ease: Back.easeOut.config(3) },
        0.1
      )
      this.setState({ showMenu: true })
    }
  }
  onClickScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    this.onLeaveHideMenu()
  }
  onClickMenu = () => {
    if (this.state.showMenu) {
      this.onLeaveHideMenu()
    } else if (!this.state.showMenu) {
      this.onEnterShowMenu()
    }
  }
  onLeaveHideMenu = () => {
    if (this.state.showMenu === true) {
      TweenMax.fromTo(this.menuButton, 0.2, { scale: 1.1 }, { scale: 1 })
      TweenMax.staggerFromTo(
        this.menuItems,
        0.2,
        { autoAlpha: 1 },
        { autoAlpha: 0 },
        0.1
      )
    }

    this.setState({ showMenu: false })
  }
  /* <MenuItem ref={div => (this.menuItems[3] = div)}>
            <i className="fas fa-carrot" />
            <Link to="/" onClick={this.onClickScrollUp}>
              Comment Adhérer ?
            </Link>
          </MenuItem>
          <MenuItem ref={div => (this.menuItems[4] = div)}>
            <i className="fas fa-kiwi-bird" />
            <Link to="/" onClick={this.onClickScrollUp}>
              Comment Nous Soutenir ?
            </Link>
          </MenuItem> */
  render () {
    return (
      <div onMouseLeave={this.onLeaveHideMenu}>
        <MenuButton
          onMouseEnter={this.onEnterShowMenu}
          ref={div => (this.menuButton = div)}
          onTouchStart={this.onClickMenu}
        >
          <i className='fas fa-bars' />
          <span>Découvrir</span>
        </MenuButton>

        <Menu>
          <MenuItem ref={div => (this.menuItems[0] = div)}>
            <i className='fas fa-egg' />
            <Link to='/CocomposteCestQuoi' onClick={this.onClickScrollUp}>
              Cocomposte C'est Quoi ?
            </Link>
          </MenuItem>
          <MenuItem ref={div => (this.menuItems[1] = div)}>
            <i className='fas fa-smile-wink' />
            <Link to='/QuiSommesNous' onClick={this.onClickScrollUp}>
              Qui Sommes Nous ?
            </Link>
          </MenuItem>
          <MenuItem ref={div => (this.menuItems[2] = div)}>
            <i className='fas fa-handshake' />
            <Link to='/NosPartenaires' onClick={this.onClickScrollUp}>
              Nos Partenaires ?
            </Link>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
export default DropdownMenu

// Style

const MenuButton = styled.div`
  position: relative;
  margin-right: 1vw;
  margin-left: 2vw;
  height: 100%;
  font-size: calc(20px + 2.5vw);
  cursor: pointer;
  @media screen and (max-width: 350px) {
    font-size: 8.2vw;
  }
  i {
    font-size: calc(15px + 2vw);
    margin: 0.5vw;
  }
`
const Menu = styled.div`
  position: absolute;
  font-size: 30px;

  @media screen and (max-width: 680px) {
    font-size: calc(19.7px + 1.5vw);
  }
`
const MenuItem = styled.div`
  background-color: white;
  width: 300px;
  height: 70px;
  max-height: 17vw;
  max-width: 90vw;
  text-align: center;
  border-bottom: 1px solid #99c413;
  border-right: 2px solid #99c413;
  border-radius: 0% 30px 30px 0%;
  transition: 0.2s;

  cursor: pointer;

  a {
    display: inline-block;
    padding: 4% 0;

    text-decoration: none;
    color: black;
  }
  i {
    color: #99c413;
    margin-right: 5px;
  }
  &:hover {
    font-size: 35px;
    background-color: beige;

    @media screen and (max-width: 680px) {
      font-size: calc(24.7px + 1.5vw);
    }
  }
`
