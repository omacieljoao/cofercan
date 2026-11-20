import images from '../../images'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import './ProductCard.css'

function ProductCard({ product, index }) {
  const number = String(index + 1).padStart(2, '0')
  const whatsappUrl = buildWhatsAppUrl(`Olá, gostaria de orçar ${product.quoteName}`)

  return (
    <article className="product-card">
      <div className="product-card__body">
        <span className="product-card__number" aria-hidden="true">
          {number}
        </span>
        <div className="product-card__media">
          <img
            className="product-card__image"
            src={images[product.image]}
            alt={product.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__description">{product.description}</p>
      </div>
      <div className="product-card__footer">
        <a
          className="product-card__link"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Orçar ${product.quoteName} pelo WhatsApp`}
        >
          <span>ORÇAR ESTE PRODUTO</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="product-card__accent" aria-hidden="true" />
    </article>
  )
}

export default ProductCard
