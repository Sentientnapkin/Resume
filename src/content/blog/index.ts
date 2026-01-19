import ImitationLearning, { frontmatter as imitationFrontmatter } from './ImitationLearning.mdx'
import ACT_1, { frontmatter as act1Frontmatter } from './ACT_1.mdx'

export const blogPosts = [
  {
    slug: 'imitation-learning',
    Component: ImitationLearning,
    ...imitationFrontmatter
  },
  {
    slug: 'act-1',
    Component: ACT_1,
    ...act1Frontmatter
  }
]

export type BlogPostMeta = typeof blogPosts[number]
