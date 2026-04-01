// Entrada da aplicação: React em modo estrito na #root do index.html
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
