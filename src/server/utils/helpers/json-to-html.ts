export interface JSONTree {
  node: {
    type: "element" | "text";
    value: string;
  };
  attr?: Array<{
    name: string;
    value?: string;
  }>;
  children?: JSONTree[];
}

export default function JSONToHTML(tree: JSONTree[]): string {
  let html = "";

  for (const node of tree) {
    const { node: nodeDef, attr = [], children = [] } = node;

    if (nodeDef.type === "text") {
      html += escapeHTML(nodeDef.value);
    } else if (nodeDef.type === "element") {
      const attrs = attr
        .map(({ name, value }) => ` ${name}="${escapeAttribute(value || "")}"`)
        .join("");

      const innerHTML = JSONToHTML(children);
      html += `<${nodeDef.value}${attrs}>${innerHTML}</${nodeDef.value}>`;
    } else {
      console.warn("Unknown node type:", nodeDef);
    }
  }

  return html;
}

function escapeHTML(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value: string): string {
  return value.replace(/"/g, "&quot;");
}
