import type { Parent, Node } from "unist";
import { visit } from "unist-util-visit";

const re = /\b([-\w]+(?![^{]*}))(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g;

interface Element extends Parent {
  type: "element";
  tagName: string;
  properties: Record<string, unknown>;
  content: Node;
  children: Array<Node>;
}

export const rehypeMetaAttribute = (options = {}) => {
  return (tree: Parent) => {
    visit(tree, "element", visitor);
  };

  function visitor(node: Element, index: never, parentNode: Element) {
    let match;

    if (node.tagName === "code" && node.data && node.data.meta) {
      re.lastIndex = 0; // Reset regex.
      console.log("node.data.meta", node.data.meta);

      while ((match = re.exec(node.data.meta))) {
        parentNode.properties[match[1]] =
          match[2] || match[3] || match[4] || "";
      }
    }
  }
};
