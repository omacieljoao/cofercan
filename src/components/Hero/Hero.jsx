import images from '../../images'
import { HERO_INDICATORS } from '../../data/content'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import Button from '../Button/Button'
import Eyebrow from '../Eyebrow/Eyebrow'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__background">
        <img
          className="hero__image"
          src={images['hero-fachada']}
          alt="Fachada e instalações da Cofercan em Canoas/RS"
          fetchPriority="high"
        />
      </div>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__slash hero__slash--primary" aria-hidden="true" />
      <div className="hero__slash hero__slash--secondary" aria-hidden="true" />

      <div className="hero__content container">
        <div className="hero__text">
          <Eyebrow variants={['boxed']}>DESDE 1981 EM CANOAS/RS | TRADIÇÃO EM AÇO</Eyebrow>
          <h1 className="hero__title" id="hero-title">
            SOLUÇÕES EM AÇO PARA <span className="hero__highlight">CONSTRUÇÃO CIVIL</span> E INDÚSTRIA
          </h1>
          <p className="hero__description">
            Tradição, qualidade e atendimento especializado para oferecer produtos siderúrgicos que atendem às
            necessidades do seu projeto com agilidade e precisão técnica.
          </p>
          <div className="hero__actions">
            <Button href={buildWhatsAppUrl()} variant="primary" size="lg" chamfer lift external arrow="→">
              PEDIR ORÇAMENTO NO WHATSAPP
            </Button>
            <Button href="#produtos" variant="outline" size="lg" arrow="↓">
              CONHECER PRODUTOS
            </Button>
          </div>
        </div>
      </div>

      <div className="hero__divider container" aria-hidden="true">
        <div className="hero__divider-line" />
      </div>

      <div className="hero__indicators">
        <ul className="hero__indicators-list container">
          {HERO_INDICATORS.map((indicator) => (
            <li className="hero__indicator" key={indicator}>
              <span className="hero__indicator-icon" aria-hidden="true">
                ◆
              </span>
              <span className="hero__indicator-text">{indicator}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
