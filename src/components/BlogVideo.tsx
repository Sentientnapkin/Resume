import { useEffect, useRef, useState } from 'react'

const CLOUD_NAME = 'dkxuifil1'

interface BlogVideoProps {
  src: string // Cloudinary public ID, e.g., "blog/ACT_Training_1_1"
}

export function BlogVideo({ src }: BlogVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Cloudinary URLs with auto optimization
  const videoUrl = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto/${src}.mp4`
  const posterUrl = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0,f_jpg,q_auto/${src}.jpg`

  return (
    <div ref={containerRef}>
      {isVisible ? (
        <video
          controls
          poster={posterUrl}
          preload="metadata"
          style={{
            maxWidth: '375px',
            maxHeight: '500px',
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
            borderRadius: '0.5rem',
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div
          style={{
            maxWidth: '375px',
            height: '300px',
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
            borderRadius: '0.5rem',
            backgroundColor: '#1a1a1a',
          }}
        />
      )}
    </div>
  )
}
