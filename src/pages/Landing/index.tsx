import * as S from './styles'

import { Button, Footer, Header } from '@/components'

const Landing = () => {
  return (
    <S.Landing>
      <Header />
      <HeroBanner />
      <Footer />
    </S.Landing>
  )
}

export default Landing

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

// // ============================================ VIEW

// interface IView {}

// const View = ({}: IView) => {
//   return <S.View></S.View>
// }
