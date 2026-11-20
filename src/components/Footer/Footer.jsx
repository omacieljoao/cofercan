import images from '../../images'
import { COMPANY } from '../../data/company'
import { FOOTER_LINKS } from '../../data/navigation'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import './Footer.css'

function FooterHeading({ children }) {
  return (
    <h2 className="footer__heading">
      <span className="footer__heading-mark" aria-hidden="true" />
      <span>{children}</span>
    </h2>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container container">
          <div className="footer__grid">
            <div className="footer__brand">
              <img
                className="footer__logo"
                src={images['logo-cofercan']}
                alt="COFERCAN - Soluções em Aço"
                height="40"
                loading="lazy"
                decoding="async"
              />
              <p className="footer__about">
                Soluções em aço para construção civil, estruturas metálicas, indústria e coberturas em todo o Rio
                Grande do Sul desde 1981.
              </p>
            </div>

            <nav className="footer__column" aria-label="Navegação do rodapé">
              <FooterHeading>NAVEGAÇÃO</FooterHeading>
              <ul className="footer__list">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a className="footer__link" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="footer__column">
              <FooterHeading>CONTATO</FooterHeading>
              <ul className="footer__list">
                <li>
                  <a className="footer__link footer__link--strong" href={COMPANY.phone.href}>
                    {COMPANY.phone.footerDisplay}
                  </a>
                </li>
                <li>
                  <a className="footer__link" href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                    {COMPANY.whatsapp.footerDisplay}
                  </a>
                </li>
                <li>
                  <a className="footer__link" href={`mailto:${COMPANY.email}`}>
                    {COMPANY.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <FooterHeading>ONDE ESTAMOS</FooterHeading>
              <address className="footer__address">
                <p>
                  <strong className="footer__address-label">Matriz Canoas/RS:</strong>
                  {COMPANY.headquarters}
                </p>
                <p>
                  <strong className="footer__address-label">Filiais no RS:</strong>
                  {COMPANY.branches}
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <p>
            © {new Date().getFullYear()} Cofercan - Soluções em Aço. Todos os direitos reservados.
          </p>
          <p className="footer__cnpj">CNPJ: {COMPANY.cnpj}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
