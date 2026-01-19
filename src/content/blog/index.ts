import VlaIntuition, { frontmatter as vlaFrontmatter } from './vla-intuition.mdx'

export const blogPosts = [
  {
    slug: 'vla-intuition',
    Component: VlaIntuition,
    ...vlaFrontmatter
  }
]

export type BlogPostMeta = typeof blogPosts[number]
