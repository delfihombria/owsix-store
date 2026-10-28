import Link from 'next/link'
import { contact } from '@/lib/products'

const links = [
  { href: '/tienda', label: 'Tienda' },
  { href: '/#colecciones', label: 'Colecciones' },
  { href: '/#mayoristas', label: 'Mayoristas' },
  { href: '/#nosotros', label: 'Nosotros' },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5 py-20 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-display text-6xl font-semibold tracking-tight md:text-8xl">OWSIX</p>
            <p className="mt-3 text-ink-foreground/60">Fragancias que despiertan recuerdos.</p>
          </div>
          <nav aria-label="Pie de página">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ink-foreground/70 transition-colors hover:text-ink-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-ink-foreground/15 pt-8 text-xs text-ink-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} OWSIX. Todos los derechos reservados.</p>
          <p>
            WhatsApp {contact.whatsappDisplay} · @{contact.instagram} · @{contact.tiktok}
          </p>
        </div>
      </div>
    </footer>
  )
}
