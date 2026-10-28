import type { Metadata } from 'next'
import { Catalog } from '@/components/catalog'
import { categories, type CategoryId } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Tienda',
  description:
    'Aerosoles dulces y salados, velas de soja y difusores OWSIX. Aromas de lemon pie, flan, panqueques, asado, empanadas y milanesa.',
  alternates: { canonical: '/tienda' },
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>
}) {
  const { categoria } = await searchParams
  const activeCategory = categories.some((c) => c.id === categoria)
    ? (categoria as CategoryId)
    : null

  return (
    <main className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Catálogo</p>
      <h1 className="mt-6 font-display text-6xl font-medium tracking-tight text-balance text-foreground md:text-8xl">
        Tienda
      </h1>
      <p className="mt-6 max-w-lg text-lg text-muted-foreground">
        Elegí tu aroma. Coordinamos el envío y el pago por WhatsApp.
      </p>
      <div className="mt-16">
        <Catalog activeCategory={activeCategory} showFilters />
      </div>
    </main>
  )
}
