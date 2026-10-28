import { contact, formatPrice, getProductLabel, type Product } from '@/lib/products'

type OrderLine = { product: Product; quantity: number }

export function whatsappUrl(text: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`
}

export function buildOrderMessage(lines: OrderLine[], total: number, extra: string[] = []) {
  const items = lines.map(
    ({ product, quantity }) =>
      `- ${quantity} x ${getProductLabel(product)} (${formatPrice(product.price * quantity)})`,
  )

  return ['Hola OWSIX.', 'Quiero comprar:', '', ...items, '', 'Total:', formatPrice(total), ...extra].join(
    '\n',
  )
}

export const wholesaleMessage =
  'Hola OWSIX. Quiero solicitar asesoramiento para crear la identidad aromática de mi negocio.'
