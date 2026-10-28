import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative -mt-16 flex min-h-[640px] h-svh flex-col justify-end overflow-hidden bg-ink text-ink-foreground"
    >
      <Image
        src="/images/spray salado 360.png" 
        alt="Aerosol OWSIX Asado sobre una tabla de madera quemada, con humo y brasas de fondo"
        fill
        priority
        sizes="100vw"
        className="animate-in fade-in object-cover object-[72%_center] duration-[2000ms]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10 md:bg-gradient-to-r md:from-ink/90 md:via-ink/40 md:to-transparent"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <p
          aria-hidden="true"
          className="animate-in fade-in slide-in-from-bottom-4 font-display text-7xl font-semibold leading-none tracking-tight duration-1000 md:text-9xl"
        >
          OWSIX
        </p>
        <h1
          id="hero-title"
          className="mt-6 max-w-xl animate-in fade-in slide-in-from-bottom-4 font-display text-3xl font-medium leading-tight text-balance delay-150 duration-1000 fill-mode-backwards md:text-5xl"
        >
          Fragancias que despiertan recuerdos.
        </h1>
        <p className="mt-5 max-w-md animate-in fade-in slide-in-from-bottom-4 text-base leading-relaxed text-ink-foreground/70 delay-300 duration-1000 fill-mode-backwards md:text-lg">
          Aromatizadores, velas y difusores inspirados en los aromas más memorables de nuestra cultura.
        </p>
        <div className="mt-10 flex animate-in flex-wrap gap-3 fade-in slide-in-from-bottom-4 delay-500 duration-1000 fill-mode-backwards">
          <Link
            href="/tienda"
            className="rounded-full bg-ink-foreground px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink-foreground/85"
          >
            Comprar ahora
          </Link>
          <Link
            href="/#colecciones"
            className="rounded-full border border-ink-foreground/30 px-7 py-3.5 text-sm font-medium text-ink-foreground transition-colors hover:border-ink-foreground"
          >
            Descubrir colección
          </Link>
        </div>
      </div>
    </section>
  )
}
