import React, { useEffect, useState } from 'react'
import Image, { type ImageProps } from 'next/image'

export const ImageCrossFade = ({ src, alt, className, ...props }: ImageProps) => {
  const [fadeIn, setFadeIn] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [loadedImage, setLoadedImage] = useState(src)

  useEffect(() => {
    setLoaded(false)
    setFadeIn(true)
  }, [src])

  return (
    <div className="absolute inset-0 isolate">
      {fadeIn && (
        <Image
          onLoad={() => {
            setLoaded(true)
            setTimeout(() => setLoadedImage(src), 500)
          }}
          src={src}
          alt={alt}
          {...props}
          className={`${className} z-10 transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      {loadedImage && (
        <Image
          alt={alt}
          onLoad={() => setFadeIn(false)}
          src={loadedImage}
          className={className}
          {...props}
        />
      )}
    </div>
  )
}
