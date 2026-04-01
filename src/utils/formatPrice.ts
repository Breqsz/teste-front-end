// Formatação monetária para exibir nos componentes (Intl pt-BR)
export function formatPriceBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

// Texto de parcela exibido no card (metade do preço, 2x sem juros)
export function formatTwoInstallments(value: number): string {
  const half = value / 2
  return `ou 2x de ${formatPriceBRL(half)} sem juros`
}
