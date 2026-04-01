// Bloco de destaque promocional acima da vitrine
export function HeroBanner() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__content">
        <div className="hero__text">
          <h2 id="hero-heading" className="hero__title">
            Venha conhecer nossas
            <br />
            promoções
          </h2>
          <p className="hero__highlight">
            <span className="hero__highlight-accent">50% Off</span>{' '}
            <span className="hero__highlight-rest">nos produtos</span>
          </p>
          <button type="button" className="hero__cta">
            Ver produto
          </button>
        </div>
      </div>
    </section>
  )
}
