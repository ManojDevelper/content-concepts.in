import styled from "styled-components"
import * as palette from "../../styles/variables"

export const BannerSection = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 35px 40px;
  justify-content: space-between;
  @media (max-width: 750px) {
    flex-direction: column-reverse;
  }
  .ant-row {
    flex-wrap: nowrap;
    .resSection {
      position: relative;
      padding-right: 10%;
    }
    #view_prize Button {
      height: 48px;
      font-size: 16px;
      margin-top: 35px;
      .icon {
        margin: 0 0 0 10px;
      }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      flex-direction: column;
      #view_prize {
        margin: 43px auto 0 auto;
      }
      #view_prize Button {
        width: 69vw;
        height: 10vw;
        font-size: 3.2vw;
        margin: 3vw 0 0 9.5vw;
      }
      #view_prize Button:hover {
        width: 69vw;
      }
    }
  }
  .contentSection {
    padding: 9% 0 9% 2%;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      max-width: 400px;
      max-width: unset;
      padding: 4% 6% 12% 6%;
      margin: 0;
    }
    @media (min-width: 1500px) {
      max-width: 700px;
    }
  }
`

export const ContentContainer = styled.div`
  width: 750px;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: fit-content;
    width: 93vw;
    align-items: left;
  }
`

export const Content = styled.p`
  font-weight: 400;
  font-size: 1.9vw;
  line-height: 2.5vw;
  color: ${palette.PRIMARY_TXT_COLOR};
  width: 52vw;
  .typeAnimation {
    color: ${palette.HIGHLIGHT_TEXT};
    font-weight: bold;
    .typed-cursor {
      font-weight: normal;
    }
  }
  @media (max-width: 750px) {
    display: block;
    font-size: 3.7vw;
    width: 100%;
    line-height: 6vw;
  }
`

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2.5vw;
  .ant-btn {
    border-radius: 0.7vw;
    font-weight: normal;
    font-size: 1vw;
    line-height: auto;
    color: #333333;
    padding: 1vw 1.5vw;
    height: 3.5vw;
    border: 1px solid #1565c0;
    width: fit-content;
    margin-right: 1vw;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    .ant-btn {
      width: 82vw;
      height: 10vw;
      font-size: 3vw;
      margin-top: 3vw;
      border-radius: 1.6vw;
    }
  }
`

export const ImageContainer = styled.div`
  z-index: 0;
  width: 47vw;
  @media (max-width: 750px) {
    width: 82vw;
  }
`
