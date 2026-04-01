// Faixa no topo com mensagens rápidas (compra segura, frete, parcelamento)
function IconShieldCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="topbar__icon">
      <path
        d="M12 3l8 3v7c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconTruck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="topbar__icon">
      <path
        d="M3 7h11v10H3V7zm11 0h3l3 3v4h-6M7 19a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconCard() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="topbar__icon">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__inner container">
        <p className="topbar__item">
          <IconShieldCheck />
          <span className="topbar__text">
            <span className="topbar__muted">Compra </span>
            <span className="topbar__accent">100% segura</span>
          </span>
        </p>
        <p className="topbar__item">
          <IconTruck />
          <span className="topbar__text">
            <span className="topbar__accent">Frete grátis </span>
            <span className="topbar__muted">acima de R$ 200</span>
          </span>
        </p>
        <p className="topbar__item">
          <IconCard />
          <span className="topbar__text">
            <span className="topbar__accent">Parcele </span>
            <span className="topbar__muted">suas compras</span>
          </span>
        </p>
      </div>
    </div>
  )
}
