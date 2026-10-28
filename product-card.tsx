'use client'

import Image from 'next/image'
import { useCart } from '@/components/cart/cart-provider'
import { formatPrice, getProductLabel, type Product } from '@/lib/products'

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { addItem } = useCart()
  const label = getProductLabel(product)

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={`${label} de OWSIX`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl font-medium text-foreground">{product.name}</h3>
        <p className="shrink-0 text-sm tabular-nums text-foreground">{formatPrice(product.price)}</p>
      </div>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{product.notes}</p>
      <button
        type="button"
        onClick={() => addItem(product.id)}
        aria-label={`Agregar ${label} al carrito`}
        className="mt-6 h-11 rounded-full border border-foreground/15 text-sm font-medium text-foreground transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
      >
        Agregar al carrito
      </button>
    </article>
  )
}
