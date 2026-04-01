// Dois cards iguais de parceiros (estrutura fixa do layout)
const PARTNER_CARDS = [0, 1] as const

export function PartnersBlock() {
  return (
    <section className="partners" aria-label="Parceiros">
      <div className="container">
        <div className="partners__grid">
          {PARTNER_CARDS.map((i) => (
            <button key={i} type="button" className="partner-card">
              <h3 className="partner-card__title">Parceiros</h3>
              <p className="partner-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <span className="partner-card__cta">Confira</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
