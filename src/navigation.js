import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Clean Energy Tax Credits',
      links: [
        { text: 'Home Clean Energy Credit', href: getPermalink('/clean-energy/home-clean-energy-credit') },
        { text: 'Home Energy Storage', href: getPermalink('/clean-energy/home-energy-storage') },
        { text: 'Solar Basics', href: getPermalink('/clean-energy/solar-energy-basics') },
        { text: 'Solar Tax Incentive', href: getPermalink('/clean-energy/solar-tax-incentive') },
        { text: 'Geothermal Heat Pumps', href: getPermalink('/clean-energy/geothermal-heat-pumps') },
        { text: 'Wind Turbines', href: getPermalink('/clean-energy/wind-turbines') },
      ],
    },
    {
      text: 'Energy Efficiency Tax Credits',
      links: [
        {
          text: 'Energy Efficient Home Upgrades',
          href: getPermalink('/energy-efficient/energy-efficient-home-upgrades'),
        },
        { text: 'Air Source Heat Pumps', href: getPermalink('/energy-efficient/air-source-heat-pumps') },
        {
          text: 'Energy Efficient Water Heaters',
          href: getPermalink('/energy-efficient/energy-efficient-water-heaters'),
        },
        { text: 'Weatherization', href: getPermalink('/energy-efficient/weatherization') },
      ],
    },
    {
      text: 'State Level Rebates',
      links: [
        { text: 'Energy Efficient Rebates', href: getPermalink('/state-level-rebates/energy-efficient-rebates') },
        { text: 'Smart Energy Devices', href: getPermalink('/state-level-rebates/smart-energy-devices') },
      ],
    },
    {
      text: 'Shopping',
      links: [
        { text: 'Platform Picks', href: getPermalink('/shopping/platform-picks-for-best-products') },
        { text: 'Top Smart Thermostats', href: getPermalink('/shopping/top-smart-thermostats') },
        { text: 'Smart EV Chargers', href: getPermalink('/shopping/smart-ev-chargers') },
        { text: 'Portable Power Stations', href: getPermalink('/shopping/portable-power-stations') },
      ],
    },
    {
      text: 'Our Articles',
      links: [
        { text: 'Blog List', href: getBlogPermalink() },
        // { text: 'Category Page', href: getPermalink('home-clean-energy-credit', 'category') },
        // { text: 'Tag Page', href: getPermalink('solar-energy', 'tag') },
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Tax Code Breakdowns',
      links: [
        { text: 'Home Clean Energy Credit', href: getPermalink('/clean-energy/home-clean-energy-credit') },
        {
          text: 'Energy Efficient Home Upgrades',
          href: getPermalink('/energyefficient/energy-efficient-home-upgrades'),
        },
        { text: 'Energy Efficient Rebates', href: getPermalink('/energy-efficient-rebates/energy-efficient-rebates') },
      ],
    },
    {
      title: 'Top Pages',
      links: [
        { text: 'Smart Energy Devices', href: getPermalink('/energy-efficient-rebates/smart-energy-devices') },
        { text: 'Home Energy Storage', href: getPermalink('/clean-energy/home-energy-storage') },
        { text: 'Solar Tax Incentive', href: getPermalink('/clean-energy/solar-tax-incentive') },
        { text: 'Solar Basics', href: getPermalink('/clean-energy/solar-energy-basics') },
      ],
    },
    {
      title: 'Home Improvements',
      links: [
        { text: 'Geothermal Heat Pumps', href: getPermalink('/clean-energy/geothermal-heat-pumps') },
        { text: 'Wind Turbines', href: getPermalink('/clean-energy/wind-turbines') },
        { text: 'Air Source Heat Pumps', href: getPermalink('/energy-efficient/air-source-heat-pumps') },
        {
          text: 'Energy Efficient Water Heaters',
          href: getPermalink('/energy-efficient/energy-efficient-water-heaters'),
        },
      ],
    },
    {
      title: 'Shopping',
      links: [
        { text: 'Platform Picks', href: getPermalink('/shopping/platform-picks-for-best-products') },
        { text: 'Top Smart Thermostats', href: getPermalink('/shopping/top-smart-thermostats') },
        { text: 'Portable Power Stations', href: getPermalink('/shopping/portable-power-stations') },
        { text: 'Smart EV Chargers', href: getPermalink('/shopping/smart-ev-chargers') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Contact Us', href: getPermalink('/contact-us') },
    { text: 'About Us', href: getPermalink('/about-us') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/investnurenergy' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/InvestInYourEnergy' },
  ],
};
