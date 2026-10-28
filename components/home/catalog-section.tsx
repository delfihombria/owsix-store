import { Catalog } from '@/components/catalog'
import { Reveal } from '@/components/reveal'

export function CatalogSection() {
  return (
    <section id="catalogo" aria-labelledby="catalog-title" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-32 md:px-8 md:py-48">
      <Reveal className="mb-20 max-w-2xl md:mb-28">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Catálogo</p>
        <h2
          id="catalog-title"
          className="mt-6 font-display text-5xl font-medium tracking-tight text-balance text-foreground md:text-7xl"
        >
          La colección completa.
        </h2>
      </Reveal>
      <Catalog />
    </section>
  )
}
