"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("#src/content/app"));
const pageData = {
    heading: "Cryptocurrencies",
    subheading: `Tap into the decentralized financial revolution. Understand how crypto works, how it's evolving, and how ${app_1.default.name} simplifies your path into this exciting world.`,
    bgImage: "/img/pages/investments/cryptocurrencies.jpg"
};
exports.default = pageData;
