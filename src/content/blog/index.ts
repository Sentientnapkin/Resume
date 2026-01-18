import VlaIntuition, { frontmatter as vlaFrontmatter } from './vla-intuition.mdx'
import RiscvFromScratch, { frontmatter as riscvFrontmatter } from './risc-v-from-scratch.mdx'

export const blogPosts = [
  {
    slug: 'vla-intuition',
    Component: VlaIntuition,
    ...vlaFrontmatter
  },
  {
    slug: 'risc-v-from-scratch',
    Component: RiscvFromScratch,
    ...riscvFrontmatter
  }
]

export type BlogPostMeta = typeof blogPosts[number]
