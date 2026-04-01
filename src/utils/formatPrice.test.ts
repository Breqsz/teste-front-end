// Testes dos helpers de preço usados nos componentes
import { describe, expect, it } from 'vitest'
import { formatPriceBRL, formatTwoInstallments } from './formatPrice'

describe('formatPriceBRL', () => {
  it('inclui símbolo de real e valor formatado', () => {
    const out = formatPriceBRL(15000)
    expect(out).toContain('R$')
    expect(out).toMatch(/15/)
  })
})

describe('formatTwoInstallments', () => {
  it('divide o valor em duas parcelas iguais', () => {
    const out = formatTwoInstallments(100)
    expect(out).toContain('2x')
    expect(out).toContain('sem juros')
  })
})
