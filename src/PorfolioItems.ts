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
    company: 'Freesurf',
    job: 'Um Princípio de liberdade',
    link:
      'https://player.vimeo.com/video/443425341?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-2',
    company: 'Júnior Damiani',
    job: 'A Vida em Movimento',
    link:
      'https://player.vimeo.com/video/375627926?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-3',
    company: 'Jony',
    job: 'Videoclipe',
    link:
      'https://player.vimeo.com/video/443425008?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-4',
    company: 'Ahlma',
    job: 'Série Comercial - Ep.1',
    link:
      'https://player.vimeo.com/video/306053726?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-5',
    company: 'Ahlma',
    job: 'Série Comercial - Ep.2',
    link:
      'https://player.vimeo.com/video/306054048?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-6',
    company: 'Ahlma',
    job: 'Série Comercial - Ep.3',
    link:
      'https://player.vimeo.com/video/325870708?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-7',
    company: 'Freesurf',
    job: 'Lançamento Freesurf Mooving',
    link:
      'https://player.vimeo.com/video/272860752?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-8',
    company: 'TDK',
    job: 'CAP Operating System',
    link:
      'https://player.vimeo.com/video/394441015?title=0&byline=0&portrait=0',
  },
  {
    name: 'port-9',
    company: 'MARGE',
    job: 'Punk do Otário',
    link:
      'https://player.vimeo.com/video/474005250?title=0&byline=0&portrait=0',
  },
];

export default PortfolioItems;
