import images from '../../images'
import { APPLICATIONS } from '../../data/content'
import Eyebrow from '../Eyebrow/Eyebrow'
import './Applications.css'

function Applications() {
  return (
    <section className="applications" id="aplicacoes" aria-labelledby="applications-title">
      <div className="applications__watermark" aria-hidden="true">
        APLICAÇÕES
      </div>
      <div className="applications__container container">
        <div className="applications__grid">
          <figure className="applications__figure">
            <div className="applications__frame">
              <img
                className="applications__image"
                src={images['instalacoes-canoas']}
                alt="Matriz e centro de distribuição da Cofercan em Canoas/RS"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="applications__corner applications__corner--horizontal" aria-hidden="true" />
            <div className="applications__corner applications__corner--vertical" aria-hidden="true" />
          </figure>

          <div className="applications__card">
            <span className="applications__count" aria-hidden="true">
              {String(APPLICATIONS.length).padStart(2, '0')}
            </span>
            <Eyebrow>APLICAÇÕES</Eyebrow>
            <h2 className="applications__title" id="applications-title">
              DA RESIDÊNCIA AO GRANDE GALPÃO INDUSTRIAL
            </h2>
            <p className="applications__text">
              A Cofercan atende diferentes escalas de projeto com materiais, espessuras e cortes definidos para cada
              necessidade construtiva.
            </p>
            <ul className="applications__list">
              {APPLICATIONS.map((application, index) => (
                <li className="applications__item" key={application}>
                  <span className="applications__item-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="applications__item-label">{application}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Applications
