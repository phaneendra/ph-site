import type { Parent } from "unist";
import type { VFile } from "vfile";
import { visit } from "unist-util-visit";
import { load } from "js-yaml";

export function remarkExtractFrontmatter() {
  return (tree: Parent, file: VFile) => {
    visit(tree, "yaml", (node: Parent) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      file.data.frontmatter = load(node.value);
    });
  };
}
