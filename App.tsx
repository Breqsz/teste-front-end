// Página única: dados dos produtos vêm do hook; modal guarda o item clicado
import { useState } from 'react'
import { ProductModal } from './src/components/ProductModal'
import { ProductSection } from './src/components/ProductSection'
import { TopBar } from './src/components/TopBar'
import { AppHeader } from './src/components/AppHeader'
import { HeroBanner } from './src/components/HeroBanner'
import { CategoryStrip } from './src/components/CategoryStrip'
import { PartnersBlock } from './src/components/PartnersBlock'
import { BrandsRow } from './src/components/BrandsRow'
import { Newsletter } from './src/components/Newsletter'
import { SiteFooter } from './src/components/SiteFooter'
import { useProducts } from './src/hooks/useProducts'
import type { Product } from './src/types/product'
import './styles/main.scss'

export default function App() {
  const { products, loading, error } = useProducts()
  const [selected, setSelected] = useState<Product | null>(null)

  // Props compartilhadas pelas duas seções de produtos (mesma lista da API)
  const productSectionBase = {
    products,
    loading,
    error,
    onSelectProduct: setSelected,
  }

  return (
    <div className="page-shell">
      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo
      </a>
      <TopBar />
      <AppHeader />
      <HeroBanner />
      <CategoryStrip />
      <main id="conteudo-principal" className="page-main">
        {/* Primeira vitrine: mostra carregando; segunda só repete o carrossel */}
        <ProductSection {...productSectionBase} variant="primary" />
        <PartnersBlock />
        <ProductSection
          {...productSectionBase}
          variant="repeat"
          sectionId="related-products-title-2"
        />
        <PartnersBlock />
        <BrandsRow />
      </main>
      <Newsletter />
      <SiteFooter />
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
