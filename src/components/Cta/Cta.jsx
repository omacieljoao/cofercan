import { buildWhatsAppUrl } from '../../utils/whatsapp'
import Button from '../Button/Button'
import Eyebrow from '../Eyebrow/Eyebrow'
import './Cta.css'

function Cta() {
  return (
    <aside className="cta" aria-labelledby="cta-title">
      <div className="cta__shape" aria-hidden="true" />
      <div className="cta__inner container">
        <div className="cta__text">
          <Eyebrow variants={['light', 'center-desktop-left']}>SEU PROJETO COMEÇA AQUI</Eyebrow>
          <h2 className="cta__title" id="cta-title">
            PRECISA DE MATERIAIS SIDERÚRGICOS COM PRONTA-ENTREGA E PREÇO JUSTO?
          </h2>
        </div>
        <Button href={buildWhatsAppUrl()} variant="white" size="lg" lift external arrow="→">
          SOLICITAR ORÇAMENTO AGORA
        </Button>
      </div>
    </aside>
  )
}

export default Cta
