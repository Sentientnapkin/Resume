import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogPostMeta } from '../content/blog';

interface BlogCardProps {
  post: BlogPostMeta;
  index?: number;
}


const BlogCard: React.FC<BlogCardProps> = ({ post, index = 0 }) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.05 }}
        className="border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer"
      >
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-text-primary mb-2">{post.title}</h3>
          <div className="flex flex-wrap gap-3 text-sm text-text-secondary font-mono">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-text-secondary mb-4 leading-relaxed">{post.summary}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border border-border text-text-tertiary rounded text-xs font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </Link>
  );
};

export default BlogCard;
