'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { useCart } from '@/components/cart/cart-provider'
import { QuantityControl } from '@/components/cart/quantity-control'
import { formatPrice, getCategory } from '@/lib/products'
import { buildOrderMessage, whatsappUrl } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'

type Delivery = 'envio' | 'retiro'

const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none'

export function CheckoutForm() {
  const { lines, subtotal } = useCart()
  const [delivery, setDelivery] = useState<Delivery>('envio')

  if (lines.length === 0) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-border p-10">
        <p className="font-display text-2xl text-foreground">Tu carrito está vacío</p>
        <p className="text-muted-foreground">Agregá algunos aromas antes de finalizar tu pedido.</p>
        <Link
          href="/tienda"
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Ir a la tienda
        </Link>
      </div>
    )
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const field = (key: string) => String(data.get(key) ?? '').trim().slice(0, 300)

    const details = [
      '',
      `Nombre: ${field('nombre')}`,
      `Entrega: ${delivery === 'envio' ? 'Envío a domicilio' : 'Retiro'}`,
      delivery === 'envio' ? `Dirección: ${field('direccion')}` : null,
      field('notas') ? `Notas: ${field('notas')}` : null,
    ].filter((line): line is string => line !== null)

    window.open(whatsappUrl(buildOrderMessage(lines, subtotal, details)), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="checkout-form">
        <div className="flex flex-col gap-2">
          <label htmlFor="nombre" className="text-sm font-medium text-foreground">
            Nombre y apellido
          </label>
          <input id="nombre" name="nombre" required autoComplete="name" maxLength={100} className={inputClass} />
        </div>

        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-sm font-medium text-foreground">Entrega</legend>
          <div className="grid grid-cols-2 gap-3">
            {(
              [
                { value: 'envio', label: 'Envío a domicilio' },
                { value: 'retiro', label: 'Retiro' },
              ] as const
            ).map((option) => (
              <label
                key={option.value}
                className={cn(
                  'cursor-pointer rounded-xl border px-4 py-3 text-sm transition-colors has-focus-visible:ring-2 has-focus-visible:ring-ring',
                  delivery === option.value
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border text-foreground hover:border-foreground',
                )}
              >
                <input
                  type="radio"
                  name="entrega"
                  value={option.value}
                  checked={delivery === option.value}
                  onChange={() => setDelivery(option.value)}
                  className="sr-only"
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>

        {delivery === 'envio' && (
          <div className="flex flex-col gap-2">
            <label htmlFor="direccion" className="text-sm font-medium text-foreground">
              Dirección y localidad
            </label>
            <input
              id="direccion"
              name="direccion"
              required
              autoComplete="street-address"
              maxLength={200}
              className={inputClass}
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="notas" className="text-sm font-medium text-foreground">
            Notas <span className="font-normal text-muted-foreground">(opcional)</span>
          </label>
          <textarea
            id="notas"
            name="notas"
            rows={3}
            maxLength={300}
            placeholder="¿Es un regalo? ¿Horario de entrega?"
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 lg:hidden"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Enviar pedido por WhatsApp
        </button>
      </form>

      <aside aria-labelledby="summary-title" className="h-fit rounded-2xl bg-secondary/60 p-6 lg:sticky lg:top-24">
        <h2 id="summary-title" className="font-display text-2xl text-foreground">
          Resumen
        </h2>
        <ul className="mt-6 flex flex-col gap-5">
          {lines.map(({ product, quantity }) => (
            <li key={product.id} className="flex gap-4">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-background">
                <Image src={product.image} alt="" fill sizes="64px" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex justify-between gap-2 text-sm">
                  <span className="text-foreground">
                    {getCategory(product.category).name} · {product.name}
                  </span>
                  <span className="tabular-nums text-foreground">{formatPrice(product.price * quantity)}</span>
                </div>
                <QuantityControl productId={product.id} productName={product.name} quantity={quantity} />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-2 border-t border-border pt-6 text-sm">
          <div className="flex justify-between text-muted-foreground">
            <span>Envío</span>
            <span>A coordinar</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-foreground">Total</span>
            <span className="font-display text-3xl tabular-nums text-foreground">{formatPrice(subtotal)}</span>
          </div>
        </div>
        <button
          type="submit"
          form="checkout-form"
          className="mt-6 hidden w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 lg:inline-flex"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Enviar pedido por WhatsApp
        </button>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Al enviar se abrirá WhatsApp con tu pedido listo. Te confirmamos stock, envío y medios de pago.
        </p>
      </aside>
    </div>
  )
}
