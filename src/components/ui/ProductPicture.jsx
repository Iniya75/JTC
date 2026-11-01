import { images, productAlt } from '../../data/site.js'

export default function ProductPicture({ className, loading = 'lazy', alt = productAlt, ...props }) {
  return (
    <picture>
      <source srcSet={images.product.webp} type="image/webp" />
      <img
        src={images.product.png}
        alt={alt}
        width="722"
        height="1348"
        loading={loading}
        decoding="async"
        className={className}
        {...props}
      />
    </picture>
  )
}
