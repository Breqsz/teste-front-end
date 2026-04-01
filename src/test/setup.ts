// Antes dos testes: matchers do jest-dom + polyfill do dialog para jsdom
import '@testing-library/jest-dom/vitest'
import { applyDialogPolyfill } from './dialog-polyfill'

applyDialogPolyfill()
