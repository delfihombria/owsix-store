import { Reveal } from '@/components/reveal'

const values = ['Innovación', 'Autenticidad', 'Creatividad', 'Calidad']

export function Concept() {
  return (
    <section aria-labelledby="concept-title" className="mx-auto max-w-7xl px-5 py-32 md:px-8 md:py-48">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Concepto</p>
        <h2
          id="concept-title"
          className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-balance text-foreground md:text-7xl"
        >
          Más que aromatizadores.
        </h2>
        <p className="mt-10 text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
          OWSIX nace para transformar recuerdos cotidianos en experiencias sensoriales.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
          Creamos fragancias inspiradas en sabores, momentos y tradiciones para convertir cada espacio en algo
          memorable.
        </p>
      </Reveal>

      <Reveal delay={150}>
        <ul className="mx-auto mt-24 grid max-w-5xl grid-cols-2 border-t border-border md:grid-cols-4">
          {values.map((value, index) => (
            <li key={value} className="flex flex-col gap-2 pt-6 pr-4 pb-6">
              <span className="text-xs tabular-nums text-muted-foreground">0{index + 1}</span>
              <span className="font-display text-xl text-foreground">{value}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
