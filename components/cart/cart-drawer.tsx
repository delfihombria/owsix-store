'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { formatPrice, getCategory } from '@/lib/products'
import { buildOrderMessage, whatsappUrl } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'
import { useCart } from './cart-provider'
import { QuantityControl } from './quantity-control'

export function CartDrawer() {
  const { lines, subtotal, isOpen, setOpen, removeItem } = useCart()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, setOpen])

  return (
    <div
      className={cn('fixed inset-0 z-50', isOpen ? 'pointer-events-auto' : 'pointer-events-none')}
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <div
        className={cn(
          'absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0',
        )}
        onClick={() => setOpen(false)}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className={cn(
          'absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 id="cart-title" className="font-display text-2xl text-foreground">
            Tu carrito
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-secondary"
            aria-label="Cerrar carrito"
          >
            <X className="size-5" />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="font-display text-xl text-foreground">Tu carrito está vacío</p>
            <p className="text-sm text-muted-foreground">Elegí un recuerdo para llevarte a casa.</p>
            <Link
              href="/tienda"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver la tienda
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {lines.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 py-5">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-secondary">
                    <Image src={product.image} alt="" fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">
                          {getCategory(product.category).name}
                        </p>
                        <p className="font-medium text-foreground">{product.name}</p>
                      </div>
                      <p className="text-sm tabular-nums text-foreground">
                        {formatPrice(product.price * quantity)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <QuantityControl
                        productId={product.id}
                        productName={product.name}
                        quantity={quantity}
                      />
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <footer className="flex flex-col gap-4 border-t border-border px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-display text-2xl tabular-nums text-foreground">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Coordinamos envío y pago por WhatsApp.
              </p>
              <a
                href={whatsappUrl(buildOrderMessage(lines, subtotal))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Comprar por WhatsApp
              </a>
              <Link
                href="/checkout"
                onClick={() => setOpen(false)}
                className="rounded-full border border-foreground/15 px-6 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                Finalizar compra
              </Link>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}
