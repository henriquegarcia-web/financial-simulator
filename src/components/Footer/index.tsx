import * as S from './styles'

import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin
} from 'react-icons/hi2'

import { menus } from '@/data/menus'
import { companyData, footerInformativeText } from '@/data/company'

interface IFooter {}

const Footer = ({}: IFooter) => {
  const { companyPhone, companyEmail, companyAddress, companyMedias } =
    companyData

  return (
    <S.Footer>
      <S.FooterMain>
        <S.FooterWrapper>
          <S.FooterMainHeader>
            <S.FooterMainHeaderLogo>
              <h1>LOGO AQUI</h1>
            </S.FooterMainHeaderLogo>
          </S.FooterMainHeader>
          <S.FooterMainContent>
            <S.FooterMainContentNavigation>
              {menus?.map((menu: any) => (
                <S.ContentNavigation key={menu?.key}>
                  <b>{menu?.label}</b>
                  {menu?.children?.map((children: any) => (
                    <p key={children?.key}>{children?.label}</p>
                  ))}
                </S.ContentNavigation>
              ))}
            </S.FooterMainContentNavigation>
            <S.FooterMainContentContact>
              <b>Fale conosco</b>
              <span>
                <HiOutlinePhone /> <p>{companyPhone}</p>
              </span>
              <span>
                <HiOutlineEnvelope /> <p>{companyEmail}</p>
              </span>
              <span>
                <HiOutlineMapPin />
                <p>{companyAddress}</p>
              </span>
            </S.FooterMainContentContact>
          </S.FooterMainContent>
        </S.FooterWrapper>
      </S.FooterMain>
      <S.FooterInformative>
        <S.FooterWrapper>
          <S.FooterInformativeContent>
            {footerInformativeText}
          </S.FooterInformativeContent>
          <S.FooterInformativeFooter>
            <S.FooterInformativeMenus>
              <S.InformativeMenu>Política de Privacidade</S.InformativeMenu>
              <S.InformativeMenu>Termos de Uso</S.InformativeMenu>
            </S.FooterInformativeMenus>
            <S.FooterInformativeStamps>
              <img src="/site_seguro.png" alt="" />
            </S.FooterInformativeStamps>
          </S.FooterInformativeFooter>
        </S.FooterWrapper>
      </S.FooterInformative>
    </S.Footer>
  )
}

export default Footer
