// Testes do modal (conteúdo e fechar); depende do polyfill de <dialog> no setup
import { render, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ProductModal } from './ProductModal'

const product = {
  productName: 'Iphone 11 PRO MAX BRANCO 1',
  descriptionShort: 'Smartphone Apple com tela Super Retina.',
  photo: 'https://example.com/p.png',
  price: 15000,
}

describe('ProductModal', () => {
  it('mostra título, descrição e preço quando há produto', async () => {
    const onClose = vi.fn()
    const { container } = render(<ProductModal product={product} onClose={onClose} />)
    const dialog = container.querySelector('dialog')
    expect(dialog).toBeTruthy()
    const region = within(dialog as HTMLElement)
    expect(
      await region.findByRole('heading', { name: product.productName }),
    ).toBeInTheDocument()
    expect(region.getByText(product.descriptionShort)).toBeInTheDocument()
    expect(region.getByText(/R\$/)).toBeInTheDocument()
  })

  it('chama onClose ao clicar em fechar', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const { container } = render(<ProductModal product={product} onClose={onClose} />)
    const dialog = container.querySelector('dialog')
    expect(dialog).toBeTruthy()
    const closeBtn = within(dialog as HTMLElement).getByRole('button', {
      name: /fechar detalhes do produto/i,
    })
    await user.click(closeBtn)
    expect(onClose).toHaveBeenCalled()
  })
})
