import ImitationLearning, { frontmatter as imitationFrontmatter } from './ImitationLearning.mdx'

export const blogPosts = [
  {
    slug: 'imitation-learning',
    Component: ImitationLearning,
    ...imitationFrontmatter
  }
]

export type BlogPostMeta = typeof blogPosts[number]
