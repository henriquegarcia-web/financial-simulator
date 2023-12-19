import * as S from './styles'

import { Footer, Header } from '@/components'

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
  return <S.HeroBanner></S.HeroBanner>
}

// // ============================================ VIEW

// interface IView {}

// const View = ({}: IView) => {
//   return <S.View></S.View>
// }
