import type { MenuProps } from 'antd'

export interface IMenu {
  label: string
  key: string
  children?: IMenu[]
}

const menus: MenuProps['items'] = [
  {
    label: 'Empréstimos',
    key: 'menu_loans',
    children: [
      {
        label: 'Empréstimo PJ sem garantia',
        key: 'menu_loans_pj'
      },
      {
        label: 'Empréstimo com garantia',
        key: 'menu_loans_guarantee',
        children: [
          {
            label: 'Imóveis',
            key: 'menu_loans_guarantee_immobile'
          },
          {
            label: 'Automóveis',
            key: 'menu_loans_guarantee_vehicle'
          },
          {
            label: 'Recebíveis',
            key: 'menu_loans_guarantee_receivables'
          }
        ]
      }
    ]
  },
  {
    label: 'Produtos e Serviços',
    key: 'menu_services',
    children: [
      {
        label: 'Negócios internacionais',
        key: 'menu_services_international_business'
      },
      {
        label: 'Consórcios',
        key: 'menu_services_consortium'
      }
    ]
  },
  {
    label: 'Sobre nós',
    key: 'menu_aboutus',
    children: [
      {
        label: 'Nossa cultura',
        key: 'menu_aboutus_culture'
      },
      {
        label: 'Visão, missão e valores',
        key: 'menu_aboutus_missions'
      },
      {
        label: 'Nosso time',
        key: 'menu_aboutus_squad'
      }
    ]
  }
]

export { menus }
