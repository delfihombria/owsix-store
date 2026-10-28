import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { formatPrice, getProductsByCategory } from '@/lib/products'

export function Candles() {
  const candles = getProductsByCategory('velas')

  return (
    <section id="velas" aria-labelledby="candles-title" className="scroll-mt-16 bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-32 md:px-8 md:py-48">
        <Reveal className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/2]">
          <Image
            src="/images/velas-editorial.png"
            alt="Tres velas aromáticas OWSIX encendidas sobre un estante de travertino"
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Velas</p>
            <h2
              id="candles-title"
              className="mt-6 font-display text-5xl font-medium tracking-tight text-balance text-foreground md:text-7xl"
            >
              Diseñadas para quedarse.
            </h2>
          </Reveal>
          <Reveal delay={150} className="flex flex-col justify-end md:col-span-5">
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              Velas aromáticas con identidad propia inspiradas en los aromas más memorables de nuestra colección.
            </p>
            <ul className="mt-8 flex flex-col">
              {candles.map((candle) => (
                <li
                  key={candle.id}
                  className="flex items-baseline justify-between border-t border-foreground/10 py-3"
                >
                  <span className="font-display text-xl text-foreground">{candle.name}</span>
                  <span className="text-sm tabular-nums text-muted-foreground">{formatPrice(candle.price)}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/tienda?categoria=velas"
              className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-foreground pb-1 text-sm font-medium text-foreground"
            >
              Comprar velas
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
