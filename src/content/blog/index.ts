import ImitationLearning, { frontmatter as imitationFrontmatter } from './ImitationLearning.mdx'
import ACT_1, { frontmatter as act1Frontmatter } from './ACT_1.mdx'
import ACT_2, { frontmatter as act2Frontmatter } from './ACT_2.mdx'

export const blogPosts = [
  {
    slug: 'act-2',
    Component: ACT_2,
    ...act2Frontmatter
  },
  {
    slug: 'act-1',
    Component: ACT_1,
    ...act1Frontmatter
  },
  {
    slug: 'imitation-learning',
    Component: ImitationLearning,
    ...imitationFrontmatter
  }
]

export type BlogPostMeta = typeof blogPosts[number]
