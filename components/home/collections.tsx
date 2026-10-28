import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const lines = [
  {
    id: 'linea-dulce',
    universe: 'Hogar y diseño',
    title: 'Línea Dulce',
    products: ['Lemon Pie', 'Flan con Caramelo', 'Panqueques'],
    description:
      'Fragancias inspiradas en postres y recuerdos que llenan los espacios de calidez y personalidad.',
    audienceLabel: 'Pensada para',
    audience: ['Hogares', 'Estudios creativos', 'Oficinas boutique', 'Personas amantes del diseño'],
    cta: 'Explorar línea dulce',
    href: '/tienda?categoria=aerosoles-dulces',
    image: 'spray dulce 360.png',
    alt: 'Aerosol OWSIX junto a una porción de lemon pie y un flan con caramelo',
    dark: false,
  },
  {
    id: 'linea-salada',
    universe: 'Gastronomía y negocios',
    title: 'Línea Salada',
    products: ['Asado', 'Empanadas de Carne', 'Milanesa Frita'],
    description: 'Aromas inspirados en la cultura gastronómica argentina.',
    audienceLabel: 'Pensados para crear experiencias memorables en',
    audience: ['Restaurantes', 'Parrillas', 'Cafeterías', 'Bares', 'Espacios gastronómicos'],
    cta: 'Descubrir línea salada',
    href: '/tienda?categoria=aerosoles-salados',
    image: 'spray salado 360.png',
    alt: 'Aerosol OWSIX sobre una barra de madera junto a empanadas y una parrilla encendida',
    dark: true,
  },
]

export function Collections() {
  return (
    <section id="colecciones" aria-label="Colecciones" className="scroll-mt-16">
      {lines.map((line) => (
        <article
          key={line.id}
          aria-labelledby={`${line.id}-title`}
          className={cn(line.dark ? 'bg-ink text-ink-foreground' : 'bg-secondary text-foreground')}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:gap-20 md:px-8 md:py-32">
            <Reveal className={cn('relative aspect-[4/5] overflow-hidden', line.dark && 'md:order-2')}>
              <Image
                src={line.image}
                alt={line.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1500ms] ease-out hover:scale-[1.03]"
              />
            </Reveal>

            <Reveal delay={150} className="flex flex-col">
              <p
                className={cn(
                  'text-xs uppercase tracking-[0.3em]',
                  line.dark ? 'text-ink-foreground/60' : 'text-muted-foreground',
                )}
              >
                {line.universe}
              </p>
              <h2
                id={`${line.id}-title`}
                className="mt-5 font-display text-5xl font-medium tracking-tight md:text-6xl"
              >
                {line.title}
              </h2>

              <ul className="mt-8 flex flex-col">
                {line.products.map((product) => (
                  <li
                    key={product}
                    className={cn(
                      'border-t py-3 font-display text-2xl',
                      line.dark ? 'border-ink-foreground/15' : 'border-foreground/10',
                    )}
                  >
                    {product}
                  </li>
                ))}
              </ul>

              <p
                className={cn(
                  'mt-8 max-w-md text-lg leading-relaxed text-pretty',
                  line.dark ? 'text-ink-foreground/75' : 'text-muted-foreground',
                )}
              >
                {line.description}
              </p>

              <p
                className={cn(
                  'mt-8 text-xs uppercase tracking-[0.2em]',
                  line.dark ? 'text-ink-foreground/50' : 'text-muted-foreground',
                )}
              >
                {line.audienceLabel}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {line.audience.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      'rounded-full border px-3.5 py-1.5 text-sm',
                      line.dark ? 'border-ink-foreground/20' : 'border-foreground/15',
                    )}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={line.href}
                className={cn(
                  'group mt-12 inline-flex w-fit items-center gap-3 border-b pb-1 text-sm font-medium',
                  line.dark ? 'border-ink-foreground' : 'border-foreground',
                )}
              >
                {line.cta}
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
        </article>
      ))}
    </section>
  )
}
