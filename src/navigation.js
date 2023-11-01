import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Clean Energy Tax Credit',
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
      text: 'Energy Efficiency Tax Credit',
      links: [
        {
          text: 'Energy Efficient Home Upgrades',
          href: getPermalink('/energy-efficient/energy-efficient-home-upgrades'),
        },
        { text: 'Heat Pumps', href: getPermalink('/energy-efficient/air-source-heat-pumps') },
        { text: 'Water Heaters', href: getPermalink('/energy-efficient/energy-efficient-water-heaters') },
        { text: 'Weatherization', href: getPermalink('/energy-efficient/weatherization') },
      ],
    },
    {
      text: 'State Level Rebates',
      links: [
        { text: 'Energy Efficient Rebates', href: getPermalink('/energy-efficient-rebates/energy-efficient-rebates') },
        { text: 'Smart Energy Devices', href: getPermalink('/energy-efficient-rebates/smart-energy-devices') },
      ],
    },
    {
      text: 'Shopping',
      links: [
        { text: 'Affiliate Marketplace', href: getPermalink('/shopping/affiliate-marketplace') },
        { text: 'Top Smart Thermostats', href: getPermalink('/shopping/smart-thermostat-comparison-table') },
        { text: 'EV Chargers', href: getPermalink('/shopping/ev-charger-comparison-table') },
        { text: 'Portable Power Stations', href: getPermalink('/shopping/portable-power-stations-comparison-table') },
      ],
    },
    {
      text: 'Blog',
      links: [
        { text: 'Blog List', href: getBlogPermalink() },
        { text: 'Category Page', href: getPermalink('home-clean-energy-credit', 'category') },
        { text: 'Tag Page', href: getPermalink('solar-energy', 'tag') },
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
      title: 'Themed Pages',
      links: [
        { text: 'Geothermal Energy', href: getPermalink('/clean-energy/geothermal-heat-pumps') },
        { text: 'Wind Energy', href: getPermalink('/clean-energy/wind-turbines') },
        { text: 'Heat Pumps', href: getPermalink('/energy-efficient/air-source-heat-pumps') },
        { text: 'Water Heaters', href: getPermalink('/energy-efficient/energy-efficient-water-heaters') },
      ],
    },
    {
      title: 'Shopping',
      links: [
        { text: 'Affiliate Marketplace', href: getPermalink('/shopping/affiliate-marketplace') },
        { text: 'Top Smart Thermostats', href: getPermalink('/shopping/smart-thermostat-comparison-table') },
        { text: 'Portable Power Stations', href: getPermalink('/shopping/portable-power-stations-comparison-table') },
        { text: 'EV Chargers', href: getPermalink('/shopping/ev-charger-comparison-table') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Contact Us', href: getPermalink('/contact-us') },
    { text: 'About Us', href: getPermalink('/about-us') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#https://www.facebook.com/InvestInYourEnergy' },
  ],
};
