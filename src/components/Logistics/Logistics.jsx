import images from '../../images'
import { LOGISTICS_STEPS } from '../../data/content'
import Eyebrow from '../Eyebrow/Eyebrow'
import './Logistics.css'

function Logistics() {
  return (
    <section className="logistics" id="estrutura" aria-labelledby="logistics-title">
      <div className="logistics__container container">
        <header className="logistics__header">
          <div>
            <Eyebrow>ESTRUTURA QUE ENTREGA</Eyebrow>
            <h2 className="logistics__title" id="logistics-title">
              DO PEDIDO AO CANTEIRO DE OBRAS
            </h2>
          </div>
          <p className="logistics__lead">
            Produção, orientação técnica e logística integradas para dar mais previsibilidade e pontualidade ao seu
            projeto.
          </p>
        </header>

        <ol className="logistics__steps">
          {LOGISTICS_STEPS.map((step, index) => (
            <li className="logistics__step" key={step.title}>
              <span className="logistics__step-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="logistics__step-title">{step.title}</h3>
              <p className="logistics__step-text">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="logistics__banner">
          <div className="logistics__banner-media">
            <img
              className="logistics__banner-image"
              src={images['corte-aco-industria']}
              alt="Corte transversal de aço na indústria"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="logistics__banner-content">
            <span className="logistics__banner-label">PRODUÇÃO + LOGÍSTICA</span>
            <h3 className="logistics__banner-title">MAIS CONTROLE EM CADA ETAPA.</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Logistics
