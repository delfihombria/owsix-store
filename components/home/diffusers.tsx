import { Reveal } from '@/components/reveal'
import { getProductsByCategory } from '@/lib/products'
import { DiffuserCard } from './diffuser-card'

export function Diffusers() {
  const diffusers = getProductsByCategory('difusores')

  return (
    <section id="difusores" aria-labelledby="diffusers-title" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-32 md:px-8 md:py-48">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Difusores</p>
        <h2
          id="diffusers-title"
          className="mt-6 font-display text-5xl font-medium tracking-tight text-balance text-foreground md:text-7xl"
        >
          Difusión inteligente.
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
          Diseñados para acompañar cualquier ambiente con una presencia discreta, elegante y funcional.
        </p>
      </Reveal>

      <ul className="mt-20 grid gap-6 md:mt-28 md:grid-cols-2">
        {diffusers.map((product, index) => (
          <li key={product.id}>
            <Reveal delay={index * 150}>
              <DiffuserCard product={product} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
