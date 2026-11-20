import { COMPANY } from '../data/company'

export function buildWhatsAppUrl(message) {
  const baseUrl = `https://wa.me/${COMPANY.whatsapp.number}`

  if (!message) {
    return baseUrl
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`
}
