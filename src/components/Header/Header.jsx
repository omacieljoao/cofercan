import images from '../../images'
import { HEADER_LINKS } from '../../data/navigation'
import Button from '../Button/Button'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__stripe" aria-hidden="true" />
      <div className="header__inner container">
        <a className="header__brand" href="#inicio" aria-label="Página inicial COFERCAN">
          <img
            className="header__logo"
            src={images['logo-cofercan']}
            alt="COFERCAN - Soluções em Aço"
            height="44"
          />
        </a>
        <nav className="header__nav" aria-label="Navegação principal">
          {HEADER_LINKS.map((link) => (
            <a
              key={link.href}
              className={`header__link${link.active ? ' header__link--active' : ''}`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button href="#orcamento" variant="brown" size="sm" chamfer lift>
          FAÇA UM ORÇAMENTO
        </Button>
      </div>
    </header>
  )
}

export default Header
