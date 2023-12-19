import { useState } from 'react'

import * as S from './styles'

import { Button } from 'antd'

const adminMenus = [
  {
    adminMenuId: 'menu_simutator',
    adminMenuLabel: 'Simulador'
  },
  {
    adminMenuId: 'menu_styles',
    adminMenuLabel: 'Estilos'
  }
]

const Admin = () => {
  const [activeMenu, setActiveMenu] = useState(adminMenus[0].adminMenuId)

  return (
    <S.Admin>
      <S.AdminContainer>
        <S.AdminContainerMenu>
          {adminMenus.map((adminMenu) => {
            const isActive = adminMenu.adminMenuId === activeMenu
            return (
              <Button
                type={isActive ? 'primary' : 'default'}
                onClick={() => setActiveMenu(adminMenu.adminMenuId)}
              >
                {adminMenu.adminMenuLabel}
              </Button>
            )
          })}
        </S.AdminContainerMenu>
        <S.AdminContainerContent>
          {activeMenu === 'menu_simutator' && <SimulatorMenu />}
          {activeMenu === 'menu_styles' && <StylingMenu />}
        </S.AdminContainerContent>
      </S.AdminContainer>
    </S.Admin>
  )
}

export default Admin

// ============================================ SIMULATOR MENU

interface ISimulatorMenu {}

const SimulatorMenu = ({}: ISimulatorMenu) => {
  return <S.SimulatorMenu>index</S.SimulatorMenu>
}

// ============================================ STYLING MENU

interface IStylingMenu {}

const StylingMenu = ({}: IStylingMenu) => {
  return <S.StylingMenu>index</S.StylingMenu>
}
