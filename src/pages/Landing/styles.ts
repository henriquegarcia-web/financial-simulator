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

// ============================================ HEADER SECTION

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

export const SectionHeaderLabel = styled.div`
  display: flex;

  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  color: #02a9dd;
`

export const SectionHeaderTitle = styled.div`
  display: flex;

  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.5px;

  color: rgba(0, 0, 0, 0.85);
`

export const SectionHeaderLegend = styled.div`
  display: flex;
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

// ============================================ SERVICES SECTION

export const ServicesSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
`

export const ServicesSectionWrapper = styled.div`
  display: flex;
  column-gap: 30px;
  width: 100%;
  max-width: ${landingWrapper};
`

export const ServicesSectionImage = styled.div`
  display: flex;
  width: 480px;
  height: 480px;
`

export const ServicesSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  row-gap: 10px;
`

export const Service = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding: 20px;
  cursor: pointer;
  transition: 0.3s;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    svg {
      opacity: 1;
    }

    background-color: rgba(0, 0, 0, 0.03);
  }
`

export const ServiceImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  border-radius: 6px;

  background-color: #02a9dd;

  svg {
    font-size: 30px;
    color: white;
  }
`

export const ServiceDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  row-gap: 5px;

  b {
    font-size: 18px;
    font-weight: 400;
  }

  p {
    font-size: 15px;
    font-weight: 300;
  }
`

export const ServiceIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  svg {
    transition: 0.3s;
    opacity: 0.6;

    font-size: 22px;
  }
`

// ============================================ PARTNERS SECTION

export const PartnersSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    &::after {
      font-size: 26px;
    }
  }

  .swiper-button-prev {
    left: -5px;
  }

  .swiper-button-next {
    right: -5px;
  }
`

export const PartnersSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${landingWrapper};
`

// ============================================ FAQ SECTION

interface IFaq {
  active: number
}

export const FaqSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
`

export const FaqSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 100%;
  max-width: ${landingWrapper};
`

export const FaqSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

export const Faq = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const FaqCard = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 20px;
  cursor: pointer;
`

export const FaqCardQuestion = styled.div<IFaq>`
  display: flex;
  flex: 1;
  transition: 0.2s;

  font-size: 16px;
  font-weight: ${({ active }) => (active ? '400' : '400')};

  color: ${({ active }) => (active ? '#02a9dd' : 'rgba(0, 0, 0, 0.8)')};
`

export const FaqCardToggle = styled.div<IFaq>`
  display: flex;

  svg {
    transition: 0.3s;
    transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0)')};

    font-size: 20px;
    color: ${({ active }) => (active ? '#02a9dd' : 'rgba(0, 0, 0, 0.8)')};
  }
`

export const FaqAnswer = styled.div`
  display: flex;
  padding: 0 20px 20px 20px;

  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  color: rgba(0, 0, 0, 0.8);
`
