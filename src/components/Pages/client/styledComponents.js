import styled from 'styled-components'

export const Title = styled.h2`
  text-align: center;
  margin-top: 5vw;
  margin-bottom: 5vw;
`
export const TitleH4 = styled.h4`
  text-align: center;
  margin-top: 5vw;
  margin-bottom: 5vw;
`
export const TextAndImage = styled.div`
  display: flex;
  align-items: stretch;
  margin-left: -15px;
  margin-right: -15px;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    flex-direction: ${props => (props.col ? 'column' : 'column-reverse')};
  }
  div {
    margin-left: 3%;
    margin-right: 3%;
    width: 33.33333%;
    align-self: center;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 15px;
    padding-right: 15px;
    flex: none;
    @media screen and (max-width: 950px) {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and (max-width: 680px) {
      padding-top: 15px;
      padding-bottom: 15px;
    }
    h4 {
      padding: 0;
      border: 0;
      font-weight: 500;
      line-height: 1.375;
      margin: 0 0 20px;
    }
    p {
      color: rgba(0, 0, 0, 0.5);
      letter-spacing: 0.2px;
      line-height: 28px;
      margin-top: 0;
      margin-bottom: 30px;
      @media screen and (min-width: 2000px) {
        line-height: calc(1.5vw - 2px);
      }
    }
  }
  img {
    display: block;
    max-width: 50%;
    max-height: 50vh;
    object-fit: contain;
    margin-bottom: 10px;
    align-self: stretch;
    padding-left: 15px;
    padding-right: 15px;
    @media screen and (max-width: 950px) {
      max-width: 80%;
      max-height: 30vh;
      margin-left: auto;
      margin-right: auto;
    }
  }
`

export const Text = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: justify;
  @media screen and (max-width: 950px) {
    text-align: left;
  }
  h4 {
    font-weight: 500;
    line-height: 1.375;
    margin: 0 0 20px;
  }
  p {
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 0.2px;
    line-height: 28px;
    margin-bottom: 30px;
    @media screen and (min-width: 2000px) {
      line-height: calc(1.5vw - 2px);
    }
  }
`

export const ImageWrapper = styled.div`
  cursor: pointer;
  margin: 5px 5px 5px 5px;
  height: 300px;
  position: relative;
  transition: all 0.2s;
  :hover {
    transform: scale(1.05);
  }
  @media screen and (min-width: 2000px) {
    height: calc(15vw);
  }
  @media screen and (max-width: 768px) {
    height: 200px;
  }
  @media screen and (max-width: 500px) {
    height: 66.7vw;
  }
  img {
    position: absolute;
    max-height: 100%;
    max-width: 100%;
    min-height: 100%;
    min-width: 100%;
    height: 100%;
    width: auto;
    left: 50%;
    top: 50%;
    border-radius: 5px;
    transform: translate(-50%, -50%);
  }
`
export const CarouselWrapper = styled.div`
  height: 400px;
  position: relative;
  align-self: center;
  width: 800px;
  background-color: rgb(250, 250, 250);
  border: 2px solid rgba(200, 200, 20, 0.5);
  border-radius: 5px;
  @media screen and (min-width: 2000px) {
    height: 20vw;
  }
  @media screen and (max-width: 768px) {
    height: 300px;
  }
  @media screen and (max-width: 500px) {
    height: 76.7vw;
  }
  div {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    align-self: center;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    flex: none;
  }
`
export const ArticleWrapper = styled.div`
  cursor: pointer;
  height: 350px;
  transition: all 0.2s;
  :hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 2000px) {
    height: 17.5vw;
  }
  @media screen and (max-width: 768px) {
    height: 200px;
  }
  @media screen and (max-width: 500px) {
    height: 66.7vw;
  }
  img {
    position: absolute;
    left: 50%;
    max-width: 70%;
    max-height: 70%;
    padding: 0;
    width: auto;
    transform: translate(-50%, 0);
  }
  div {
    position: absolute;
    text-align: center;
    bottom: 0;
    width: 100%;
    height: 30%;
  }
`
export const ContentWrapper = styled.div`
  align-items: flex-start;
`
