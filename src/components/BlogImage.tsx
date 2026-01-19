const CLOUD_NAME = 'dkxuifil1'

interface BlogImageProps {
  src: string // Cloudinary public ID, e.g., "blog/Assembling_So101"
  alt?: string
}

export function BlogImage({ src, alt }: BlogImageProps) {
  // Cloudinary URL with auto optimization
  const imageUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${src}`

  return (
    <figure className="my-6">
      <img
        src={imageUrl}
        alt={alt}
        className="rounded-lg border border-border"
        style={{ maxWidth: '375px', maxHeight: '500px', objectFit: 'contain' }}
        loading="lazy"
      />
      {alt && (
        <figcaption
          className="text-center text-sm text-text-tertiary mt-2"
          style={{ maxWidth: '375px' }}
        >
          {alt}
        </figcaption>
      )}
    </figure>
  )
}
