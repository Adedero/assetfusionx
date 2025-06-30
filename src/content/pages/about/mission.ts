import app from "#src/content/app";
import { JSONTree } from "#src/server/utils/helpers/json-to-html";

const pageData: JSONTree[] = [
  {
    node: { type: "element", value: "div" },
    attr: [{ name: "class", value: "min-h-screen bg-slate-900 text-slate-100" }],
    children: [
      {
        node: { type: "element", value: "div" },
        attr: [{ name: "class", value: "space-y-12 max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8" }],
        children: [
          // Core Mission Statement
          {
            node: { type: "element", value: "div" },
            attr: [{ name: "class", value: "bg-slate-800 rounded-2xl p-8 border border-slate-700" }],
            children: [
              {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "text-center space-y-6" }],
                children: [
                  {
                    node: { type: "element", value: "iconify-icon" },
                    attr: [
                      { name: "icon", value: "lucide:target" },
                      { name: "class", value: "text-6xl text-tertiary-500 mx-auto" }
                    ]
                  },
                  {
                    node: { type: "element", value: "h2" },
                    attr: [{ name: "class", value: "text-xl font-bold text-slate-50" }],
                    children: [
                      { node: { type: "text", value: "Empowering Financial Freedom" } }
                    ]
                  },
                  {
                    node: { type: "element", value: "p" },
                    attr: [{ name: "class", value: "text-slate-300 max-w-2xl mx-auto" }],
                    children: [
                      {
                        node: {
                          type: "text",
                          value: "We believe that building wealth shouldn't be a privilege reserved for the financial elite. Our mission is to level the playing field by providing intelligent, automated investment management that works tirelessly to grow your assets while you focus on what matters most to you."
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },

          // Our Vision
          {
            node: { type: "element", value: "div" },
            attr: [{ name: "class", value: "space-y-8" }],
            children: [
              {
                node: { type: "element", value: "h2" },
                attr: [{ name: "class", value: "text-xl font-bold text-slate-50 text-center" }],
                children: [
                  { node: { type: "text", value: "Our Vision for the Future" } }
                ]
              },
              {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "grid md:grid-cols-2 gap-8" }],
                children: [
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "space-y-4" }],
                    children: [
                      {
                        node: { type: "element", value: "h3" },
                        attr: [{ name: "class", value: "text-xl font-semibold text-tertiary-500" }],
                        children: [
                          { node: { type: "text", value: "A World Without Investment Barriers" } }
                        ]
                      },
                      {
                        node: { type: "element", value: "p" },
                        attr: [{ name: "class", value: "text-slate-300 leading-relaxed" }],
                        children: [
                          {
                            node: {
                              type: "text",
                              value: "We envision a future where anyone, regardless of their starting capital or financial knowledge, can access the same sophisticated investment strategies that were once exclusive to institutional investors and the wealthy."
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "space-y-4" }],
                    children: [
                      {
                        node: { type: "element", value: "h3" },
                        attr: [{ name: "class", value: "text-xl font-semibold text-tertiary-500" }],
                        children: [
                          { node: { type: "text", value: "Technology-Driven Transparency" } }
                        ]
                      },
                      {
                        node: { type: "element", value: "p" },
                        attr: [{ name: "class", value: "text-slate-300 leading-relaxed" }],
                        children: [
                          {
                            node: {
                              type: "text",
                              value: "By leveraging artificial intelligence and machine learning, we're building a platform that not only delivers superior returns but does so with complete transparency, giving you real-time insights into every decision made with your money."
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },

          // Core Values
          {
            node: { type: "element", value: "div" },
            attr: [{ name: "class", value: "space-y-8" }],
            children: [
              {
                node: { type: "element", value: "h2" },
                attr: [{ name: "class", value: "text-xl font-bold text-slate-50 text-center" }],
                children: [
                  { node: { type: "text", value: "Our Core Values" } }
                ]
              },
              {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "grid md:grid-cols-3 gap-6" }],
                children: [
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-tertiary-500 transition-colors" }],
                    children: [
                      {
                        node: { type: "element", value: "iconify-icon" },
                        attr: [
                          { name: "icon", value: "lucide:eye" },
                          { name: "class", value: "text-xl text-tertiary-500 mb-4" }
                        ]
                      },
                      {
                        node: { type: "element", value: "h3" },
                        attr: [{ name: "class", value: "font-semibold text-slate-50 mb-3" }],
                        children: [
                          { node: { type: "text", value: "Radical Transparency" } }
                        ]
                      },
                      {
                        node: { type: "element", value: "p" },
                        attr: [{ name: "class", value: "text-slate-300 text-sm" }],
                        children: [
                          { node: { type: "text", value: "Every fee, every trade, every algorithm decision is visible to you. No black boxes, no hidden agendas — just clear, honest communication about your investments." } }
                        ]
                      }
                    ]
                  },
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-tertiary-500 transition-colors" }],
                    children: [
                      {
                        node: { type: "element", value: "iconify-icon" },
                        attr: [
                          { name: "icon", value: "lucide:users" },
                          { name: "class", value: "text-xl text-tertiary-500 mb-4" }
                        ]
                      },
                      {
                        node: { type: "element", value: "h3" },
                        attr: [{ name: "class", value: "font-semibold text-slate-50 mb-3" }],
                        children: [
                          { node: { type: "text", value: "Client-First Approach" } }
                        ]
                      },
                      {
                        node: { type: "element", value: "p" },
                        attr: [{ name: "class", value: "text-slate-300 text-sm" }],
                        children: [
                          { node: { type: "text", value: "Your success is our success. We align our interests with yours through performance-based fees and a genuine commitment to growing your wealth." } }
                        ]
                      }
                    ]
                  },
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-tertiary-500 transition-colors" }],
                    children: [
                      {
                        node: { type: "element", value: "iconify-icon" },
                        attr: [
                          { name: "icon", value: "lucide:zap" },
                          { name: "class", value: "text-xl text-tertiary-500 mb-4" }
                        ]
                      },
                      {
                        node: { type: "element", value: "h3" },
                        attr: [{ name: "class", value: "font-semibold text-slate-50 mb-3" }],
                        children: [
                          { node: { type: "text", value: "Continuous Innovation" } }
                        ]
                      },
                      {
                        node: { type: "element", value: "p" },
                        attr: [{ name: "class", value: "text-slate-300 text-sm" }],
                        children: [
                          { node: { type: "text", value: "We constantly evolve our technology and strategies, staying ahead of market trends to deliver the best possible outcomes for our investors." } }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },

          // What Drives Us
          {
            node: { type: "element", value: "div" },
            attr: [{ name: "class", value: "bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600" }],
            children: [
              {
                node: { type: "element", value: "h2" },
                attr: [{ name: "class", value: "text-xl font-bold text-slate-50 mb-6 text-center" }],
                children: [
                  { node: { type: "text", value: "What Drives Us Every Day" } }
                ]
              },
              {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "space-y-6" }],
                children: [
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "flex items-start space-x-4" }],
                    children: [
                      {
                        node: { type: "element", value: "iconify-icon" },
                        attr: [
                          { name: "icon", value: "lucide:heart" },
                          { name: "class", value: "text-2xl text-tertiary-500 mt-1 flex-shrink-0" }
                        ]
                      },
                      {
                        node: { type: "element", value: "div" },
                        children: [
                          {
                            node: { type: "element", value: "h3" },
                            attr: [{ name: "class", value: "font-semibold text-tertiary-500 mb-2" }],
                            children: [
                              { node: { type: "text", value: "Passion for Financial Justice" } }
                            ]
                          },
                          {
                            node: { type: "element", value: "p" },
                            attr: [{ name: "class", value: "text-slate-300" }],
                            children: [
                              { node: { type: "text", value: "We're frustrated by a financial system that favors the already wealthy. Every feature we build, every algorithm we refine, is designed to give regular people the same advantages that institutional investors have enjoyed for decades." } }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "flex items-start space-x-4" }],
                    children: [
                      {
                        node: { type: "element", value: "iconify-icon" },
                        attr: [
                          { name: "icon", value: "lucide:trending-up" },
                          { name: "class", value: "text-2xl text-tertiary-500 mt-1 flex-shrink-0" }
                        ]
                      },
                      {
                        node: { type: "element", value: "div" },
                        children: [
                          {
                            node: { type: "element", value: "h3" },
                            attr: [{ name: "class", value: "font-semibold text-tertiary-500 mb-2" }],
                            children: [
                              { node: { type: "text", value: "Obsession with Performance" } }
                            ]
                          },
                          {
                            node: { type: "element", value: "p" },
                            attr: [{ name: "class", value: "text-slate-300" }],
                            children: [
                              { node: { type: "text", value: "We're not satisfied with market-average returns. Our team works around the clock to identify opportunities, optimize strategies, and deliver results that exceed your expectations and help you achieve your financial goals faster." } }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    node: { type: "element", value: "div" },
                    attr: [{ name: "class", value: "flex items-start space-x-4" }],
                    children: [
                      {
                        node: { type: "element", value: "iconify-icon" },
                        attr: [
                          { name: "icon", value: "lucide:shield" },
                          { name: "class", value: "text-2xl text-tertiary-500 mt-1 flex-shrink-0" }
                        ]
                      },
                      {
                        node: { type: "element", value: "div" },
                        children: [
                          {
                            node: { type: "element", value: "h3" },
                            attr: [{ name: "class", value: "font-semibold text-tertiary-500 mb-2" }],
                            children: [
                              { node: { type: "text", value: "Unwavering Commitment to Security" } }
                            ]
                          },
                          {
                            node: { type: "element", value: "p" },
                            attr: [{ name: "class", value: "text-slate-300" }],
                            children: [
                              { node: { type: "text", value: "Your trust is sacred to us. We implement military-grade security measures, maintain full regulatory compliance, and treat your financial data with the highest level of protection and confidentiality." } }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },

          // Our Promise
          {
            node: { type: "element", value: "div" },
            attr: [{ name: "class", value: "text-center space-y-8" }],
            children: [
              {
                node: { type: "element", value: "h2" },
                attr: [{ name: "class", value: "text-xl font-bold text-slate-50" }],
                children: [
                  { node: { type: "text", value: `The ${app.name} Promise` } }
                ]
              },
              {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "bg-slate-800 rounded-2xl p-8 border border-slate-700 max-w-3xl mx-auto" }],
                children: [
                  {
                    node: { type: "element", value: "p" },
                    attr: [{ name: "class", value: "text-slate-300 leading-relaxed mb-6" }],
                    children: [
                      {
                        node: {
                          type: "text",
                          value: "We promise to treat your money as if it were our own. To be transparent in all our dealings. To constantly innovate and improve. To put your interests first, always."
                        }
                      }
                    ]
                  },
                  {
                    node: { type: "element", value: "p" },
                    attr: [{ name: "class", value: "text-tertiary-500 font-semibold" }],
                    children: [
                      {
                        node: {
                          type: "text",
                          value: "Your financial success is not just our business — it's our mission."
                        }
                      }
                    ]
                  }
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