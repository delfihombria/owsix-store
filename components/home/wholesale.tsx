import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { whatsappUrl, wholesaleMessage } from '@/lib/whatsapp'

const benefits = [
  { title: 'Diferenciación de marca', text: 'Un aroma propio que distingue tu espacio de cualquier otro.' },
  { title: 'Experiencia del cliente', text: 'Ambientes que se recuerdan y a los que se quiere volver.' },
  { title: 'Identidad sensorial', text: 'Coherencia entre lo que tu marca dice y lo que se siente.' },
  { title: 'Aromas exclusivos', text: 'Fragancias desarrolladas a medida para tu negocio.' },
]

export function Wholesale() {
  return (
    <section id="mayoristas" aria-labelledby="wholesale-title" className="scroll-mt-16 bg-ink text-ink-foreground">
      <div className="relative aspect-[4/3] w-full md:aspect-[21/9]">
        <Image
          src="/images/spray salado 360.png"
          alt="Interior de un restaurante argentino con luz cálida y una parrilla encendida de fondo"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-32 md:px-8 md:pb-48">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-foreground/60">
              Mayoristas · Gastronomía y negocios
            </p>
            <h2
              id="wholesale-title"
              className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-balance md:text-7xl"
            >
              Experiencias olfativas para gastronomía.
            </h2>
          </Reveal>
          <Reveal delay={150} className="flex flex-col justify-end md:col-span-5">
            <p className="text-lg leading-relaxed text-pretty text-ink-foreground/75">
              Ayudamos a restaurantes, cafeterías, bares y hoteles a construir una identidad aromática memorable.
            </p>
            <a
              href={whatsappUrl(wholesaleMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 w-fit rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Solicitar asesoramiento
            </a>
          </Reveal>
        </div>

        <ul className="mt-24 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <li key={benefit.title}>
              <Reveal delay={index * 100} className="border-t border-ink-foreground/15 py-8">
                <span className="text-xs tabular-nums text-ink-foreground/50">0{index + 1}</span>
                <h3 className="mt-4 font-display text-2xl">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/65">{benefit.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
