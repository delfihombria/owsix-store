import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Baloo_2, Inter } from 'next/font/google'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { CartProvider } from '@/components/cart/cart-provider'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { contact, products } from '@/lib/products'
import './globals.css'

const baloo = Baloo_2({ subsets: ['latin'], variable: '--font-baloo', weight: ['400', '500', '600', '700'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://owsix.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'OWSIX — Fragancias que despiertan recuerdos',
    template: '%s · OWSIX',
  },
  description:
    'Aerosoles, velas de soja y difusores con aromas que despiertan recuerdos: lemon pie, flan con caramelo, panqueques, asado, empanadas y milanesa. Hecho a mano en Buenos Aires.',
  keywords: ['velas aromáticas', 'aerosoles ambientales', 'difusores', 'aromas', 'OWSIX', 'Buenos Aires'],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'OWSIX',
    title: 'OWSIX — Fragancias que despiertan recuerdos',
    description: 'Aerosoles, velas y difusores con aromas de la cocina argentina.',
    images: [{ url: '/images/hero.png', alt: 'Productos OWSIX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OWSIX — Fragancias que despiertan recuerdos',
    images: ['/images/hero.png'],
  },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: '#1a1311',
  colorScheme: 'light',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'OWSIX',
  slogan: 'Fragancias que despiertan recuerdos.',
  url: siteUrl,
  telephone: `+${contact.whatsapp}`,
  sameAs: [`https://instagram.com/${contact.instagram}`, `https://www.tiktok.com/@${contact.tiktok}`],
  makesOffer: products.map((product) => ({
    '@type': 'Offer',
    price: product.price,
    priceCurrency: 'ARS',
    itemOffered: { '@type': 'Product', name: product.name, description: product.notes },
  })),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${baloo.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
