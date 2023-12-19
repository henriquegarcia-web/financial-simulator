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
  display: flex;
`
