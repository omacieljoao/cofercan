import { useState } from 'react'
import { COMPANY } from '../../data/company'
import { QUOTE_APPLICATIONS, QUOTE_PRODUCTS, QUOTE_STEPS } from '../../data/content'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import Button from '../Button/Button'
import Eyebrow from '../Eyebrow/Eyebrow'
import './QuoteForm.css'

const INITIAL_FIELDS = { product: '', application: '', details: '' }

function QuoteForm() {
  const [fields, setFields] = useState(INITIAL_FIELDS)

  function handleChange(event) {
    const { name, value } = event.target
    setFields((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const message = [
      'Olá, equipe Cofercan! Gostaria de solicitar um orçamento:',
      '',
      `*Produto:* ${fields.product || 'Não informado'}`,
      `*Aplicação:* ${fields.application || 'Não informada'}`,
      `*Medidas/Obs:* ${fields.details || 'A definir'}`,
      '',
      'Aguardo retorno técnico. Obrigado!',
    ].join('\n')

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="quote" id="orcamento">
      <div className="quote__intro">
        <Eyebrow variants={['light']}>ORÇAMENTO MAIS RÁPIDO</Eyebrow>
        <h3 className="quote__title">CONTE O QUE A SUA OBRA PRECISA</h3>
        <p className="quote__text">
          Escolha as opções abaixo e abra o WhatsApp com a solicitação organizada diretamente para o nosso consultor
          comercial técnico.
        </p>
        <ul className="quote__steps">
          {QUOTE_STEPS.map((step) => (
            <li className="quote__step" key={step}>
              {step}
            </li>
          ))}
        </ul>
      </div>

      <form className="quote-form" onSubmit={handleSubmit}>
        <div className="quote-form__row">
          <div className="quote-form__field">
            <label className="quote-form__label" htmlFor="quote-product">
              QUAL PRODUTO?
            </label>
            <select
              className="quote-form__control"
              id="quote-product"
              name="product"
              value={fields.product}
              onChange={handleChange}
            >
              <option value="" disabled>
                Selecione um produto
              </option>
              {QUOTE_PRODUCTS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="quote-form__field">
            <label className="quote-form__label" htmlFor="quote-application">
              ONDE SERÁ APLICADO?
            </label>
            <select
              className="quote-form__control"
              id="quote-application"
              name="application"
              value={fields.application}
              onChange={handleChange}
            >
              <option value="" disabled>
                Selecione a aplicação
              </option>
              {QUOTE_APPLICATIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="quote-form__field">
          <label className="quote-form__label" htmlFor="quote-details">
            MEDIDAS OU OBSERVAÇÃO
          </label>
          <input
            className="quote-form__control"
            id="quote-details"
            name="details"
            type="text"
            placeholder="Ex.: 350m² de telha trapezoidal 0.43mm ou 60 metros de tubo 80x80"
            value={fields.details}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" variant="accent" size="lg" block lift arrow="→">
          CONTINUAR NO WHATSAPP
        </Button>

        <p className="quote-form__note">
          Você revisa a mensagem antes de enviar para nosso consultor comercial:{' '}
          <strong className="quote-form__phone">{COMPANY.whatsapp.display}</strong>.
        </p>
      </form>
    </div>
  )
}

export default QuoteForm
