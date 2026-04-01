/// <reference types="vite/client" />
// Variáveis expostas em import.meta.env (prefixo VITE_ no .env)

interface ImportMetaEnv {
  readonly VITE_PRODUCTS_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
