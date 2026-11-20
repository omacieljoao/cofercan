import './Eyebrow.css'

function Eyebrow({ children, variants = [], symmetric = false }) {
  const classes = ['eyebrow', ...variants.map((variant) => `eyebrow--${variant}`)].join(' ')

  return (
    <div className={classes}>
      <span className="eyebrow__line" aria-hidden="true" />
      <span className="eyebrow__text">{children}</span>
      {symmetric && <span className="eyebrow__line" aria-hidden="true" />}
    </div>
  )
}

export default Eyebrow
