// API de produtos: fetch no JSON público da Econverse + validação do corpo da resposta
import type { Product } from '../types/product'

// URL oficial se VITE_PRODUCTS_URL não existir (.env.development / .env.production)
const DEFAULT_PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

// Lê a URL do ambiente (Vite) ou cai no default acima
export function getProductsUrl(): string {
  return import.meta.env.VITE_PRODUCTS_URL ?? DEFAULT_PRODUCTS_URL
}

// Confere se um objeto desconhecido tem os campos esperados de Product
function isProductRecord(value: unknown): value is Product {
  if (typeof value !== 'object' || value === null) return false
  const o = value as Record<string, unknown>
  return (
    typeof o.productName === 'string' &&
    typeof o.descriptionShort === 'string' &&
    typeof o.photo === 'string' &&
    typeof o.price === 'number'
  )
}

// Espera { success: true, products: [...] }; rejeita itens com formato errado
export function parseProductsPayload(data: unknown): Product[] {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Resposta inválida: não é um objeto.')
  }
  const body = data as Record<string, unknown>
  if (body.success !== true) {
    throw new Error('Resposta inválida: success não é true.')
  }
  if (!Array.isArray(body.products)) {
    throw new Error('Resposta inválida: products não é um array.')
  }
  const products = body.products.filter(isProductRecord)
  if (products.length !== body.products.length) {
    throw new Error('Resposta inválida: item de produto com formato incorreto.')
  }
  return products
}

// GET + json(); erros viram exceção para o useProducts mostrar na tela
export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  const res = await fetch(getProductsUrl(), { signal })
  if (!res.ok) {
    throw new Error(`Falha ao carregar produtos (${res.status}).`)
  }
  let json: unknown
  try {
    json = await res.json()
  } catch {
    throw new Error('Resposta inválida: não foi possível ler o JSON.')
  }
  return parseProductsPayload(json)
}
