// Testes do card da vitrine (render e clique)
import { render, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ProductCard } from './ProductCard'

const product = {
  productName: 'IPHONE 13 MINI 1',
  descriptionShort: 'IPHONE 13 MINI 1',
  photo: 'https://example.com/p.png',
  price: 9000,
}

describe('ProductCard', () => {
  it('renderiza nome e preço do produto', () => {
    const { container } = render(<ProductCard product={product} onSelect={vi.fn()} />)
    const card = container.querySelector('.product-card')
    expect(card).toBeTruthy()
    expect(within(card as HTMLElement).getByText('IPHONE 13 MINI 1')).toBeInTheDocument()
    expect(card.querySelector('.product-card__price-row')).toHaveTextContent(/R\$/)
  })

  it('dispara onSelect com o produto ao clicar', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()
    const { container } = render(<ProductCard product={product} onSelect={onSelect} />)
    const btn = container.querySelector('.product-card__activate')
    expect(btn).toBeTruthy()
    await user.click(btn as HTMLElement)
    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect).toHaveBeenCalledWith(product)
  })
})
