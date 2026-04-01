// Logo em texto: link no header ou div na seção de marcas
function Mark() {
  return (
    <>
      <span className="econverse-logo__mark" aria-hidden="true">
        ec
      </span>
      <span className="econverse-logo__type">onverse</span>
    </>
  )
}

export function EconverseLogo() {
  return (
    <a className="econverse-logo" href="/" aria-label="Econverse — página inicial">
      <Mark />
    </a>
  )
}

export function EconverseWordmark() {
  return (
    <div className="econverse-logo">
      <Mark />
    </div>
  )
}
