// Cabeçalho: logo, busca, ícones de ação e menu de categorias
import { publicImageUrl } from '../utils/publicImage'
import { EconverseLogo } from './EconverseLogo'

function HeaderActionIcon({ file }: { file: string }) {
  return (
    <img
      className="header-actions__icon"
      src={publicImageUrl(file)}
      alt=""
      width={22}
      height={22}
      decoding="async"
      aria-hidden="true"
    />
  )
}

function IconSearch() {
  return (
    <svg className="search-field__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

const NAV = [
  'Todas categorias',
  'Tecnologia',
  'Supermercado',
  'Bebidas',
  'Ferramentas',
  'Saúde',
  'Esportes e Fitness',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
] as const

export function AppHeader() {
  return (
    <>
      <header className="app-header">
        <div className="container">
          <div className="app-header__row">
            <EconverseLogo />
            <div className="search-field" role="search">
              <IconSearch />
              <label htmlFor="site-search" className="visually-hidden">
                Buscar na loja
              </label>
              <input
                id="site-search"
                className="search-field__input"
                type="search"
                name="q"
                placeholder="O que você está buscando?"
                autoComplete="off"
              />
            </div>
            <div className="header-actions">
              <button type="button" className="header-actions__btn" aria-label="Meus pedidos">
                <HeaderActionIcon file="Vector.png" />
              </button>
              <button type="button" className="header-actions__btn" aria-label="Favoritos">
                <HeaderActionIcon file="Heart.png" />
              </button>
              <button type="button" className="header-actions__btn" aria-label="Minha conta">
                <HeaderActionIcon file="UserCircle.png" />
              </button>
              <button type="button" className="header-actions__btn" aria-label="Carrinho">
                <HeaderActionIcon file="ShoppingCart.png" />
              </button>
            </div>
          </div>
        </div>
        <nav className="main-nav" aria-label="Categorias principais">
          <div className="container">
            <ul className="main-nav__list">
              {NAV.map((label) => (
                <li key={label}>
                  <a
                    className={`main-nav__link${label === 'Ofertas do dia' ? ' main-nav__link--accent' : ''}`}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a className="main-nav__link main-nav__link--crown" href="#" onClick={(e) => e.preventDefault()}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M5 16L3 7l5 3 4-5 4 5 5-3-2 9H5zm0 0v2h14v-2H5z" />
                  </svg>
                  Assinatura
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
