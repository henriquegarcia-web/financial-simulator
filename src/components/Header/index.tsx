import { useState } from 'react'

import * as S from './styles'
import { HiBars3, HiXMark } from 'react-icons/hi2'

import { Button } from '@/components'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'

import { menus } from '@/data/menus'

interface IHeader {}

const Header = ({}: IHeader) => {
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
export default Header
