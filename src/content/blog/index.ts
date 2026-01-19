import ImitationLearning, { frontmatter as imitationFrontmatter } from './ImitationLearning.mdx'

export const blogPosts = [
  {
    slug: '',
    Component: ImitationLearning,
    ...imitationFrontmatter
  }
]

export type BlogPostMeta = typeof blogPosts[number]
