// Consome a API de produtos uma vez ao montar: lista, loading e erro para a vitrine
import { useEffect, useState } from 'react'
import { fetchProducts } from '../api/products'
import type { Product } from '../types/product'

export interface UseProductsState {
  products: Product[]
  loading: boolean
  error: string | null
}

export function useProducts(): UseProductsState {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    fetchProducts(controller.signal)
      .then((data) => {
        if (cancelled) return
        setProducts(data)
        setError(null)
      })
      .catch((err: unknown) => {
        if (cancelled) return
        if (err instanceof Error && err.name === 'AbortError') return
        const message =
          err instanceof Error ? err.message : 'Erro ao carregar produtos.'
        setError(message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    // Ao sair da página: aborta fetch e ignora respostas tardias
    return () => {
      cancelled = true
      controller.abort()
    }
  }, [])

  return { products, loading, error }
}
