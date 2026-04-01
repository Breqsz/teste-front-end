// Página única: dados dos produtos vêm do hook; modal guarda o item clicado
import { useState } from 'react'
import { ProductModal } from './components/ProductModal'
import { ProductSection } from './components/ProductSection'
import { TopBar } from './components/TopBar'
import { AppHeader } from './components/AppHeader'
import { HeroBanner } from './components/HeroBanner'
import { CategoryStrip } from './components/CategoryStrip'
import { PartnersBlock } from './components/PartnersBlock'
import { BrandsRow } from './components/BrandsRow'
import { Newsletter } from './components/Newsletter'
import { SiteFooter } from './components/SiteFooter'
import { useProducts } from './hooks/useProducts'
import type { Product } from './types/product'
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
