import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { motion } from 'framer-motion'
import { blogPosts } from '../content/blog'
import { mdxComponents } from '../components/MDXComponents'

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-bg-primary text-text-primary px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-text-secondary mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/#blog"
            className="text-accent hover:underline"
          >
            ← Back to Writing
          </Link>
        </div>
      </div>
    )
  }

  const { Component, title, date, tags, readTime } = post

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <article className="px-8 py-24">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            <Link
              to="/#blog"
              className="text-text-tertiary hover:text-accent transition-colors font-mono text-sm"
            >
              ← Back to Writing
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              {title}
            </h1>
            <div className="flex flex-wrap gap-3 text-sm text-text-secondary font-mono mb-6">
              <span>{date}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-border text-text-tertiary rounded text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <MDXProvider components={mdxComponents}>
              <Component />
            </MDXProvider>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <Link
              to="/#blog"
              className="text-accent hover:underline font-mono text-sm"
            >
              ← Back to Writing
            </Link>
          </motion.footer>
        </div>
      </article>
    </div>
  )
}

export default BlogPost
