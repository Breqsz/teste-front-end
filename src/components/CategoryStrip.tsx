// Atalhos visuais por categoria (ícones em public/images)
import { useState } from 'react'
import { publicImageUrl } from '../utils/publicImage'

const CATEGORIES = [
  { id: 'tec', label: 'Tecnologia', iconFile: 'image.png' },
  { id: 'sup', label: 'Supermercado', iconFile: 'supermercados 2.png' },
  { id: 'beb', label: 'Bebidas', iconFile: 'whiskey.png' },
  { id: 'fer', label: 'Ferramentas', iconFile: 'ferramentas 1.png' },
  { id: 'sau', label: 'Saúde', iconFile: 'cuidados-de-saude 1.png' },
  { id: 'esp', label: 'Esportes e Fitness', iconFile: 'corrida 1.png' },
  { id: 'mod', label: 'Moda', iconFile: 'moda 1.png' },
] as const

export function CategoryStrip() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]['id']>('tec')

  return (
    <section className="category-strip" aria-label="Compre por categoria">
      <div className="container">
        <div className="category-strip__grid">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`category-tile${active === c.id ? ' category-tile--active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              <span className="category-tile__icon-wrap">
                <img
                  className="category-tile__icon"
                  src={publicImageUrl(c.iconFile)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="category-tile__label">{c.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
