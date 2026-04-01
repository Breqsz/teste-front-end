// Carrossel: viewport com overflow-x e setas que deslocam o scroll
import { useRef } from 'react'
import type { ReactNode } from 'react'

export function ProductCarousel({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: -1 | 1) => {
    const el = ref.current
    if (!el) return
    // Passo ~75% da largura visível (mín. 240px) para navegar a lista
    const step = Math.max(el.clientWidth * 0.75, 240)
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <div className="product-carousel">
      <button
        type="button"
        className="product-carousel__arrow"
        aria-label="Ver produtos anteriores"
        onClick={() => scroll(-1)}
      >
        ‹
      </button>
      <div className="product-carousel__viewport" ref={ref}>
        {children}
      </div>
      <button
        type="button"
        className="product-carousel__arrow"
        aria-label="Ver próximos produtos"
        onClick={() => scroll(1)}
      >
        ›
      </button>
    </div>
  )
}
