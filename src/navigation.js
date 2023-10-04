import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Clean Energy',
      links: [
        {
          text: 'Home Clean Energy Credit',
          href: getPermalink('/cleanenergy/home-clean-energy-credit'),
        },
        {
          text: 'Home Energy Storage',
          href: getPermalink('/cleanenergy/home-energy-storage'),
        },
        {
          text: 'Solar Basics',
          href: getPermalink('cleanenergy/solar-basics-page'),
        },
        {
          text: 'Solar Tax Incentive',
          href: getPermalink('/cleanenergy/solar-tax-incentive'),
        },
        {
          text: 'Geothermal Heat Pumps',
          href: getPermalink('cleanenergy/geothermal-page'),
        },
        {
          text: 'Residential Wind Turbines',
          href: getPermalink('/cleanenergy/wind-energy-page'),
        },
      ],
    },
    {
      text: 'Energy Efficiency',
      links: [
        {
          text: 'Energy Efficient Home Upgrades',
          href: getPermalink('landing/energy-efficient-home-upgrades'),
        },
        {
          text: 'Energy Efficient Rebates',
          href: getPermalink('landing/energy-efficient-rebates'),
        },
        {
          text: 'Smart Energy Devices',
          href: getPermalink('landing/smart-energy-devices'),
        },

        {
          text: 'Weatherization',
          href: getPermalink('landing/weatherization-page'),
        },
        {
          text: 'Heat Pumps',
          href: getPermalink('landing/heat-pump-page'),
        },
        {
          text: 'Water Heaters',
          href: getPermalink('landing/water-heaters-page'),
        },

        // {
        //   text: 'EV Charger Comparison Table',
        //   href: getPermalink('/landing/ev-charger-comparison-table'),
        // },
        // {
        //   text: 'Smart Thermostat Comparison Table',
        //   href: getPermalink('/landing/smart-thermostat-comparison-table'),
        // },
      ],
    },
    {
      text: 'About Us',
      links: [
        {
          text: 'Subscription',
          href: getPermalink('/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Category Page',
          href: getPermalink('clean energy', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
