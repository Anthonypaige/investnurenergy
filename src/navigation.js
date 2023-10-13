import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Clean Energy Tax Credit',
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
      text: 'Energy Efficiency Tax Credit',
      links: [
        {
          text: 'Energy Efficient Home Upgrades',
          href: getPermalink('landing/energy-efficient-home-upgrades'),
        },
        {
          text: 'Heat Pumps',
          href: getPermalink('landing/heat-pump-page'),
        },
        {
          text: 'Water Heaters',
          href: getPermalink('landing/water-heaters-page'),
        },
        {
          text: 'Weatherization',
          href: getPermalink('landing/weatherization-page'),
        },
      ],
    },
    {
      text: 'Energy Efficient Rebates',
      links: [
        {
          text: 'Energy Efficient Rebates',
          href: getPermalink('energyefficientrebates/energy-efficient-rebates'),
        },
        {
          text: 'Smart Energy Devices',
          href: getPermalink('energyefficientrebates/smart-energy-devices'),
        },
      ],
    },
    //  {
    // text: 'Blog',
    // links: [
    //   {
    //     text: 'Blog List',
    //     href: getBlogPermalink(),
    //   },
    //   {
    //     text: 'Category Page',
    //     href: getPermalink('clean-energy', 'category'),
    //   },
    //   {
    //     text: 'Tag Page',
    //     href: getPermalink('tou-rates', 'tag'),
    //   },
  ],
};
// ],
// actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
// };

export const footerData = {
  links: [
    {
      title: 'Tax Code Breakdowns',
      links: [
        { text: 'Home Clean Energy Credit', href: 'investinyourenergy-home-clean-energy-credit' },
        { text: 'Energy Efficient Home Upgrades', href: 'investinyourenergy-energy-efficient-home-upgrades' },
        { text: 'Energy Efficient Rebates', href: 'investinyourenergy-energy-efficient-rebates' },
        
      ],
    },
    {
      title: 'Top Pages',
      links: [
        { text: 'Smart Energy Devices', href: 'investinyourenergy.com/smart-energy-devices' },
        { text: 'Home Energy Storage', href: 'investinyourenergy.com/home-energy-storage' },
        { text: 'Solar tax Incentive', href: 'investinyourenergy.com/solar-tax-incentive' },
        
      ],
    },
    {
      title: 'Clean Energy Pages',
      links: [
        { text: 'Solar Basics', href: 'investinyourenergy.com/solar-basics-page' },
        { text: 'Geothermal Energy', href: 'investinyourenergy.com/geothermal-page' },
        { text: 'Wind Energy', href: 'investinyourenergy.com/wind-energy-page' },
      ],
    },
    {
        title: 'Energy Efficiency Pages',
        links: [
          { text: 'Heat Pumps', href: 'investinyourenergy.com/heat-pump-page' },
          { text: 'Water Heaters', href: 'investinyourenergy.com/water-heaters-page' },
          { text: 'Weatherization', href: 'investinyourenergy.com/weatherization-page' },
        ],
    },
  ],
  secondaryLinks: [
    { text: 'About Us', href: getPermalink('/about-us') },
    { text: 'Contact Us', href: getPermalink('/contact-us') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/investnurenergy' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/InvestInYourEnergy' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};

// getBlogPermalink, getAsset
// { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
