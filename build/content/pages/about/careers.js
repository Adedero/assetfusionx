"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("#src/content/app"));
const pageData = [
    {
        node: { type: "element", value: "div" },
        attr: [{ name: "class", value: "space-y-12 max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8" }],
        children: [
            // Hero Section
            {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "text-center space-y-8" }],
                children: [
                    {
                        node: { type: "element", value: "h1" },
                        attr: [{ name: "class", value: "text-5xl font-bold text-slate-900 sm:text-6xl" }],
                        children: [
                            { node: { type: "text", value: "Join Our Team" } }
                        ]
                    },
                    {
                        node: { type: "element", value: "p" },
                        attr: [{ name: "class", value: "text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed" }],
                        children: [
                            {
                                node: { type: "text", value: `Help us revolutionize investing at ${app_1.default.name}. We're building the future of wealth management and looking for passionate individuals to join our mission.` }
                            }
                        ]
                    },
                    {
                        node: { type: "element", value: "div" },
                        attr: [{ name: "class", value: "w-24 h-1 bg-blue-500 mx-auto rounded-full" }]
                    }
                ]
            },
            // Why Work With Us
            {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8" }],
                children: [
                    {
                        node: { type: "element", value: "h2" },
                        attr: [{ name: "class", value: "text-3xl font-bold text-slate-900 text-center mb-8" }],
                        children: [
                            { node: { type: "text", value: `Why Work at ${app_1.default.name}?` } }
                        ]
                    },
                    {
                        node: { type: "element", value: "div" },
                        attr: [{ name: "class", value: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" }],
                        children: [
                            {
                                node: { type: "element", value: "div" },
                                attr: [{ name: "class", value: "bg-white p-6 rounded-xl shadow-sm" }],
                                children: [
                                    {
                                        node: { type: "element", value: "iconify-icon" },
                                        attr: [
                                            { name: "icon", value: "lucide:rocket" },
                                            { name: "class", value: "text-4xl text-blue-500 mb-4" }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "h3" },
                                        attr: [{ name: "class", value: "text-xl font-semibold text-slate-900 mb-3" }],
                                        children: [
                                            { node: { type: "text", value: "Innovation at Scale" } }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "p" },
                                        attr: [{ name: "class", value: "text-slate-600" }],
                                        children: [
                                            { node: { type: "text", value: "Work with cutting-edge AI and machine learning technologies to solve real financial challenges for thousands of investors." } }
                                        ]
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "div" },
                                attr: [{ name: "class", value: "bg-white p-6 rounded-xl shadow-sm" }],
                                children: [
                                    {
                                        node: { type: "element", value: "iconify-icon" },
                                        attr: [
                                            { name: "icon", value: "lucide:trending-up" },
                                            { name: "class", value: "text-4xl text-green-500 mb-4" }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "h3" },
                                        attr: [{ name: "class", value: "text-xl font-semibold text-slate-900 mb-3" }],
                                        children: [
                                            { node: { type: "text", value: "Rapid Growth" } }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "p" },
                                        attr: [{ name: "class", value: "text-slate-600" }],
                                        children: [
                                            { node: { type: "text", value: "Join a fast-growing fintech company with unlimited potential for career advancement and professional development." } }
                                        ]
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "div" },
                                attr: [{ name: "class", value: "bg-white p-6 rounded-xl shadow-sm" }],
                                children: [
                                    {
                                        node: { type: "element", value: "iconify-icon" },
                                        attr: [
                                            { name: "icon", value: "lucide:heart" },
                                            { name: "class", value: "text-4xl text-red-500 mb-4" }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "h3" },
                                        attr: [{ name: "class", value: "text-xl font-semibold text-slate-900 mb-3" }],
                                        children: [
                                            { node: { type: "text", value: "Meaningful Impact" } }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "p" },
                                        attr: [{ name: "class", value: "text-slate-600" }],
                                        children: [
                                            { node: { type: "text", value: "Help democratize wealth building and make financial success accessible to everyone, not just the privileged few." } }
                                        ]
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "div" },
                                attr: [{ name: "class", value: "bg-white p-6 rounded-xl shadow-sm" }],
                                children: [
                                    {
                                        node: { type: "element", value: "iconify-icon" },
                                        attr: [
                                            { name: "icon", value: "lucide:users" },
                                            { name: "class", value: "text-4xl text-purple-500 mb-4" }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "h3" },
                                        attr: [{ name: "class", value: "text-xl font-semibold text-slate-900 mb-3" }],
                                        children: [
                                            { node: { type: "text", value: "Collaborative Culture" } }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "p" },
                                        attr: [{ name: "class", value: "text-slate-600" }],
                                        children: [
                                            { node: { type: "text", value: "Work alongside brilliant minds in a supportive environment that values diverse perspectives and creative problem-solving." } }
                                        ]
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "div" },
                                attr: [{ name: "class", value: "bg-white p-6 rounded-xl shadow-sm" }],
                                children: [
                                    {
                                        node: { type: "element", value: "iconify-icon" },
                                        attr: [
                                            { name: "icon", value: "lucide:dollar-sign" },
                                            { name: "class", value: "text-4xl text-yellow-500 mb-4" }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "h3" },
                                        attr: [{ name: "class", value: "text-xl font-semibold text-slate-900 mb-3" }],
                                        children: [
                                            { node: { type: "text", value: "Competitive Rewards" } }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "p" },
                                        attr: [{ name: "class", value: "text-slate-600" }],
                                        children: [
                                            { node: { type: "text", value: "Enjoy competitive salaries, equity participation, comprehensive benefits, and performance bonuses that reward excellence." } }
                                        ]
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "div" },
                                attr: [{ name: "class", value: "bg-white p-6 rounded-xl shadow-sm" }],
                                children: [
                                    {
                                        node: { type: "element", value: "iconify-icon" },
                                        attr: [
                                            { name: "icon", value: "lucide:globe" },
                                            { name: "class", value: "text-4xl text-indigo-500 mb-4" }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "h3" },
                                        attr: [{ name: "class", value: "text-xl font-semibold text-slate-900 mb-3" }],
                                        children: [
                                            { node: { type: "text", value: "Remote-First" } }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "p" },
                                        attr: [{ name: "class", value: "text-slate-600" }],
                                        children: [
                                            { node: { type: "text", value: "Work from anywhere with flexible schedules, modern tools, and a culture built around results, not hours logged." } }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            // Open Positions
            {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "space-y-8" }],
                children: [
                    {
                        node: { type: "element", value: "h2" },
                        attr: [{ name: "class", value: "text-3xl font-bold text-slate-900 text-center" }],
                        children: [
                            { node: { type: "text", value: "Open Positions" } }
                        ]
                    },
                    {
                        node: { type: "element", value: "div" },
                        attr: [{ name: "class", value: "space-y-4" }],
                        children: [
                            // Senior Software Engineer
                            {
                                node: { type: "element", value: "div" },
                                attr: [{ name: "class", value: "bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow" }],
                                children: [
                                    {
                                        node: { type: "element", value: "div" },
                                        attr: [{ name: "class", value: "flex flex-col md:flex-row md:items-center md:justify-between" }],
                                        children: [
                                            {
                                                node: { type: "element", value: "div" },
                                                attr: [{ name: "class", value: "space-y-2" }],
                                                children: [
                                                    {
                                                        node: { type: "element", value: "h3" },
                                                        attr: [{ name: "class", value: "text-xl font-semibold text-slate-900" }],
                                                        children: [
                                                            { node: { type: "text", value: "Senior Software Engineer - Backend" } }
                                                        ]
                                                    },
                                                    {
                                                        node: { type: "element", value: "div" },
                                                        attr: [{ name: "class", value: "flex flex-wrap gap-2" }],
                                                        children: [
                                                            {
                                                                node: { type: "element", value: "span" },
                                                                attr: [{ name: "class", value: "px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm" }],
                                                                children: [
                                                                    { node: { type: "text", value: "Engineering" } }
                                                                ]
                                                            },
                                                            {
                                                                node: { type: "element", value: "span" },
                                                                attr: [{ name: "class", value: "px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm" }],
                                                                children: [
                                                                    { node: { type: "text", value: "Full-time" } }
                                                                ]
                                                            },
                                                            {
                                                                node: { type: "element", value: "span" },
                                                                attr: [{ name: "class", value: "px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm" }],
                                                                children: [
                                                                    { node: { type: "text", value: "Remote" } }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        node: { type: "element", value: "p" },
                                                        attr: [{ name: "class", value: "text-slate-600" }],
                                                        children: [
                                                            { node: { type: "text", value: "Build scalable APIs and infrastructure for our investment platform. Work with Python, PostgreSQL, and cloud technologies." } }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                node: { type: "element", value: "a" },
                                                attr: [
                                                    { name: "href", value: "/careers/senior-software-engineer-backend" },
                                                    { name: "class", value: "mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center" }
                                                ],
                                                children: [
                                                    { node: { type: "text", value: "Apply Now" } }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            // Data Scientist
                            {
                                node: { type: "element", value: "div" },
                                attr: [{ name: "class", value: "bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow" }],
                                children: [
                                    {
                                        node: { type: "element", value: "div" },
                                        attr: [{ name: "class", value: "flex flex-col md:flex-row md:items-center md:justify-between" }],
                                        children: [
                                            {
                                                node: { type: "element", value: "div" },
                                                attr: [{ name: "class", value: "space-y-2" }],
                                                children: [
                                                    {
                                                        node: { type: "element", value: "h3" },
                                                        attr: [{ name: "class", value: "text-xl font-semibold text-slate-900" }],
                                                        children: [
                                                            { node: { type: "text", value: "Senior Data Scientist - ML/AI" } }
                                                        ]
                                                    },
                                                    {
                                                        node: { type: "element", value: "div" },
                                                        attr: [{ name: "class", value: "flex flex-wrap gap-2" }],
                                                        children: [
                                                            {
                                                                node: { type: "element", value: "span" },
                                                                attr: [{ name: "class", value: "px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm" }],
                                                                children: [
                                                                    { node: { type: "text", value: "Data Science" } }
                                                                ]
                                                            },
                                                            {
                                                                node: { type: "element", value: "span" },
                                                                attr: [{ name: "class", value: "px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm" }],
                                                                children: [
                                                                    { node: { type: "text", value: "Full-time" } }
                                                                ]
                                                            },
                                                            {
                                                                node: { type: "element", value: "span" },
                                                                attr: [{ name: "class", value: "px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm" }],
                                                                children: [
                                                                    { node: { type: "text", value: "Remote" } }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        node: { type: "element", value: "p" },
                                                        attr: [{ name: "class", value: "text-slate-600" }],
                                                        children: [
                                                            { node: { type: "text", value: "Develop predictive models and algorithms for investment strategies. Experience with TensorFlow, Python, and financial markets required." } }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                node: { type: "element", value: "a" },
                                                attr: [
                                                    { name: "href", value: "/careers/senior-data-scientist" },
                                                    { name: "class", value: "mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center" }
                                                ],
                                                children: [
                                                    { node: { type: "text", value: "Apply Now" } }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            // Product Manager
                            {
                                node: { type: "element", value: "div" },
                                attr: [{ name: "class", value: "bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow" }],
                                children: [
                                    {
                                        node: { type: "element", value: "div" },
                                        attr: [{ name: "class", value: "flex flex-col md:flex-row md:items-center md:justify-between" }],
                                        children: [
                                            {
                                                node: { type: "element", value: "div" },
                                                attr: [{ name: "class", value: "space-y-2" }],
                                                children: [
                                                    {
                                                        node: { type: "element", value: "h3" },
                                                        attr: [{ name: "class", value: "text-xl font-semibold text-slate-900" }],
                                                        children: [
                                                            { node: { type: "text", value: "Senior Product Manager" } }
                                                        ]
                                                    },
                                                    {
                                                        node: { type: "element", value: "div" },
                                                        attr: [{ name: "class", value: "flex flex-wrap gap-2" }],
                                                        children: [
                                                            {
                                                                node: { type: "element", value: "span" },
                                                                attr: [{ name: "class", value: "px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm" }],
                                                                children: [
                                                                    { node: { type: "text", value: "Product" } }
                                                                ]
                                                            },
                                                            {
                                                                node: { type: "element", value: "span" },
                                                                attr: [{ name: "class", value: "px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm" }],
                                                                children: [
                                                                    { node: { type: "text", value: "Full-time" } }
                                                                ]
                                                            },
                                                            {
                                                                node: { type: "element", value: "span" },
                                                                attr: [{ name: "class", value: "px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm" }],
                                                                children: [
                                                                    { node: { type: "text", value: "Remote" } }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        node: { type: "element", value: "p" },
                                                        attr: [{ name: "class", value: "text-slate-600" }],
                                                        children: [
                                                            { node: { type: "text", value: "Lead product strategy and execution for our investment platform. Drive user experience improvements and feature development." } }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                node: { type: "element", value: "a" },
                                                attr: [
                                                    { name: "href", value: "/careers/senior-product-manager" },
                                                    { name: "class", value: "mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center" }
                                                ],
                                                children: [
                                                    { node: { type: "text", value: "Apply Now" } }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            // DevOps Engineer
                            {
                                node: { type: "element", value: "div" },
                                attr: [{ name: "class", value: "bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow" }],
                                children: [
                                    {
                                        node: { type: "element", value: "div" },
                                        attr: [{ name: "class", value: "flex flex-col md:flex-row md:items-center md:justify-between" }],
                                        children: [
                                            {
                                                node: { type: "element", value: "div" },
                                                attr: [{ name: "class", value: "space-y-2" }],
                                                children: [
                                                    {
                                                        node: { type: "element", value: "h3" },
                                                        attr: [{ name: "class", value: "text-xl font-semibold text-slate-900" }],
                                                        children: [
                                                            { node: { type: "text", value: "DevOps Engineer" } }
                                                        ]
                                                    },
                                                    {
                                                        node: { type: "element", value: "div" },
                                                        attr: [{ name: "class", value: "flex flex-wrap gap-2" }],
                                                        children: [
                                                            {
                                                                node: { type: "element", value: "span" },
                                                                attr: [{ name: "class", value: "px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm" }],
                                                                children: [
                                                                    { node: { type: "text", value: "Infrastructure" } }
                                                                ]
                                                            },
                                                            {
                                                                node: { type: "element", value: "span" },
                                                                attr: [{ name: "class", value: "px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm" }],
                                                                children: [
                                                                    { node: { type: "text", value: "Full-time" } }
                                                                ]
                                                            },
                                                            {
                                                                node: { type: "element", value: "span" },
                                                                attr: [{ name: "class", value: "px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm" }],
                                                                children: [
                                                                    { node: { type: "text", value: "Remote" } }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        node: { type: "element", value: "p" },
                                                        attr: [{ name: "class", value: "text-slate-600" }],
                                                        children: [
                                                            { node: { type: "text", value: "Build and maintain our cloud infrastructure. Work with Kubernetes, AWS, and CI/CD pipelines to ensure platform reliability." } }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                node: { type: "element", value: "a" },
                                                attr: [
                                                    { name: "href", value: "/careers/devops-engineer" },
                                                    { name: "class", value: "mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center" }
                                                ],
                                                children: [
                                                    { node: { type: "text", value: "Apply Now" } }
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
            // Benefits & Perks
            {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "bg-slate-900 rounded-2xl p-8 text-white" }],
                children: [
                    {
                        node: { type: "element", value: "h2" },
                        attr: [{ name: "class", value: "text-3xl font-bold text-center mb-8" }],
                        children: [
                            { node: { type: "text", value: "Benefits & Perks" } }
                        ]
                    },
                    {
                        node: { type: "element", value: "div" },
                        attr: [{ name: "class", value: "grid md:grid-cols-2 gap-6" }],
                        children: [
                            {
                                node: { type: "element", value: "ul" },
                                attr: [{ name: "class", value: "space-y-3" }],
                                children: [
                                    {
                                        node: { type: "element", value: "li" },
                                        attr: [{ name: "class", value: "flex items-center space-x-3" }],
                                        children: [
                                            {
                                                node: { type: "element", value: "iconify-icon" },
                                                attr: [
                                                    { name: "icon", value: "lucide:check-circle" },
                                                    { name: "class", value: "text-green-400" }
                                                ]
                                            },
                                            { node: { type: "text", value: "Competitive salary + equity package" } }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "li" },
                                        attr: [{ name: "class", value: "flex items-center space-x-3" }],
                                        children: [
                                            {
                                                node: { type: "element", value: "iconify-icon" },
                                                attr: [
                                                    { name: "icon", value: "lucide:check-circle" },
                                                    { name: "class", value: "text-green-400" }
                                                ]
                                            },
                                            { node: { type: "text", value: "Comprehensive health, dental & vision insurance" } }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "li" },
                                        attr: [{ name: "class", value: "flex items-center space-x-3" }],
                                        children: [
                                            {
                                                node: { type: "element", value: "iconify-icon" },
                                                attr: [
                                                    { name: "icon", value: "lucide:check-circle" },
                                                    { name: "class", value: "text-green-400" }
                                                ]
                                            },
                                            { node: { type: "text", value: "Unlimited PTO policy" } }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "li" },
                                        attr: [{ name: "class", value: "flex items-center space-x-3" }],
                                        children: [
                                            {
                                                node: { type: "element", value: "iconify-icon" },
                                                attr: [
                                                    { name: "icon", value: "lucide:check-circle" },
                                                    { name: "class", value: "text-green-400" }
                                                ]
                                            },
                                            { node: { type: "text", value: "$5,000 annual learning & development budget" } }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "li" },
                                        attr: [{ name: "class", value: "flex items-center space-x-3" }],
                                        children: [
                                            {
                                                node: { type: "element", value: "iconify-icon" },
                                                attr: [
                                                    { name: "icon", value: "lucide:check-circle" },
                                                    { name: "class", value: "text-green-400" }
                                                ]
                                            },
                                            { node: { type: "text", value: "401(k) with company matching" } }
                                        ]
                                    }
                                ]
                            },
                            {
                                node: { type: "element", value: "ul" },
                                attr: [{ name: "class", value: "space-y-3" }],
                                children: [
                                    {
                                        node: { type: "element", value: "li" },
                                        attr: [{ name: "class", value: "flex items-center space-x-3" }],
                                        children: [
                                            {
                                                node: { type: "element", value: "iconify-icon" },
                                                attr: [
                                                    { name: "icon", value: "lucide:check-circle" },
                                                    { name: "class", value: "text-green-400" }
                                                ]
                                            },
                                            { node: { type: "text", value: "Remote work stipend for home office setup" } }
                                        ]
                                    },
                                    {
                                        node: { type: "element", value: "li" },
                                        attr: [{ name: "class", value: "flex items-center space-x-3" }],
                                        children: [
                                            {
                                                node: { type: "element", value: "iconify-icon" },
                                                attr: [
                                                    { name: "icon", value: "lucide:check-circle" },
                                                    { name: "class", value: "text-green-400" }
                                                ]
                                            },
                                            { node: { type: "text", value: "Flexible working hours across time zones" } }
                                        ]
                                    },
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
