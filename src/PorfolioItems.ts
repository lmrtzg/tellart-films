export interface IPortfolioItems {
  name: string;
  company: string;
  job: string;
  link: string;
  image?: any;
}

const PortfolioItems: Array<IPortfolioItems> = [
  {
    name: 'port-1',
    company: 'Draken',
    job: 'Arte em Mandeira',
    link:
      'https://player.vimeo.com/video/534119407?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-2',
    company: 'Marge',
    job: 'Estagnação',
    link:
      'https://player.vimeo.com/video/534124829?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-3',
    company: 'Júnior Damiani',
    job: 'A Vida em Movimento',
    link:
      'https://player.vimeo.com/video/375627926?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-4',
    company: 'Jony',
    job: 'Videoclipe',
    link:
      'https://player.vimeo.com/video/443425008?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-5',
    company: 'TDK',
    job: 'CAP Operating System',
    link:
      'https://player.vimeo.com/video/394441015?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-6',
    company: 'MARGE',
    job: 'Punk do Otário',
    link:
      'https://player.vimeo.com/video/474005250?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-7',
    company: 'Sabores da Adri',
    job: 'Conheça os Sabores da Adri',
    link:
      'https://player.vimeo.com/video/508486454?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-8',
    company: 'Owell',
    job: 'You Make Your Own Swell',
    link:
      'https://player.vimeo.com/video/508484178?title=0&byline=0&portrait=0',
  },
];

export default PortfolioItems;
