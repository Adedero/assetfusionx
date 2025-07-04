"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("#src/content/app"));
const pageData = [
    {
        node: { type: "element", value: "div" },
        attr: [
            {
                name: "class",
                value: "max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-14"
            }
        ],
        children: [
            // Introduction
            {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "text-center space-y-4" }],
                children: []
            },
            // Hero Image
            {
                node: { type: "element", value: "img" },
                attr: [
                    { name: "src", value: "/img/investment/stocks/hero-chart.jpg" },
                    { name: "alt", value: "Stock market graph visualization" },
                    { name: "class", value: "rounded-xl shadow-lg w-full mt-8" }
                ]
            },
            // Philosophy
            {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "space-y-4" }],
                children: [
                    {
                        node: { type: "element", value: "div" },
                        attr: [
                            {
                                name: "class",
                                value: "bg-slate-900 border border-white/10 rounded-xl p-6 md:p-8 space-y-5"
                            }
                        ],
                        children: [
                            {
                                node: { type: "element", value: "h2" },
                                attr: [
                                    {
                                        name: "class",
                                        value: "text-2xl font-bold text-tertiary-500"
                                    }
                                ],
                                children: [
                                    {
                                        node: {
                                            type: "text",
                                            value: "Understanding Stocks: The Building Blocks of Wealth"
                                        }
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "p" },
                                attr: [
                                    { name: "class", value: "text-slate-300 leading-relaxed" }
                                ],
                                children: [
                                    {
                                        node: {
                                            type: "text",
                                            value: `Stocks represent fractional ownership in a company. When you buy a stock, you're buying a piece of that business — entitling you to potential dividends and future growth. As companies innovate, expand, and profit, their shareholders benefit from increased stock value.`
                                        }
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "p" },
                                attr: [
                                    { name: "class", value: "text-slate-300 leading-relaxed" }
                                ],
                                children: [
                                    {
                                        node: {
                                            type: "text",
                                            value: `Stocks are the foundation of most investment portfolios. They offer liquidity, long-term appreciation, and a hedge against inflation when approached with a disciplined strategy.`
                                        }
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "h3" },
                                attr: [
                                    {
                                        name: "class",
                                        value: "text-lg font-semibold text-tertiary-500 mt-4"
                                    }
                                ],
                                children: [{ node: { type: "text", value: "Types of Stocks" } }]
                            },
                            {
                                node: { type: "element", value: "ul" },
                                attr: [
                                    {
                                        name: "class",
                                        value: "list-disc list-inside text-slate-300 space-y-1"
                                    }
                                ],
                                children: [
                                    {
                                        node: { type: "element", value: "li" },
                                        children: [
                                            {
                                                node: {
                                                    type: "text",
                                                    value: "Common Stocks – Most widely held, granting voting rights and capital appreciation"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "li" },
                                        children: [
                                            {
                                                node: {
                                                    type: "text",
                                                    value: "Preferred Stocks – Offer fixed dividends and higher claim in case of liquidation"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "li" },
                                        children: [
                                            {
                                                node: {
                                                    type: "text",
                                                    value: "Growth Stocks – Focus on high potential future earnings, often reinvesting profits"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "li" },
                                        children: [
                                            {
                                                node: {
                                                    type: "text",
                                                    value: "Dividend Stocks – Provide regular income through company profit distributions"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "h3" },
                                attr: [
                                    {
                                        name: "class",
                                        value: "text-lg font-semibold text-tertiary-500 mt-4"
                                    }
                                ],
                                children: [{ node: { type: "text", value: "Risk and Reward" } }]
                            },
                            {
                                node: { type: "element", value: "p" },
                                attr: [{ name: "class", value: "text-slate-300" }],
                                children: [
                                    {
                                        node: {
                                            type: "text",
                                            value: `While stocks offer significant upside, they also carry risk due to market volatility, economic shifts, and company-specific performance. ${app_1.default.name} mitigates these risks through diversification, algorithmic checks, and constant rebalancing of your stock portfolio.`
                                        }
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "img" },
                                attr: [
                                    {
                                        name: "src",
                                        value: "/img/investment/stocks/stocks-explained.jpg"
                                    },
                                    { name: "alt", value: "Explaining stocks visually" },
                                    { name: "class", value: "rounded-lg mt-6 shadow-md w-full" }
                                ]
                            }
                        ]
                    },
                    {
                        node: { type: "element", value: "h2" },
                        attr: [
                            {
                                name: "class",
                                value: "text-2xl font-semibold text-tertiary-500"
                            }
                        ],
                        children: [
                            {
                                node: { type: "text", value: "Our Investment Philosophy" }
                            }
                        ]
                    },
                    {
                        node: { type: "element", value: "p" },
                        attr: [{ name: "class", value: "text-slate-300 leading-relaxed" }],
                        children: [
                            {
                                node: {
                                    type: "text",
                                    value: `${app_1.default.name} believes stock investing should be both data-driven and human-curated. Our investment team combines quantitative models with market experience to identify undervalued equities and sectors poised for growth. Each portfolio is constructed for resilience, growth, and clarity.`
                                }
                            }
                        ]
                    }
                ]
            },
            // Image: Analyst reviewing data
            {
                node: { type: "element", value: "img" },
                attr: [
                    { name: "src", value: "/img/investment/stocks/analyst.jpg" },
                    { name: "alt", value: "Analyst studying charts on multiple screens" },
                    { name: "class", value: "rounded-xl shadow-md w-full mt-6" }
                ]
            },
            // Investment Strategy
            {
                node: { type: "element", value: "div" },
                attr: [
                    {
                        name: "class",
                        value: "bg-slate-900 border border-white/10 rounded-xl p-8 space-y-6"
                    }
                ],
                children: [
                    {
                        node: { type: "element", value: "h3" },
                        attr: [{ name: "class", value: "text-xl font-bold text-white" }],
                        children: [{ node: { type: "text", value: "How We Pick Stocks" } }]
                    },
                    {
                        node: { type: "element", value: "ul" },
                        attr: [
                            {
                                name: "class",
                                value: "list-disc pl-5 text-slate-300 space-y-2"
                            }
                        ],
                        children: [
                            {
                                node: { type: "element", value: "li" },
                                children: [
                                    {
                                        node: {
                                            type: "text",
                                            value: "Fundamental analysis of revenue growth, earnings stability, and financial health"
                                        }
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "li" },
                                children: [
                                    {
                                        node: {
                                            type: "text",
                                            value: "Technical analysis using trend indicators and volume signals"
                                        }
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "li" },
                                children: [
                                    {
                                        node: {
                                            type: "text",
                                            value: "Sector rotation strategies to capture macroeconomic cycles"
                                        }
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "li" },
                                children: [
                                    {
                                        node: {
                                            type: "text",
                                            value: "AI forecasting for pattern recognition and risk assessment"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            // Portfolio Image
            {
                node: { type: "element", value: "img" },
                attr: [
                    { name: "src", value: "/img/investment/stocks/portfolio-view.jpg" },
                    { name: "alt", value: "User portfolio interface" },
                    { name: "class", value: "rounded-lg mt-8 shadow-lg" }
                ]
            },
            // Benefits
            {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "grid md:grid-cols-2 gap-8 mt-12" }],
                children: [
                    {
                        node: { type: "element", value: "div" },
                        attr: [{ name: "class", value: "space-y-3" }],
                        children: [
                            {
                                node: { type: "element", value: "h3" },
                                attr: [
                                    {
                                        name: "class",
                                        value: "text-lg font-medium text-tertiary-500"
                                    }
                                ],
                                children: [
                                    { node: { type: "text", value: "Full Transparency" } }
                                ]
                            },
                            {
                                node: { type: "element", value: "p" },
                                attr: [{ name: "class", value: "text-slate-300" }],
                                children: [
                                    {
                                        node: {
                                            type: "text",
                                            value: "Know exactly where your money is allocated, track every equity, and see detailed reports on performance and fees — updated in real time."
                                        }
                                    }
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
                                attr: [
                                    {
                                        name: "class",
                                        value: "text-lg font-medium text-tertiary-500"
                                    }
                                ],
                                children: [
                                    { node: { type: "text", value: "Tax Optimization" } }
                                ]
                            },
                            {
                                node: { type: "element", value: "p" },
                                attr: [{ name: "class", value: "text-slate-300" }],
                                children: [
                                    {
                                        node: {
                                            type: "text",
                                            value: "Our intelligent harvesting tools help minimize your tax burden, by offsetting gains with strategic losses and optimizing holding periods."
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            // Statistics
            {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "bg-slate-800 mt-16 p-8 rounded-xl" }],
                children: [
                    {
                        node: { type: "element", value: "div" },
                        attr: [
                            {
                                name: "class",
                                value: "grid md:grid-cols-4 gap-6 text-center text-white"
                            }
                        ],
                        children: [
                            {
                                node: { type: "element", value: "div" },
                                children: [
                                    {
                                        node: { type: "element", value: "div" },
                                        attr: [
                                            {
                                                name: "class",
                                                value: "text-3xl font-bold text-emerald-400"
                                            }
                                        ],
                                        children: [{ node: { type: "text", value: "92%" } }]
                                    },
                                    {
                                        node: { type: "element", value: "div" },
                                        attr: [{ name: "class", value: "text-sm text-slate-300" }],
                                        children: [
                                            {
                                                node: {
                                                    type: "text",
                                                    value: "Stock Portfolios Beating Index"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "div" },
                                children: [
                                    {
                                        node: { type: "element", value: "div" },
                                        attr: [
                                            {
                                                name: "class",
                                                value: "text-3xl font-bold text-blue-400"
                                            }
                                        ],
                                        children: [{ node: { type: "text", value: "$30M+" } }]
                                    },
                                    {
                                        node: { type: "element", value: "div" },
                                        attr: [{ name: "class", value: "text-sm text-slate-300" }],
                                        children: [
                                            { node: { type: "text", value: "Total Stock AUM" } }
                                        ]
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "div" },
                                children: [
                                    {
                                        node: { type: "element", value: "div" },
                                        attr: [
                                            {
                                                name: "class",
                                                value: "text-3xl font-bold text-yellow-400"
                                            }
                                        ],
                                        children: [{ node: { type: "text", value: "12.4%" } }]
                                    },
                                    {
                                        node: { type: "element", value: "div" },
                                        attr: [{ name: "class", value: "text-sm text-slate-300" }],
                                        children: [
                                            {
                                                node: {
                                                    type: "text",
                                                    value: "Average Annualized Return"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "div" },
                                children: [
                                    {
                                        node: { type: "element", value: "div" },
                                        attr: [
                                            {
                                                name: "class",
                                                value: "text-3xl font-bold text-pink-400"
                                            }
                                        ],
                                        children: [{ node: { type: "text", value: "1,800+" } }]
                                    },
                                    {
                                        node: { type: "element", value: "div" },
                                        attr: [{ name: "class", value: "text-sm text-slate-300" }],
                                        children: [
                                            {
                                                node: {
                                                    type: "text",
                                                    value: "Stock Investors Active Today"
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
exports.default = pageData;
