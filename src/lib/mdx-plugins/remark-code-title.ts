import type { Parent } from "unist";
import { visit } from "unist-util-visit";

export function remarkCodeTitles() {
  return (tree: Parent & { lang?: string }) =>
    visit(
      tree,
      "code",
      (node: Parent & { lang?: string }, index, parent: Parent) => {
        const nodeLang = node.lang || "";
        let language = "";
        let title = "";

        if (nodeLang.includes(":")) {
          language = nodeLang.slice(0, nodeLang.search(":"));
          title = nodeLang.slice(nodeLang.search(":") + 1, nodeLang.length);
        }

        if (!title) {
          return;
        }

        const containerClassName = "remark-code-title-container";
        const titleClassName = "remark-code-title";

        const titleNode = {
          type: "mdxJsxFlowElement",
          name: "div",
          attributes: [
            {
              type: "mdxJsxAttribute",
              name: "className",
              value: containerClassName,
            },
          ],
          children: [
            {
              type: "mdxJsxFlowElement",
              name: "span",
              attributes: [
                {
                  type: "mdxJsxAttribute",
                  name: "className",
                  value: titleClassName,
                },
              ],
              children: [{ type: "text", value: title }],
            },
          ],
          data: { _xdmExplicitJsx: true },
        };

        parent.children.splice(index, 0, titleNode);
        node.lang = language;
      }
    );
}