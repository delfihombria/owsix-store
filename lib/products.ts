export type CategoryId = 'aerosoles-dulces' | 'aerosoles-salados' | 'velas' | 'difusores'

export type Category = {
  id: CategoryId
  name: string
  singular: string
  tagline: string
}

export type Product = {
  id: string
  name: string
  category: CategoryId
  price: number
  notes: string
  image: string
}

export const categories: Category[] = [
  {
    id: 'aerosoles-dulces',
    name: 'Aerosoles Dulces',
    singular: 'Aerosol Dulce',
    tagline: 'Postres y recuerdos que llenan los espacios de calidez.',
  },
  {
    id: 'aerosoles-salados',
    name: 'Aerosoles Salados',
    singular: 'Aerosol Salado',
    tagline: 'La cultura gastronómica argentina, suspendida en el aire.',
  },
  {
    id: 'velas',
    name: 'Velas',
    singular: 'Vela',
    tagline: 'Luz cálida con identidad propia.',
  },
  {
    id: 'difusores',
    name: 'Difusores',
    singular: 'Difusor',
    tagline: 'Presencia discreta, elegante y funcional.',
  },
]

export const products: Product[] = [
  {
    id: 'aerosol-lemon-pie',
    name: 'Lemon Pie',
    category: 'aerosoles-dulces',
    price: 9500,
    notes: 'Limón fresco, merengue tostado, masa de manteca.',
    image: '/images/lemmon-pie-aerosol.jpg',
  },
  {
    id: 'aerosol-flan-con-caramelo',
    name: 'Flan con Caramelo',
    category: 'aerosoles-dulces',
    price: 9500,
    notes: 'Vainilla, huevo, caramelo oscuro.',
    image: '/images/flan-con-caramelo.jpg',
  },
  {
    id: 'aerosol-panqueques',
    name: 'Panqueques',
    category: 'aerosoles-dulces',
    price: 9500,
    notes: 'Masa dorada, dulce de leche, manteca derretida.',
    image: '/images/panqueques.jpg',
  },
  {
    id: 'aerosol-asado',
    name: 'Asado',
    category: 'aerosoles-salados',
    price: 12000,
    notes: 'Leña de quebracho, brasas, chimichurri.',
    image: '/images/asado.jpg',
  },
  {
    id: 'aerosol-empanadas',
    name: 'Empanadas de Carne',
    category: 'aerosoles-salados',
    price: 12000,
    notes: 'Masa al horno, comino, cebolla dulce.',
    image: '/images/empanada.jpg',
  },
  {
    id: 'aerosol-milanesa-frita',
    name: 'Milanesa Frita',
    category: 'aerosoles-salados',
    price: 12000,
    notes: 'Pan rallado, perejil, limón.',
    image: '/images/milanesa.jpg',
  },
  {
    id: 'vela-lemon-pie',
    name: 'Lemon Pie',
    category: 'velas',
    price: 18000,
    notes: 'Cera de soja. Limón, merengue y vainilla.',
    image: '/images/lemmon-pie-vela.jpg',
  },
  {
    id: 'vela-flan-con-caramelo',
    name: 'Flan con Caramelo',
    category: 'velas',
    price: 18000,
    notes: 'Cera de soja. Caramelo, vainilla y crema.',
    image: '/images/flan-vela.jpg',
  },
  {
    id: 'vela-panqueques',
    name: 'Panqueques',
    category: 'velas',
    price: 18000,
    notes: 'Cera de soja. Dulce de leche y manteca.',
    image: '/images/panqueque-vela.jpg',
  },
  {
    id: 'difusor-blanco',
    name: 'Blanco',
    category: 'difusores',
    price: 20000,
    notes: 'Acabado mate. Difusión silenciosa y constante.',
    image: '/images/difusor-blanco.png',
  },
  {
    id: 'difusor-negro',
    name: 'Negro',
    category: 'difusores',
    price: 20000,
    notes: 'Acabado mate. Difusión silenciosa y constante.',
    image: '/images/difusor-negro.png',
  },
]

export function getCategory(id: CategoryId) {
  return categories.find((category) => category.id === id)!
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(id: CategoryId) {
  return products.filter((product) => product.category === id)
}

export function getProductLabel(product: Product) {
  return `${getCategory(product.category).singular} ${product.name}`
}

const numberFormatter = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 })

export function formatPrice(value: number) {
  return `$${numberFormatter.format(value)}`
}

export const contact = {
  whatsapp: '5491166032266',
  whatsappDisplay: '11 6603 2266',
  instagram: 'owsix_06',
  tiktok: 'owsix3',
}
