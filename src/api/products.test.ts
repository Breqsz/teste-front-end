// Testes da função parseProductsPayload (validação do JSON após o fetch)
import { describe, expect, it } from 'vitest'
import { parseProductsPayload } from './products'

const validPayload = {
  success: true,
  products: [
    {
      productName: 'Iphone 11',
      descriptionShort: 'Descrição curta',
      photo: 'https://example.com/foto.png',
      price: 15000,
    },
  ],
}

describe('parseProductsPayload', () => {
  it('retorna lista quando o JSON é válido', () => {
    const list = parseProductsPayload(validPayload)
    expect(list).toHaveLength(1)
    expect(list[0].productName).toBe('Iphone 11')
    expect(list[0].price).toBe(15000)
  })

  it('lança quando success não é true', () => {
    expect(() =>
      parseProductsPayload({ success: false, products: [] }),
    ).toThrow(/success/)
  })

  it('lança quando products não é array', () => {
    expect(() =>
      parseProductsPayload({ success: true, products: null }),
    ).toThrow(/array/)
  })

  it('lança quando um produto tem campos inválidos', () => {
    expect(() =>
      parseProductsPayload({
        success: true,
        products: [{ productName: 1, descriptionShort: '', photo: '', price: 'x' }],
      }),
    ).toThrow(/formato/)
  })
})
