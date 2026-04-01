// Linha de marcas com wordmark repetido
import { EconverseWordmark } from './EconverseLogo'

export function BrandsRow() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <div className="container">
        <h2 id="brands-title" className="brands__title">
          Navegue por marcas
        </h2>
        <div className="brands__row">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="brand-bubble">
              <EconverseWordmark />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
