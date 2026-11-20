import Eyebrow from '../Eyebrow/Eyebrow'
import Stats from '../Stats/Stats'
import QuoteForm from '../QuoteForm/QuoteForm'
import './About.css'

function About() {
  return (
    <section className="about" id="quem-somos" aria-labelledby="about-title">
      <div className="about__slash" aria-hidden="true" />
      <div className="about__container container">
        <header className="about__intro">
          <Eyebrow variants={['light', 'pill', 'center']} symmetric>
            SOLIDEZ EM CADA PROJETO
          </Eyebrow>
          <h2 className="about__title" id="about-title">
            A FORÇA DO GRUPO COFERCAN EM NÚMEROS
          </h2>
        </header>
        <Stats />
        <QuoteForm />
      </div>
    </section>
  )
}

export default About
