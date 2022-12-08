import { visit } from "unist-util-visit";
import GithubSlugger from "github-slugger";
import { toString } from "mdast-util-to-string";
import { remark } from "remark";

import type { VFile } from "vfile";
import type { Parent } from "unist";
import type { Heading } from "mdast";

export type Toc = {
  value: string;
  depth: number;
  url: string;
}[];

export function remarkTocHeadings() {
  return (tree: Parent, file: VFile) => {
    const toc: Toc = [];
    visit(tree, "heading", (node: Heading) => {
      const textContent = toString(node);
      const slugger = new GithubSlugger();
      toc.push({
        value: textContent,
        url: "#" + slugger.slug(textContent),
        depth: node.depth,
      });
    });
    file.data.toc = toc;
  };
}

/**
 * Passes markdown file through remark to extract TOC headings
 *
 * @param {string} markdown
 * @return {*}  {Promise<Toc>}
 */
export async function extractTocHeadings(markdown: string): Promise<Toc> {
  const vfile = await remark().use(remarkTocHeadings).process(markdown);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return vfile.data.toc;
}
