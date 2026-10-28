'use client'

import Image from 'next/image'
import { useCart } from '@/components/cart/cart-provider'
import { formatPrice, getProductLabel, type Product } from '@/lib/products'

export function DiffuserCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const label = getProductLabel(product)

  return (
    <article className="group flex flex-col items-center overflow-hidden bg-secondary px-6 pt-12 pb-10 text-center md:pt-16">
      <h3 className="font-display text-3xl font-medium text-foreground md:text-4xl">{label}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{product.notes}</p>
      <div className="relative mt-8 aspect-square w-full max-w-sm">
        <Image
          src={product.image}
          alt={`${label} OWSIX con una fina columna de vapor`}
          fill
          sizes="(min-width: 768px) 384px, 90vw"
          className="object-contain mix-blend-multiply transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <p className="mt-6 text-sm tabular-nums text-foreground">{formatPrice(product.price)}</p>
      <button
        type="button"
        onClick={() => addItem(product.id)}
        aria-label={`Agregar ${label} al carrito`}
        className="mt-5 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-primary"
      >
        Comprar
      </button>
    </article>
  )
}
