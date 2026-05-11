'use client'
import { useDeck } from '@/hooks/useDeck'

interface Props {
  slug: string
  alt: string
  width?: number
  height?: number
  style?: React.CSSProperties
  reversed?: boolean
}

export default function CardImage({ slug, alt, width, height, style, reversed }: Props) {
  const { cardSrc } = useDeck()

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={cardSrc(slug)}
      alt={alt}
      width={width}
      height={height}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        transform: reversed ? 'rotate(180deg)' : undefined,
        ...style,
      }}
    />
  )
}
