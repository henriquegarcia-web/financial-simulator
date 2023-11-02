import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { Avatar, Dropdown, type MenuProps, Menu, Spin } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

import { menus, menusData, privateMenus, rootSubmenuKeys } from '@/data/menus'

import { formatUsername } from '@/utils/functions/formatUsername'

const Admin = () => {
  const [openKeys, setOpenKeys] = useState(['sub1'])
  const [activeMenu, setActiveMenu] = useState<any>(null)
  const [activeView, setActiveView] = useState<any>(null)

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  function findObjectByKey(data: any, key: string) {
    const stack = [...data]
    while (stack.length > 0) {
      const current = stack.pop()
      if (current.key === key) {
        return current
      }
      if (current.children) {
        stack.push(...current.children)
      }
    }
    return null
  }

  function findComponentByKey(data: any, key: string) {
    const stack = [...data]
    while (stack.length > 0) {
      const current = stack.pop()
      if (current.key === key) {
        return current
      }
      if (current.menuSubmenus) {
        stack.push(...current.menuSubmenus)
      }
    }
    return null
  }

  const handleMenuClick = (key: string) => {
    const selectedMenu = findObjectByKey(menusData, key)
    setActiveMenu(selectedMenu)
  }

  useEffect(() => {
    handleMenuClick('menu_registers_01')
  }, [])

  useEffect(() => {
    if (!activeMenu) return

    const activeView = findComponentByKey(menus, activeMenu.key)

    console.log(activeView)

    setActiveView(activeView)
  }, [activeMenu])

  return (
    <S.Admin>
      <S.AdminHeader>
        <S.AdminHeaderLogo>
          <h1>MegaWatt</h1>
        </S.AdminHeaderLogo>
        <S.AdminHeaderTitle>{activeMenu?.label}</S.AdminHeaderTitle>
        <S.AdminHeaderUserMenu>
          <UserMenu />
        </S.AdminHeaderUserMenu>
      </S.AdminHeader>
      <S.AdminContainer>
        <S.AdminMenu>
          <Menu
            mode="inline"
            defaultSelectedKeys={['menu_registers_01']}
            defaultOpenKeys={['menu_registers']}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ width: 256 }}
            items={menusData}
            onClick={({ key }) => handleMenuClick(key)}
          />
        </S.AdminMenu>
        <S.AdminViews>
          <View viewInfos={activeView} />
        </S.AdminViews>
      </S.AdminContainer>
    </S.Admin>
  )
}

export default Admin

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
              navigate('/admin/entrar')
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
