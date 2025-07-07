const routes = [
  {
    label: "About",
    children: [
      {
        label: "Our Story",
        to: "/about/story"
      },
      {
        label: "Our Mission",
        to: "/about/mission"
      },
      {
        label: "Careers",
        to: "/about/careers"
      },
      {
        label: "Partnerships",
        to: "/about/partnerships"
      }
    ]
  },
  {
    label: "Investments",
    children: [
      {
        label: "Stocks (Equities)",
        to: "/investments/stocks"
      },
      {
        label: "Cryptocurrencies",
        to: "/investments/cryptocurrencies"
      },
      {
        label: "Forex (Foreign Exchange)",
        to: "/investments/forex"
      },
      {
        label: "Commodities",
        to: "/investments/commodities"
      },
      {
        label: "Bonds (Fixed Income)",
        to: "/investments/bonds"
      },
      {
        label: "REITs (Real Estate Investment Trusts)",
        to: "/investments/reits"
      },
      {
        label: "Derivatives",
        to: "/investments/derivatives"
      }
    ]
  },
  {
    label: "Resources",
    children: [
      {
        label: "Market Insights",
        to: "/resources/market-insights"
      },
      {
        label: "Investor Education",
        to: "/resources/investor-education"
      },
      {
        label: "Platform Walkthroughs",
        to: "/resources/walkthroughs"
      },
      {
        label: "Risk Disclosure",
        to: "/resources/risk-disclosure"
      },
      {
        label: "Investment Strategies",
        to: "/resources/strategies"
      }
    ]
  },
  {
    label: "Impact",
    children: [
      {
        label: "Reviews",
        to: "/impact/reviews"
      },
      {
        label: "Sustainability",
        to: "/impact/sustainability"
      },
      {
        label: "Track Record",
        to: "/impact/track-record"
      },
      {
        label: "Social Responsibility",
        to: "/impact/social-responsibility"
      }
    ]
  },
  {
    label: "Legal",
    children: [
      {
        label: "Terms of Use",
        to: "/legal/terms-of-use"
      },
      {
        label: "Privacy Policy",
        to: "/legal/privacy-policy"
      }
    ]
  }
];

export default routes;
