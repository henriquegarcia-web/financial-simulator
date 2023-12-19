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

// ============================================ HERO BANNER

export const HeroBanner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
  padding: 20px;
`

export const HeroBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: ${landingWrapper};
`

export const HeroBannerImage = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const HeroBannerContent = styled.div`
  z-index: 20;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 60%;

  @media screen and (max-width: ${responsiveTablet}) {
    width: 100%;
  }
`

export const HeroBannerContentHeadline = styled.div`
  display: flex;

  font-size: 34px;
  font-weight: 500;
  letter-spacing: 0.5px;

  color: white;
`

export const HeroBannerContentLegend = styled.div`
  display: flex;

  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: 0.5px;

  color: white;
`

export const HeroBannerContentCta = styled.div`
  display: flex;
  margin-top: 20px;
`
