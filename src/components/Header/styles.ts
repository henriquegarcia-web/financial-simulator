import {
  landingHeaderHeight,
  landingWrapper,
  responsiveMobile,
  responsiveTablet
} from '@/utils/styles/globals'
import styled from 'styled-components'

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
