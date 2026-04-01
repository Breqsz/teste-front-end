// Vitrine: abas só mudam estado local (não filtram); variant primary exibe loading/erro
import { useState } from 'react'
import type { Product } from '../types/product'
import { ProductCarousel } from './ProductCarousel'
import { ProductGrid } from './ProductGrid'

const TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'] as const

export interface ProductSectionProps {
  products: Product[]
  loading: boolean
  error: string | null
  onSelectProduct: (p: Product) => void
  variant?: 'primary' | 'repeat'
  sectionId?: string
}

export function ProductSection({
  products,
  loading,
  error,
  onSelectProduct,
  variant = 'primary',
  sectionId = 'related-products-title',
}: ProductSectionProps) {
  const [tab, setTab] = useState<(typeof TABS)[number]>('Celular')
  const showStatus = variant === 'primary'

  return (
    <section className="product-section" aria-labelledby={sectionId}>
      <div className="container">
        <h2 id={sectionId} className="product-section__title">
          <span className="product-section__title-rule" aria-hidden="true" />
          <span className="product-section__title-text">Produtos relacionados</span>
          <span className="product-section__title-rule" aria-hidden="true" />
        </h2>
        <div className="product-tabs" role="tablist" aria-label="Filtro por categoria">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              className={`product-tabs__tab${tab === t ? ' product-tabs__tab--active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
        {showStatus && loading ? <p className="showcase__state showcase__state--center">Carregando produtos…</p> : null}
        {showStatus && error ? (
          <p className="showcase__state showcase__state--error showcase__state--center" role="alert">
            {error}
          </p>
        ) : null}
        {!loading && !error && products.length > 0 ? (
          <ProductCarousel>
            <ProductGrid
              products={products}
              onSelectProduct={onSelectProduct}
              className="product-grid--carousel"
            />
          </ProductCarousel>
        ) : null}
      </div>
    </section>
  )
}
