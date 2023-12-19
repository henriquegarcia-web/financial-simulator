import { landingWrapper, responsiveMobile } from '@/utils/styles/globals'
import styled from 'styled-components'

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${landingWrapper};
  flex-direction: column;
`

export const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const FooterMainHeader = styled.div`
  display: flex;
  padding: 20px 20px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const FooterMainHeaderLogo = styled.div`
  display: flex;

  h1 {
    font-size: 22px;
    font-weight: 900;

    color: #2290ff;
  }
`

export const FooterMainContent = styled.div`
  display: flex;
  column-gap: 30px;
  padding: 30px 20px;

  @media screen and (max-width: ${responsiveMobile}) {
    flex-direction: column;
    row-gap: 30px;
  }
`

export const FooterMainContentNavigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 50%;

  @media screen and (max-width: ${responsiveMobile}) {
    width: 100%;
  }
`

export const ContentNavigation = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: calc(50% - 10px);

  b {
    margin-bottom: 5px;

    font-size: 16px;
    font-weight: 500;
  }

  p {
    font-size: 15px;
    font-weight: 300;
    transition: 0.3s;
    cursor: pointer;

    color: rgba(0, 0, 0, 0.7);

    &:hover {
      color: rgba(0, 0, 0, 1);
    }
  }

  @media screen and (max-width: ${responsiveMobile}) {
    width: 100%;

    align-items: center;
  }
`

export const FooterMainContentContact = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 50%;

  b {
    margin-bottom: -2px;

    font-size: 16px;
    font-weight: 500;
  }

  span {
    display: flex;
    align-items: center;
    column-gap: 8px;

    font-size: 15px;
    font-weight: 300;

    color: rgba(0, 0, 0, 0.9);

    p {
      flex: 1;
    }
  }

  svg {
    font-size: 18px;
  }

  @media screen and (max-width: ${responsiveMobile}) {
    width: 100%;

    align-items: center;
  }

  /* border: 1px solid red; */
`

export const FooterInformative = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background: -webkit-linear-gradient(
    left,
    rgb(17, 0, 85) 0%,
    rgb(17, 119, 221) 100%
  );
`

export const FooterInformativeContent = styled.div`
  display: flex;
  padding: 35px 20px 20px 20px;

  font-size: 11px;
  line-height: 16px;
  text-align: justify;

  color: white;
`

export const FooterInformativeFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 35px 20px;

  @media screen and (max-width: ${responsiveMobile}) {
    flex-direction: column;
    align-items: center;
    row-gap: 35px;
  }
`

export const FooterInformativeMenus = styled.div`
  display: flex;
  column-gap: 15px;
`

export const InformativeMenu = styled.a`
  display: flex;
  cursor: pointer;
  transition: 0.3s;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;

  color: rgba(255, 255, 255, 0.9);

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`

export const FooterInformativeStamps = styled.div`
  display: flex;

  img {
    /* height: 50px; */
  }
`
