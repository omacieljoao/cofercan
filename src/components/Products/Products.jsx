import { PRODUCTS } from '../../data/products'
import Eyebrow from '../Eyebrow/Eyebrow'
import ProductCard from '../ProductCard/ProductCard'
import './Products.css'

function Products() {
  return (
    <section className="products" id="produtos" aria-labelledby="products-title">
      <div className="products__container container">
        <header className="products__header">
          <div>
            <Eyebrow>CATÁLOGO TÉCNICO COFERCAN</Eyebrow>
            <h2 className="products__title" id="products-title">
              A SOLUÇÃO CERTA EM AÇO COM SUPORTE TÉCNICO
            </h2>
          </div>
          <a className="products__all" href="#orcamento">
            <span>VER TODOS OS PRODUTOS</span>
            <span className="products__all-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </header>

        <ul className="products__list">
          {PRODUCTS.map((product, index) => (
            <li className="products__item" key={product.id}>
              <ProductCard product={product} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Products
