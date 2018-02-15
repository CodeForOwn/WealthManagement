export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Reports'
  },
  {
    name: 'Recommendations',
    url: '/reports/recommendations',
    icon: 'icon-notebook',
    children: [
      {
        name: 'Grid View',
        url: '/reports/recommendations/gridview',
        icon: 'icon-grid'
      },
      {
        name: 'Chart View',
        url: '/reports/recommendations/chartview',
        icon: 'icon-graph'
      }
    ]
  },
  {
    name: 'Portfolio',
    url: '/reports/portfolio',
    icon: 'icon-briefcase',
    children: [
      {
        name: 'Equity',
        url: '/reports/portfolio/equity',
        icon: 'icon-badge'
      },
      {
        name: 'Mutual Funds',
        url: '/reports/portfolio/mutualfunds',
        icon: 'icon-wallet'
      },
      {
        name: 'Charts',
        url: '/reports/portfolio/charts',
        icon: 'fa-bar-chart'
      }
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Forms',
  },
  {
    name: 'New',
    url: '/forms',
    icon: 'icon-star',
    children: [
      {
        name: 'Recommendation',
        url: '/forms/recommendation',
        icon: 'icon-star'
      },
      {
        name: 'Portfolio Item',
        url: '/forms/portfolio',
        icon: 'icon-star'
      }
    ]
  }
];
