import app from "#src/content/app";
import { JSONTree } from "#src/server/utils/helpers/json-to-html";

const pageData: JSONTree[] = [
  {
    node: { type: "element", value: "div" },
    attr: [{ name: "class", value: "space-y-10 max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8" }],
    children: [
      // Origin Story
      {
        node: { type: "element", value: "p" },
        attr: [{ name: "class", value: "mt-4 text-lg" }],
        children: [
          {
            node: { type: "text", value: `${app.name} was born out of a vision to simplify the world of investing and make smart asset management accessible to everyone, regardless of financial background or expertise.` }
          }
        ]
      },
      {
        node: { type: "element", value: "img" },
        attr: [
          { name: "src", value: "/img/pages/about/our-journey.jpg" },
          { name: "alt", value: "Founders collaborating in early days" },
          { name: "class", value: "w-full rounded-lg shadow-lg" }
        ]
      },

      // Platform Philosophy
      {
        node: { type: "element", value: "div" },
        attr: [{ name: "class", value: "space-y-6" }],
        children: [
          {
            node: { type: "element", value: "h2" },
            attr: [{ name: "class", value: "text-2xl font-bold text-tertiary-500" }],
            children: [
              { node: { type: "text", value: "A Platform Built on Trust" } }
            ]
          },
          {
            node: { type: "element", value: "p" },
            children: [
              {
                node: {
                  type: "text",
                  value: `At our core, we believe that great investment opportunities shouldn't be locked behind complex jargon or exclusive financial clubs. That's why ${app.name} does the hard work for you — analyzing trends, selecting promising assets, and delivering returns without the stress of self-managed portfolios.`
                }
              }
            ]
          }
        ]
      },

      // Mission & Values
      {
        node: { type: "element", value: "div" },
        attr: [{ name: "class", value: "bg-gradient-to-b from-primary-500/10 border border-white/10 rounded-lg p-8" }],
        children: [
          {
            node: { type: "element", value: "h2" },
            attr: [{ name: "class", value: "text-2xl font-bold mb-6" }],
            children: [
              { node: { type: "text", value: "Our Mission & Core Values" } }
            ]
          },
          {
            node: { type: "element", value: "div" },
            attr: [{ name: "class", value: "grid md:grid-cols-2 gap-6" }],
            children: [
              {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "space-y-3" }],
                children: [
                  {
                    node: { type: "element", value: "h3" },
                    attr: [{ name: "class", value: "text-lg font-semibold text-tertiary-500" }],
                    children: [
                      { node: { type: "text", value: "Transparency First" } }
                    ]
                  },
                  {
                    node: { type: "element", value: "p" },
                    attr: [{ name: "class", value: "text-slate-300" }],
                    children: [
                      { node: { type: "text", value: "Every decision, every trade, every fee is clearly communicated. No hidden costs, no surprise charges, no unclear performance metrics." } }
                    ]
                  }
                ]
              },
              {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "space-y-3" }],
                children: [
                  {
                    node: { type: "element", value: "h3" },
                    attr: [{ name: "class", value: "text-lg font-semibold text-tertiary-500" }],
                    children: [
                      { node: { type: "text", value: "Innovation Through Technology" } }
                    ]
                  },
                  {
                    node: { type: "element", value: "p" },
                    attr: [{ name: "class", value: "text-slate-300" }],
                    children: [
                      { node: { type: "text", value: "Leveraging cutting-edge AI and machine learning to identify opportunities that traditional analysis might miss." } }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

      // Growth Story
      {
        node: { type: "element", value: "div" },
        attr: [{ name: "class", value: "space-y-4" }],
        children: [
          {
            node: { type: "element", value: "h2" },
            attr: [{ name: "class", value: "text-2xl text-tertiary-500 font-bold" }],
            children: [
              { node: { type: "text", value: "From Startup to Scalable Impact" } }
            ]
          },
          {
            node: { type: "element", value: "p" },
            children: [
              {
                node: {
                  type: "text",
                  value: "We started small — a passionate group of investment analysts, developers, and financial advisors frustrated with outdated, clunky platforms. Our first version was simple, but the mission was clear: remove friction, unlock performance. Today, we power hundreds of investment decisions daily and support a growing global user base."
                }
              }
            ]
          },
          {
            node: { type: "element", value: "p" },
            children: [
              {
                node: {
                  type: "text",
                  value: `From onboarding to payout, everything is streamlined. You choose your focus — we handle everything else. That's the ${app.name} promise.`
                }
              }
            ]
          }
        ]
      },

      // Statistics Section
      {
        node: { type: "element", value: "div" },
        attr: [{ name: "class", value: "bg-slate-800 rounded-lg p-8 text-white" }],
        children: [
          {
            node: { type: "element", value: "h2" },
            attr: [{ name: "class", value: "text-2xl font-bold text-center mb-8" }],
            children: [
              { node: { type: "text", value: "Our Track Record" } }
            ]
          },
          {
            node: { type: "element", value: "div" },
            attr: [{ name: "class", value: "grid grid-cols-2 md:grid-cols-4 gap-6 text-center" }],
            children: [
              {
                node: { type: "element", value: "div" },
                children: [
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "text-3xl font-bold text-blue-400" }],
                    children: [
                      { node: { type: "text", value: "$50M+" } }
                    ]
                  },
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "text-sm text-slate-300" }],
                    children: [
                      { node: { type: "text", value: "Assets Under Management" } }
                    ]
                  }
                ]
              },
              {
                node: { type: "element", value: "div" },
                children: [
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "text-3xl font-bold text-green-400" }],
                    children: [
                      { node: { type: "text", value: "15.2%" } }
                    ]
                  },
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "text-sm text-slate-300" }],
                    children: [
                      { node: { type: "text", value: "Average Annual Return" } }
                    ]
                  }
                ]
              },
              {
                node: { type: "element", value: "div" },
                children: [
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "text-3xl font-bold text-purple-400" }],
                    children: [
                      { node: { type: "text", value: "2,500+" } }
                    ]
                  },
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "text-sm text-slate-300" }],
                    children: [
                      { node: { type: "text", value: "Active Investors" } }
                    ]
                  }
                ]
              },
              {
                node: { type: "element", value: "div" },
                children: [
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "text-3xl font-bold text-yellow-400" }],
                    children: [
                      { node: { type: "text", value: "24/7" } }
                    ]
                  },
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "text-sm text-slate-300" }],
                    children: [
                      { node: { type: "text", value: "Market Monitoring" } }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

      // Technology Section
      {
        node: { type: "element", value: "div" },
        attr: [{ name: "class", value: "space-y-6" }],
        children: [
          {
            node: { type: "element", value: "h2" },
            attr: [{ name: "class", value: "text-2xl text-tertiary-500 font-bold" }],
            children: [
              { node: { type: "text", value: "Powered by Advanced Technology" } }
            ]
          },
          {
            node: { type: "element", value: "p" },
            attr: [{ name: "class", value: "text-slate-300" }],
            children: [
              {
                node: {
                  type: "text",
                  value: `${app.name} employs sophisticated algorithms and real-time market analysis to make investment decisions. Our proprietary risk assessment models continuously monitor market conditions, automatically adjusting portfolios to protect your investments while maximizing growth opportunities.`
                }
              }
            ]
          },
          {
            node: { type: "element", value: "div" },
            attr: [{ name: "class", value: "grid md:grid-cols-3 gap-6 mt-6" }],
            children: [
              {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "bg-white p-6 rounded-lg shadow-md border" }],
                children: [
                  {
                    node: { type: "element", value: "h3" },
                    attr: [{ name: "class", value: "font-semibold text-slate-800 mb-3" }],
                    children: [
                      { node: { type: "text", value: "AI-Driven Analysis" } }
                    ]
                  },
                  {
                    node: { type: "element", value: "p" },
                    attr: [{ name: "class", value: "text-sm text-slate-600" }],
                    children: [
                      { node: { type: "text", value: "Machine learning models process thousands of data points to identify emerging market trends and investment opportunities." } }
                    ]
                  }
                ]
              },
              {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "bg-white p-6 rounded-lg shadow-md border" }],
                children: [
                  {
                    node: { type: "element", value: "h3" },
                    attr: [{ name: "class", value: "font-semibold text-slate-800 mb-3" }],
                    children: [
                      { node: { type: "text", value: "Risk Management" } }
                    ]
                  },
                  {
                    node: { type: "element", value: "p" },
                    attr: [{ name: "class", value: "text-sm text-slate-600" }],
                    children: [
                      { node: { type: "text", value: "Dynamic portfolio rebalancing and stop-loss mechanisms protect your capital during market volatility." } }
                    ]
                  }
                ]
              },
              {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "bg-white p-6 rounded-lg shadow-md border" }],
                children: [
                  {
                    node: { type: "element", value: "h3" },
                    attr: [{ name: "class", value: "font-semibold text-slate-800 mb-3" }],
                    children: [
                      { node: { type: "text", value: "Real-Time Execution" } }
                    ]
                  },
                  {
                    node: { type: "element", value: "p" },
                    attr: [{ name: "class", value: "text-sm text-slate-600" }],
                    children: [
                      { node: { type: "text", value: "Lightning-fast trade execution ensures you never miss market opportunities or face unnecessary delays." } }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

      // Trust Factors
      {
        node: { type: "element", value: "div" },
        attr: [{ name: "class", value: "bg-slate-800 rounded-lg p-6 mt-10" }],
        children: [
          {
            node: { type: "element", value: "h2" },
            attr: [{ name: "class", value: "flex items-center gap-1 text-xl font-semibold text-white" }],
            children: [
              { 
                node: { 
                  type: "element", 
                  value: "iconify-icon" 
                },
                attr: [
                  { name: "icon", value: "lucide:badge-check" },
                  { name: "class", value: "text-green-400" }
                ]
              },
              { node: { type: "text", value: "Why People Trust Us" } }
            ]
          },
          {
            node: { type: "element", value: "ul" },
            attr: [{ name: "class", value: "list-disc list-inside mt-4 space-y-2 text-slate-300" }],
            children: [
              {
                node: { type: "element", value: "li" },
                children: [{ node: { type: "text", value: "Fully managed investments tailored to your risk tolerance and goals" } }]
              },
              {
                node: { type: "element", value: "li" },
                children: [{ node: { type: "text", value: "Transparent performance tracking and regular profit payouts" } }]
              },
              {
                node: { type: "element", value: "li" },
                children: [{ node: { type: "text", value: "Global asset diversification without the complexity" } }]
              },
              {
                node: { type: "element", value: "li" },
                children: [{ node: { type: "text", value: "Built-in risk protection and smart capital deployment" } }]
              },
              {
                node: { type: "element", value: "li" },
                children: [{ node: { type: "text", value: "SEC-compliant operations with full regulatory oversight" } }]
              },
              {
                node: { type: "element", value: "li" },
                children: [{ node: { type: "text", value: "24/7 customer support and dedicated account management" } }]
              }
            ]
          }
        ]
      },

      // Team Image
      {
        node: { type: "element", value: "img" },
        attr: [
          { name: "src", value: "/img/pages/about/team-at-work.jpg" },
          { name: "alt", value: `${app.name} team at work` },
          { name: "class", value: "w-full rounded-lg shadow-xl mt-8" }
        ]
      },

      // Security & Compliance
      {
        node: { type: "element", value: "div" },
        attr: [{ name: "class", value: "border-t border-t-white/20 pt-8 mt-8" }],
        children: [
          {
            node: { type: "element", value: "h2" },
            attr: [{ name: "class", value: "text-xl font-bold text-tertiary-500 mb-4" }],
            children: [
              { node: { type: "text", value: "Security & Compliance" } }
            ]
          },
          {
            node: { type: "element", value: "p" },
            attr: [{ name: "class", value: "text-slate-300 mb-4" }],
            children: [
              {
                node: {
                  type: "text",
                  value: `${app.name} maintains the highest standards of security and regulatory compliance. Your funds are protected by industry-leading encryption, segregated accounts, and comprehensive insurance coverage.`
                }
              }
            ]
          },
          {
            node: { type: "element", value: "div" },
            attr: [{ name: "class", value: "flex flex-wrap gap-4 text-sm text-slate-500" }],
            children: [
              {
                node: { type: "element", value: "span" },
                attr: [{ name: "class", value: "flex items-center gap-1" }],
                children: [
                  {
                    node: { type: "element", value: "iconify-icon" },
                    attr: [{ name: "icon", value: "lucide:shield-check" }]
                  },
                  { node: { type: "text", value: "SEC Registered" } }
                ]
              },
              {
                node: { type: "element", value: "span" },
                attr: [{ name: "class", value: "flex items-center gap-1" }],
                children: [
                  {
                    node: { type: "element", value: "iconify-icon" },
                    attr: [{ name: "icon", value: "lucide:lock" }]
                  },
                  { node: { type: "text", value: "Bank-Level Security" } }
                ]
              },
              {
                node: { type: "element", value: "span" },
                attr: [{ name: "class", value: "flex items-center gap-1" }],
                children: [
                  {
                    node: { type: "element", value: "iconify-icon" },
                    attr: [{ name: "icon", value: "lucide:umbrella" }]
                  },
                  { node: { type: "text", value: "SIPC Insured" } }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default pageData;