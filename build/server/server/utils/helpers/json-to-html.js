"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = JSONToHTML;
function JSONToHTML(tree) {
    let html = "";
    for (const node of tree) {
        const { node: nodeDef, attr = [], children = [] } = node;
        if (nodeDef.type === "text") {
            html += escapeHTML(nodeDef.value);
        }
        else if (nodeDef.type === "element") {
            const attrs = attr
                .map(({ name, value }) => ` ${name}="${escapeAttribute(value || "")}"`)
                .join("");
            const innerHTML = JSONToHTML(children);
            html += `<${nodeDef.value}${attrs}>${innerHTML}</${nodeDef.value}>`;
        }
        else {
            console.warn("Unknown node type:", nodeDef);
        }
    }
    return html;
}
function escapeHTML(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}
function escapeAttribute(value) {
    return value.replace(/"/g, "&quot;");
}
