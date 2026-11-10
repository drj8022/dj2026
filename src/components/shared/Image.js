import { default as NextImage } from 'next/image'

const Image = ({ 
  alternativeText,
  caption,
  className,
  // fill=true,
  height,
  id,
  loading='lazy',
  props,
  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  src,
  // style={position:'relative', minHeight: '150px'},
  width,
  url,
}) => {
  console.log(props)
  return (
    <div className={className}>
      <NextImage
        alt={alternativeText}
        // fill={fill}
        width={width}
        height={height}
        loading={loading}
        sizes={sizes}
        src={url || src}
        // style={{objectFit: "contain"}}
        {...props}
      />
      { caption &&
      <span>{ caption }</span>
      }
    </div>
  )
}

export default Image
