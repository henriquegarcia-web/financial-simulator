import {
  IoCardOutline,
  IoBusinessOutline,
  IoCashOutline,
  IoCalendarOutline
} from 'react-icons/io5'

const servicesData = [
  {
    serviceId: 'service_loans_without_guarantee',
    serviceTitle: 'Crédito sem garantia',
    serviceLegend: 'Capital de Giro, simples e rápido e 100% online.',
    serviceIcon: <IoCardOutline />,
    servicePath: 'credito-sem-garantia'
  },
  {
    serviceId: 'service_loans_with_guarantee',
    serviceTitle: 'Crédito com garantia',
    serviceLegend:
      'Use seu imóvel ou veículo como garantia e tenha até 240 meses para pagar.',
    serviceIcon: <IoBusinessOutline />,
    servicePath: 'credito-com-garantia'
  },
  {
    serviceId: 'service_international_business',
    serviceTitle: 'Negócios Internacionais',
    serviceLegend:
      'Câmbio, Trade Finance e outras soluções para importadores e exportadores',
    serviceIcon: <IoCashOutline />,
    servicePath: 'negocios-internacionais'
  },
  {
    serviceId: 'service_consortium',
    serviceTitle: 'Consórcio',
    serviceLegend:
      'Planeje a aquisição do seu carro ou da sua casa escolhendo o prazo e a parcela que cabem no seu bolso.',
    serviceIcon: <IoCalendarOutline />,
    servicePath: 'consorcio'
  }
]

const partnersData = [
  '/partners/partner_01.svg',
  '/partners/partner_02.svg',
  '/partners/partner_03.svg',
  '/partners/partner_04.svg',
  '/partners/partner_05.svg',
  '/partners/partner_06.svg',
  '/partners/partner_07.svg',
  '/partners/partner_08.svg'
]

const faqData = [
  {
    faqId: 'faq_01',
    faqQuestion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
    faqAnswer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi similique molestias nulla, id aut, illo sed amet at ut alias harum vero quae qui. Fuga atque officiis adipisci ipsum!'
  },
  {
    faqId: 'faq_02',
    faqQuestion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
    faqAnswer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi similique molestias nulla, id aut, illo sed amet at ut alias harum vero quae qui. Fuga atque officiis adipisci ipsum!'
  },
  {
    faqId: 'faq_03',
    faqQuestion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
    faqAnswer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi similique molestias nulla, id aut, illo sed amet at ut alias harum vero quae qui. Fuga atque officiis adipisci ipsum!'
  },
  {
    faqId: 'faq_04',
    faqQuestion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
    faqAnswer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi similique molestias nulla, id aut, illo sed amet at ut alias harum vero quae qui. Fuga atque officiis adipisci ipsum!'
  },
  {
    faqId: 'faq_05',
    faqQuestion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
    faqAnswer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi similique molestias nulla, id aut, illo sed amet at ut alias harum vero quae qui. Fuga atque officiis adipisci ipsum!'
  }
]

export { servicesData, partnersData, faqData }
