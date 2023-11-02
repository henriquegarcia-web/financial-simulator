import {
  IoPeopleOutline,
  IoFileTrayFullOutline,
  IoExitOutline
} from 'react-icons/io5'

import type { MenuProps } from 'antd'
type MenuItem = Required<MenuProps>['items'][number]

export interface IMenu {
  menuId: string
  menuLabel: string
  menuIcon: any
  menuRender?: React.ReactNode
  menuDanger: boolean
}

const privateMenus: IMenu[] = [
  {
    menuId: 'sair',
    menuLabel: 'Sair',
    menuIcon: <IoExitOutline />,
    menuDanger: true
  }
]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const menusData: MenuItem[] = [
  getItem('Cadastros', 'menu_registers', <IoPeopleOutline />, [
    getItem('Cadastro de Clientes', 'menu_registers_01'),
    getItem('Cadastro de Fornecedores', 'menu_registers_02'),
    getItem('Cadastro de Equipamentos', 'menu_registers_03')
  ]),
  getItem('Projetos', 'menu_projects', <IoFileTrayFullOutline />, [
    getItem('Novo Projeto', 'menu_projects_01'),
    getItem('Consultar Projetos', 'menu_projects_02')
  ])
]

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

export { menusData, rootSubmenuKeys, getItem, privateMenus }
