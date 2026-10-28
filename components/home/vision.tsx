import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Vision() {
  return (
    <section id="nosotros" aria-labelledby="vision-title" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-32 md:px-8 md:py-48">
      <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
        <Reveal className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/aromatizantes portada.png"
            alt="Manos sosteniendo un frasco de esencia rodeado de cáscara de limón, vainilla y madera"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={150}>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Sobre OWSIX</p>
          <h2
            id="vision-title"
            className="mt-6 font-display text-5xl font-medium tracking-tight text-foreground md:text-7xl"
          >
            Nuestra visión.
          </h2>
          <p className="mt-10 text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
            OWSIX nace para romper con lo convencional y convertir el aroma en una forma de expresión.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
            Cada fragancia está pensada para transmitir identidad, creatividad y personalidad.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
