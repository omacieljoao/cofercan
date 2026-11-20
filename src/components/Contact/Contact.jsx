import images from '../../images'
import { COMPANY } from '../../data/company'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import Button from '../Button/Button'
import Cta from '../Cta/Cta'
import Eyebrow from '../Eyebrow/Eyebrow'
import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contato" aria-labelledby="contact-title">
      <div className="contact__main">
        <div className="contact__container container">
          <div className="contact__grid">
            <figure className="contact__figure">
              <div className="contact__frame">
                <img
                  className="contact__image"
                  src={images['equipe-cofercan']}
                  alt="Equipe de especialistas da COFERCAN"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="contact__corner contact__corner--horizontal" aria-hidden="true" />
              <div className="contact__corner contact__corner--vertical" aria-hidden="true" />
            </figure>

            <div className="contact__info">
              <Eyebrow>ATENDIMENTO DIRETO</Eyebrow>
              <h2 className="contact__title" id="contact-title">
                FALE COM QUEM ENTENDE DE AÇO
              </h2>
              <p className="contact__text">
                Envie sua lista de materiais, planta ou medidas do projeto. Nossa equipe de especialistas calcula o
                melhor aproveitamento e fornece orçamento com rapidez.
              </p>
              <Button href={buildWhatsAppUrl()} variant="accent" size="lg" external arrow="→">
                FALAR COM UM CONSULTOR
              </Button>
              <address className="contact__details">
                <p>
                  <strong className="contact__label">Telefone Comercial:</strong>{' '}
                  <a className="contact__link" href={COMPANY.phone.href}>
                    {COMPANY.phone.display}
                  </a>
                </p>
                <p>
                  <strong className="contact__label">E-mail:</strong>{' '}
                  <a className="contact__link" href={`mailto:${COMPANY.email}`}>
                    {COMPANY.email}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </section>
  )
}

export default Contact
