import 'swiper/css'
import 'swiper/css/navigation'

import * as S from './styles'
import { HiChevronRight, HiChevronUp, HiChevronDown } from 'react-icons/hi2'

import { Button, Footer, Header } from '@/components'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import { faqData, partnersData, servicesData } from '@/data/landing'
import { useState } from 'react'

const Landing = () => {
  return (
    <S.Landing>
      <Header />
      <HeroBanner />
      <ServicesSection />
      <PartnersSection />
      <FaqSection />
      <Footer />
    </S.Landing>
  )
}

export default Landing

// ============================================ HEADER SECTION

interface ISectionHeader {
  label?: string
  title?: string
  legend?: string
}

const SectionHeader = ({ label, title, legend }: ISectionHeader) => {
  return (
    <S.SectionHeader>
      <S.SectionHeaderLabel>{label}</S.SectionHeaderLabel>
      <S.SectionHeaderTitle>{title}</S.SectionHeaderTitle>
      <S.SectionHeaderLegend>{legend}</S.SectionHeaderLegend>
    </S.SectionHeader>
  )
}

// ============================================ HERO BANNER

interface IHeroBanner {}

const HeroBanner = ({}: IHeroBanner) => {
  return (
    <S.HeroBanner>
      <S.HeroBannerWrapper>
        <S.HeroBannerImage>
          <img src="/hero_banner.png" alt="" />
        </S.HeroBannerImage>
        <S.HeroBannerContent>
          <S.HeroBannerContentHeadline>
            Veniam, adipisci aut molestiae eius omnis quia quasi quam.
          </S.HeroBannerContentHeadline>
          <S.HeroBannerContentLegend>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            dignissimos perferendis impedit reprehenderit, quisquam atque
            molestias, velit, voluptatum repudiandae praesentium excepturi!
          </S.HeroBannerContentLegend>
          <S.HeroBannerContentCta>
            <Button
              type="secondary"
              label="Empréstimo Empresarial"
              onClick={() => {}}
              withArrow
            />
          </S.HeroBannerContentCta>
        </S.HeroBannerContent>
      </S.HeroBannerWrapper>
    </S.HeroBanner>
  )
}

// ============================================ SERVICES SECTION

interface IServicesSection {}

const ServicesSection = ({}: IServicesSection) => {
  return (
    <S.ServicesSection>
      <S.ServicesSectionWrapper>
        <S.ServicesSectionImage>
          <img src="/section_banner.png" alt="" />
        </S.ServicesSectionImage>
        <S.ServicesSectionContent>
          {servicesData.map((service: any) => (
            <S.Service key={service.serviceId}>
              <S.ServiceImage>{service.serviceIcon}</S.ServiceImage>
              <S.ServiceDetails>
                <b>{service.serviceTitle}</b>
                <p>{service.serviceLegend}</p>
              </S.ServiceDetails>
              <S.ServiceIcon>
                <HiChevronRight />
              </S.ServiceIcon>
            </S.Service>
          ))}
        </S.ServicesSectionContent>
      </S.ServicesSectionWrapper>
    </S.ServicesSection>
  )
}

// ============================================ PARTNERS SECTION

interface IPartnersSection {}

const PartnersSection = ({}: IPartnersSection) => {
  return (
    <S.PartnersSection>
      <S.PartnersSectionWrapper>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          {partnersData.map((partner: any) => (
            <SwiperSlide key={partner}>
              <img src={partner} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.PartnersSectionWrapper>
    </S.PartnersSection>
  )
}

// ============================================ FAQ SECTION

interface IFaqSection {}

const FaqSection = ({}: IFaqSection) => {
  return (
    <S.FaqSection>
      <S.FaqSectionWrapper>
        <SectionHeader label="Ajuda" title="Perguntas frequentes" />
        <S.FaqSectionContainer>
          {faqData.map((faq: any) => (
            <Faq key={faq.faqId} faq={faq} />
          ))}
        </S.FaqSectionContainer>
      </S.FaqSectionWrapper>
    </S.FaqSection>
  )
}

// ============================================ FAQ CARD

interface IFaq {
  faq: any
}

const Faq = ({ faq }: IFaq) => {
  const [isFaqOpen, setIsFaqOpen] = useState(false)

  const toggleFaq = () => setIsFaqOpen(!isFaqOpen)

  return (
    <S.Faq>
      <S.FaqCard onClick={toggleFaq}>
        <S.FaqCardQuestion active={isFaqOpen ? 1 : 0}>
          {faq.faqQuestion}
        </S.FaqCardQuestion>
        <S.FaqCardToggle active={isFaqOpen ? 1 : 0}>
          <HiChevronDown />
        </S.FaqCardToggle>
      </S.FaqCard>
      {isFaqOpen && <S.FaqAnswer>{faq.faqAnswer}</S.FaqAnswer>}
    </S.Faq>
  )
}
