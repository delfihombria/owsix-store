import type { Metadata } from 'next'
import { CheckoutForm } from '@/components/checkout-form'

export const metadata: Metadata = {
  title: 'Finalizar compra',
  robots: { index: false, follow: false },
}

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-5xl font-semibold text-foreground md:text-6xl">Finalizar compra</h1>
      <p className="mt-4 max-w-lg text-muted-foreground">
        Completá tus datos y te enviamos el pedido directo a WhatsApp.
      </p>
      <div className="mt-12">
        <CheckoutForm />
      </div>
    </main>
  )
}
