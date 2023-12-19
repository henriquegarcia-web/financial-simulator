import * as S from './styles'

const Landing = () => {
  return (
    <S.Landing>
      <Header />
      <Footer />
    </S.Landing>
  )
}

export default Landing

// ============================================ VIEW

interface IView {
  viewInfos: any
}

const View = ({ viewInfos }: IView) => {
  return (
    <S.View>
      <S.ViewHeader>{viewInfos?.label}</S.ViewHeader>
      <S.ViewContent>{viewInfos?.label}</S.ViewContent>
    </S.View>
  )
}

// ============================================ HEADER

interface IHeader {}

export const Header = ({}: IHeader) => {
  return <S.Header></S.Header>
}

// ============================================ FOOTER

interface IFooter {}

export const Footer = ({}: IFooter) => {
  return <S.Footer></S.Footer>
}
