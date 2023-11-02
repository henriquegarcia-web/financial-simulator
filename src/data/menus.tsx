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

const menus = [
  {
    key: 'menu_registers',
    label: 'Cadastros',
    render: null,
    menuSubmenus: [
      {
        key: 'menu_registers_01',
        label: 'Cadastro de Clientes',
        render: <>Cadastro de Clientes Componente</>
      },
      {
        key: 'menu_registers_02',
        label: 'Cadastro de Fornecedores',
        render: <>Cadastro de Fornecedores Componente</>
      },
      {
        key: 'menu_registers_03',
        label: 'Cadastro de Equipamentos',
        render: <>Cadastro de Equipamentos Componente</>
      }
    ]
  },
  {
    key: 'menu_project',
    label: 'Projetos',
    render: null,
    menuSubmenus: [
      {
        key: 'menu_projects_01',
        label: 'Novo Projeto',
        render: <>Novo Projeto Componente</>
      },
      {
        key: 'menu_projects_02',
        label: 'Consultar Projetos',
        render: <>Consultar Projetos Componente</>
      }
    ]
  }
]

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

export { menus, menusData, rootSubmenuKeys, getItem, privateMenus }
