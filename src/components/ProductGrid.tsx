// Grade de cards; className opcional encaixa no carrossel (scroll horizontal)
import type { Product } from '../types/product'
import { ProductCard } from './ProductCard'

export interface ProductGridProps {
  products: Product[]
  onSelectProduct: (product: Product) => void
  className?: string
}

export function ProductGrid({ products, onSelectProduct, className }: ProductGridProps) {
  const gridClass = ['product-grid', className].filter(Boolean).join(' ')
  return (
    <ul className={gridClass} role="list">
      {products.map((p, i) => (
        <li key={`${i}-${p.productName}-${p.price}`} className="product-grid__item">
          <ProductCard product={p} onSelect={onSelectProduct} />
        </li>
      ))}
    </ul>
  )
}
