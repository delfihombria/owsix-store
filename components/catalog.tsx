import Link from 'next/link'
import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/reveal'
import { categories, formatPrice, getProductsByCategory, type CategoryId } from '@/lib/products'
import { cn } from '@/lib/utils'

export function Catalog({
  activeCategory = null,
  showFilters = false,
}: {
  activeCategory?: CategoryId | null
  showFilters?: boolean
}) {
  const visible = activeCategory ? categories.filter((c) => c.id === activeCategory) : categories

  return (
    <div className="flex flex-col gap-24 md:gap-36">
      {showFilters && (
        <nav aria-label="Categorías">
          <ul className="flex flex-wrap gap-2">
            {[{ id: null, name: 'Todo' }, ...categories].map((category) => {
              const active = category.id === activeCategory
              return (
                <li key={category.name}>
                  <Link
                    href={category.id ? `/tienda?categoria=${category.id}` : '/tienda'}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block rounded-full border px-4 py-2 text-sm transition-colors',
                      active
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border text-foreground hover:border-foreground',
                    )}
                  >
                    {category.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}

      {visible.map((category, categoryIndex) => {
        const items = getProductsByCategory(category.id)
        return (
          <section key={category.id} id={category.id} aria-labelledby={`${category.id}-title`} className="scroll-mt-24">
            <Reveal className="flex flex-col gap-3 border-t border-foreground/10 pt-6 md:flex-row md:items-baseline md:justify-between">
              <h2 id={`${category.id}-title`} className="font-display text-3xl font-medium text-foreground md:text-4xl">
                {category.name}
              </h2>
              <p className="text-sm text-muted-foreground md:max-w-sm md:text-right">
                {category.tagline} <span className="text-foreground tabular-nums">{formatPrice(items[0].price)}</span>
              </p>
            </Reveal>
            <ul className="mt-12 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((product, index) => (
                <li key={product.id}>
                  <Reveal delay={index * 100}>
                    <ProductCard product={product} priority={categoryIndex === 0 && index === 0} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
