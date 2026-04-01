// Card da lista: clique dispara onSelect (App abre o modal com esse produto)
import type { Product } from '../types/product'
import { formatPriceBRL, formatTwoInstallments } from '../utils/formatPrice'

export interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__activate"
        onClick={() => onSelect(product)}
        aria-haspopup="dialog"
        aria-label={`${product.productName}, ${formatPriceBRL(product.price)}. Ver detalhes`}
      >
        <div className="product-card__image-wrap">
          <img
            className="product-card__image"
            src={product.photo}
            alt=""
            loading="lazy"
            width={200}
            height={200}
          />
        </div>
        <h3 className="product-card__title">{product.productName}</h3>
        <p className="product-card__price-row">{formatPriceBRL(product.price)}</p>
        <p className="product-card__installment">{formatTwoInstallments(product.price)}</p>
        <p className="product-card__shipping">Frete grátis</p>
        <span className="product-card__cta">Comprar</span>
      </button>
    </article>
  )
}
