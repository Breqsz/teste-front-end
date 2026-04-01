// Modal nativo (<dialog>): detalhe do produto quando `product` não é null
import { useEffect, useRef, useState } from 'react'
import type { Product } from '../types/product'
import { formatPriceBRL } from '../utils/formatPrice'

export interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

// Conteúdo interno: foto, preço, descrição, quantidade e botões (layout)
function ProductModalBody({
  product,
  onRequestClose,
}: {
  product: Product
  onRequestClose: () => void
}) {
  const [qty, setQty] = useState(1)
  const dec = () => setQty((q) => Math.max(1, q - 1))
  const inc = () => setQty((q) => Math.min(99, q + 1))

  return (
    <div className="product-modal__inner">
      <button
        type="button"
        className="product-modal__close"
        onClick={onRequestClose}
        aria-label="Fechar detalhes do produto"
      >
        ×
      </button>
      <div className="product-modal__grid">
        <img
          className="product-modal__image"
          src={product.photo}
          alt=""
          width={320}
          height={320}
        />
        <div className="product-modal__details">
          <h2 id="product-modal-title" className="product-modal__title">
            {product.productName}
          </h2>
          <p className="product-modal__price">{formatPriceBRL(product.price)}</p>
          <p className="product-modal__desc">{product.descriptionShort}</p>
          <button type="button" className="product-modal__more">
            Veja mais detalhes do produto &gt;
          </button>
          <div className="product-modal__qty" role="group" aria-label="Quantidade">
            <button type="button" onClick={dec} aria-label="Diminuir quantidade">
              −
            </button>
            <span aria-live="polite">{String(qty).padStart(2, '0')}</span>
            <button type="button" onClick={inc} aria-label="Aumentar quantidade">
              +
            </button>
          </div>
          <button type="button" className="product-modal__buy">
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const ref = useRef<HTMLDialogElement>(null)

  // Abre/fecha o dialog conforme há ou não produto selecionado
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (product) el.showModal()
    else el.close()
  }, [product])

  return (
    <dialog
      ref={ref}
      className="product-modal"
      aria-labelledby="product-modal-title"
      onClose={onClose}
    >
      {product ? (
        <ProductModalBody
          key={`${product.productName}-${product.price}`}
          product={product}
          onRequestClose={() => ref.current?.close()}
        />
      ) : null}
    </dialog>
  )
}
