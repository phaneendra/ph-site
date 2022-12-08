import { makeSource } from 'contentlayer/source-files';
import path from 'path';
// Remark packages
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { remarkExtractFrontmatter, remarkCodeTitles, remarkImgToJsx } from './src/lib/mdx-plugins';
// Rehype packages
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypePresetMinify from 'rehype-preset-minify';

import * as documentTypes from './src/lib/content-layer';

const root = process.cwd();

export default makeSource({
  contentDirPath: 'data',
  documentTypes,
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [remarkExtractFrontmatter, remarkGfm, remarkCodeTitles, remarkMath, remarkImgToJsx],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, 'data') }],
      [rehypePrismPlus, { ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
});
