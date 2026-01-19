import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold text-text-primary mb-6 mt-8 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-text-secondary leading-relaxed mb-4">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2 ml-4">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-text-secondary mb-4 space-y-2 ml-4">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-text-secondary leading-relaxed">
      {children}
    </li>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-accent pl-4 my-4 italic text-text-secondary">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    const isInline = !className
    if (isInline) {
      return (
        <code className="bg-bg-secondary px-2 py-1 rounded text-sm font-mono text-accent">
          {children}
        </code>
      )
    }
    return (
      <code className={className}>
        {children}
      </code>
    )
  },
  pre: ({ children }) => (
    <pre className="bg-bg-secondary border border-border rounded-lg p-4 mb-4 overflow-x-auto text-sm font-mono text-text-primary">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => (
    <figure className="my-6">
      <img
        src={src}
        alt={alt}
        className="rounded-lg border border-border"
        style={{ maxWidth: '375px', maxHeight: '500px', objectFit: 'contain' }}
      />
      {alt && (
        <figcaption className="text-center text-sm text-text-tertiary mt-2" style={{ maxWidth: '375px' }}>
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-text-primary">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic">
      {children}
    </em>
  ),
  hr: () => (
    <hr className="border-border my-8" />
  ),
}
