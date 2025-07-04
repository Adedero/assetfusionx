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
                value: "max-w-5xl mx-auto pt-12 px-4 sm:px-6 lg:px-8 space-y-12"
            }
        ],
        children: [
            // Intro section
            {
                node: { type: "element", value: "div" },
                attr: [{ name: "class", value: "text-center space-y-4" }],
                children: [
                    {
                        node: { type: "element", value: "h1" },
                        attr: [
                            {
                                name: "class",
                                value: "text-2xl font-extrabold text-tertiary-500"
                            }
                        ],
                        children: [
                            {
                                node: {
                                    type: "text",
                                    value: "Partnerships that Power Progress"
                                }
                            }
                        ]
                    },
                    {
                        node: { type: "element", value: "p" },
                        attr: [
                            { name: "class", value: "text-slate-300 max-w-3xl mx-auto" }
                        ],
                        children: [
                            {
                                node: {
                                    type: "text",
                                    value: `At ${app_1.default.name}, we know that meaningful innovation doesn't happen in isolation. Our platform is built on a foundation of deep collaboration with leading technology providers, financial institutions, and data intelligence firms who share our vision for frictionless investing and responsible wealth creation.`
                                }
                            }
                        ]
                    }
                ]
            },
            // Highlighted quote
            {
                node: { type: "element", value: "blockquote" },
                attr: [
                    { name: "class", value: "flex items-center justify-center w-full" }
                ],
                children: [
                    {
                        node: { type: "element", value: "div" },
                        attr: [
                            {
                                name: "class",
                                value: "max-w-[28rem] bg-slate-800 rounded-lg p-6 border border-white/10 text-slate-200 italic text-center"
                            }
                        ],
                        children: [
                            {
                                node: {
                                    type: "text",
                                    value: "“The strength of our platform is a reflection of the extraordinary partners who help us imagine what's possible and bring it to life.”"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
exports.default = pageData;
