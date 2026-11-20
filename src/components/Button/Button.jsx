import './Button.css'

function Button({ href, variant = 'primary', size, chamfer, block, lift, external, arrow, children, ...rest }) {
  const classes = [
    'button',
    `button--${variant}`,
    size && `button--${size}`,
    chamfer && 'button--chamfer',
    block && 'button--block',
    lift && 'button--lift',
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span className="button__label">{children}</span>
      {arrow && (
        <span className="button__arrow" aria-hidden="true">
          {arrow}
        </span>
      )}
    </>
  )

  if (href) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

    return (
      <a className={classes} href={href} {...externalProps} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}

export default Button
