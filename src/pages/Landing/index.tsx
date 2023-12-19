import { useState } from 'react'

import * as S from './styles'
import {
  HiBars3,
  HiXMark,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin
} from 'react-icons/hi2'

import { Button } from '@/components'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'

import { IMenu, menus } from '@/data/menus'
import { companyData, footerInformativeText } from '@/data/company'

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
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false)
  const [current, setCurrent] = useState('mail')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  const toggleMenuMobile = () => setIsMenuMobileOpen(!isMenuMobileOpen)

  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.HeaderLogo>
          <h1>LOGO AQUI</h1>
        </S.HeaderLogo>
        <S.HeaderNavigation>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={menus}
            style={{
              border: 'none',
              width: '100%',
              fontSize: 15,
              fontWeight: 300,
              justifyContent: 'flex-end'
            }}
          />
        </S.HeaderNavigation>
        <S.HeaderMenus>
          <Button
            type="primary"
            label="Simular Crédito"
            onClick={() => {}}
            withArrow
          />
        </S.HeaderMenus>

        <S.HeaderMobile onClick={toggleMenuMobile}>
          {isMenuMobileOpen ? <HiXMark /> : <HiBars3 />}
        </S.HeaderMobile>
      </S.HeaderWrapper>
      <S.HeaderMobileMenu opened={isMenuMobileOpen ? 1 : 0}>
        <S.HeaderMobileNavigation>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            items={menus}
            style={{
              border: 'none',
              width: '100%',
              fontSize: 15,
              fontWeight: 300,
              justifyContent: 'flex-end'
            }}
          />
        </S.HeaderMobileNavigation>
        <S.HeaderMobileMenus>
          <Button
            type="primary"
            label="Simular Crédito"
            onClick={() => {}}
            withArrow
          />
        </S.HeaderMobileMenus>
      </S.HeaderMobileMenu>
    </S.Header>
  )
}

// ============================================ FOOTER

interface IFooter {}

export const Footer = ({}: IFooter) => {
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
