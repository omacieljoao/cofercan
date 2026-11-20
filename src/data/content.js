import { COMPANY } from './company'

export const HERO_INDICATORS = [
  'DISTRIBUIÇÃO ÁGIL',
  'ATENDIMENTO TÉCNICO',
  'PRODUTOS CERTIFICADOS',
  'TRADIÇÃO DESDE 1981',
]

export function getStats() {
  const years = new Date().getFullYear() - COMPANY.foundedYear

  return [
    { value: String(years), label: `Anos de experiência (Desde ${COMPANY.foundedYear})` },
    { value: '+100.000', label: 'Projetos e Obras Atendidos' },
    { value: '3', label: 'Unidades Próprias no RS' },
    { value: '100%', label: 'Aço com Certificação de Origem' },
  ]
}

export const QUOTE_PRODUCTS = [
  { value: 'Telhas Metálicas TP-40 / Onduladas', label: 'Telhas Metálicas' },
  { value: 'Telhas Termoacústicas', label: 'Telhas Termoacústicas' },
  { value: 'Tubos de Aço (Quadrado/Redondo/Retangular)', label: 'Tubos de Aço' },
  { value: 'Vigas e Perfis Estruturais', label: 'Vigas e Perfis (I, U, W)' },
  { value: 'Chapas de Aço / Corte sob Medida', label: 'Chapas de Aço' },
  { value: 'Vergalhões e Malhas', label: 'Vergalhões e Malhas' },
  { value: 'Cumeeiras e Acessórios', label: 'Cumeeiras e Acessórios' },
]

export const QUOTE_APPLICATIONS = [
  { value: 'Construção Civil', label: 'Construção Civil' },
  { value: 'Galpões e Pavilhões Industriais', label: 'Galpões Industriais' },
  { value: 'Estruturas Metálicas e Mezaninos', label: 'Estruturas Metálicas' },
  { value: 'Agronegócio / Instalações Rurais', label: 'Agronegócio' },
  { value: 'Residencial / Condomínios', label: 'Residencial' },
  { value: 'Serralheria Geral', label: 'Serralheria Geral' },
]

export const QUOTE_STEPS = ['PRODUTO', 'APLICAÇÃO', 'MEDIDAS']

export const APPLICATIONS = [
  'INDÚSTRIAS',
  'GALPÕES',
  'COMÉRCIOS',
  'OBRAS AGRÍCOLAS',
  'RESIDÊNCIAS',
  'COBERTURAS EM GERAL',
]

export const LOGISTICS_STEPS = [
  {
    title: 'PRODUÇÃO E CORTE',
    text: 'Controle direto sobre cortes, espessuras e perfis siderúrgicos com máximo padrão de acabamento.',
  },
  {
    title: 'FROTA E LOGÍSTICA',
    text: 'Logística ágil e preparada para descarregar sua demanda com segurança e agilidade em todo o RS.',
  },
  {
    title: 'ATENDIMENTO TÉCNICO',
    text: 'Suporte especializado para ajudar você a escolher as bitolas e complementos exatos da cobertura.',
  },
  {
    title: 'SOLUÇÕES SOB MEDIDA',
    text: 'Materiais fornecidos com tolerância mínima para evitar desperdícios no canteiro de obras.',
  },
]
