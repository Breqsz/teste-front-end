// Captura de e-mail (form só bloqueia submit; sem integração)
export function Newsletter() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="container newsletter__grid">
        <div>
          <h2 id="newsletter-title" className="newsletter__title">
            Inscreva-se na nossa newsletter
          </h2>
          <p className="newsletter__desc">
            Receba ofertas e novidades no seu e-mail. Sem spam.
          </p>
        </div>
        <form className="newsletter__form" onSubmit={(e) => e.preventDefault()} noValidate>
          <div className="newsletter__row">
            <label htmlFor="nl-name" className="visually-hidden">
              Nome
            </label>
            <input
              id="nl-name"
              className="newsletter__input"
              type="text"
              name="name"
              placeholder="Digite seu nome"
              autoComplete="name"
            />
            <label htmlFor="nl-email" className="visually-hidden">
              E-mail
            </label>
            <input
              id="nl-email"
              className="newsletter__input"
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              autoComplete="email"
            />
          </div>
          <label className="newsletter__check">
            <input type="checkbox" name="terms" required />
            <span>Aceito os termos e condições</span>
          </label>
          <button type="submit" className="newsletter__submit">
            Inscrever
          </button>
        </form>
      </div>
    </section>
  )
}
