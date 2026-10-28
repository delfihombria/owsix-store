'use client'

import { Minus, Plus } from 'lucide-react'
import { MAX_QUANTITY, useCart } from './cart-provider'

export function QuantityControl({
  productId,
  productName,
  quantity,
}: {
  productId: string
  productName: string
  quantity: number
}) {
  const { setQuantity } = useCart()

  return (
    <div className="inline-flex w-fit items-center self-start rounded-full border border-border">
      <button
        type="button"
        onClick={() => setQuantity(productId, quantity - 1)}
        className="flex size-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
        aria-label={`Quitar una unidad de ${productName}`}
      >
        <Minus className="size-3.5" />
      </button>
      <span className="w-6 text-center text-sm tabular-nums" aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => setQuantity(productId, quantity + 1)}
        disabled={quantity >= MAX_QUANTITY}
        className="flex size-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
        aria-label={`Agregar una unidad de ${productName}`}
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  )
}
