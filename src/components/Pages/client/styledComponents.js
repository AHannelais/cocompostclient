import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  margin-top: 5vw;
  margin-bottom: 5vw;
`;

export const TextAndImage = styled.div`
  display: flex;
  align-items: stretch;
  margin-left: -15px;
  margin-right: -15px;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    flex-direction: column-reverse;
  }
  div {
    margin-left: 8.33333%;
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
    }
  }
  img {
    display: block;
    max-width: 50%;
    object-fit: contain;
    margin-bottom: 0;
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
`;
export const Text = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: justify;

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
  }
`;
