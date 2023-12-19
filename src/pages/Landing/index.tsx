import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { Avatar, Dropdown, type MenuProps, Spin } from 'antd'

import { privateMenus } from '@/data/menus'

import { formatUsername } from '@/utils/functions/formatUsername'

const Landing = () => {
  return <S.Landing></S.Landing>
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

// ============================================ USER MENU

export const UserMenu = () => {
  const navigate = useNavigate()

  const userName = 'Henrique Garcia'

  const formattedPrivateMenus: MenuProps['items'] = useMemo(() => {
    const transformedMenus = privateMenus.map((menu: any) => {
      return {
        label: menu.menuLabel,
        key: menu.menuId,
        icon: menu.menuIcon
      }
    })

    return transformedMenus
  }, [])

  return (
    <S.UserMenu>
      <Dropdown
        menu={{
          items: formattedPrivateMenus,
          onClick: (e) => {
            if (e.key === 'sair') {
              navigate('/Landing/entrar')
              return
            }
          }
        }}
      >
        <S.UserMenu>
          <S.UserMenuName>
            {!userName ? 'Carregando...' : userName}
          </S.UserMenuName>
          <Avatar
            size={28}
            style={{
              fontSize: 12,
              backgroundColor: '#fde3cf',
              color: '#f56a00'
            }}
          >
            {!userName ? (
              <Spin size="small" style={{ marginTop: '-4px' }} />
            ) : (
              formatUsername(userName)
            )}
          </Avatar>
        </S.UserMenu>
      </Dropdown>
    </S.UserMenu>
  )
}
