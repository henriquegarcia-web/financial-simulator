import { responsiveMobile, responsiveTablet } from '@/utils/styles/globals'
import styled, { css } from 'styled-components'

const landingHeaderHeight = '80px'
const landingWrapper = '1000px'

export const Landing = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding-top: ${landingHeaderHeight};
`

// ============================================ HEADER

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${landingHeaderHeight};
  padding: 0 20px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const HeaderWrapper = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  width: 100%;
  max-width: ${landingWrapper};
  height: 100%;

  background-color: white;
`

export const HeaderLogo = styled.div`
  display: flex;

  h1 {
    font-size: 22px;
    font-weight: 900;

    color: #2290ff;
  }
`

export const HeaderNavigation = styled.div`
  display: flex;
  margin-left: auto;
  width: fit-content;
  min-width: 500px;
  justify-content: flex-end;
  height: 100%;

  li {
    padding: 0 10px !important;
  }

  .ant-menu-item,
  .ant-menu-submenu {
    display: flex;
    align-items: center;
  }

  .ant-menu-item::after {
    inset-inline: 8px !important;
  }

  @media screen and (max-width: ${responsiveTablet}) {
    display: none;
  }
`

export const HeaderMenus = styled.div`
  display: flex;

  @media screen and (max-width: ${responsiveTablet}) {
    display: none;
  }
`

export const HeaderMobile = styled.div`
  display: none;
  cursor: pointer;

  svg {
    font-size: 26px;
  }

  @media screen and (max-width: ${responsiveTablet}) {
    display: flex;
  }
`

interface IHeaderMobile {
  opened: number
}

export const HeaderMobileMenu = styled.div<IHeaderMobile>`
  z-index: 50;
  position: absolute;
  left: 0;
  top: ${({ opened }) => (opened ? 'calc(100% + 1px)' : '-500%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;
  width: 100%;
  padding: 20px;
  transition: 0.3s;

  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const HeaderMobileNavigation = styled.div`
  display: flex;
  width: 100%;
  max-width: 380px;
`

export const HeaderMobileMenus = styled.div`
  display: flex;
  width: 100%;
  max-width: 380px;

  button {
    width: 100%;
  }
`

// ============================================ FOOTER

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

// ============================================ VIEW

export const View = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: 6px;

  border: 1px solid rgba(0, 0, 0, 0.15);
`

export const ViewHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 10px 0;

  font-size: 17px;
  font-weight: 500;

  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`

export const ViewContent = styled.div`
  display: flex;
  flex: 1;
`
