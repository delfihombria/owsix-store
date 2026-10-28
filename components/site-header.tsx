'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/cart/cart-provider'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/tienda', label: 'Tienda' },
  { href: '/#colecciones', label: 'Colecciones' },
  { href: '/#velas', label: 'Velas' },
  { href: '/#difusores', label: 'Difusores' },
  { href: '/#mayoristas', label: 'Mayoristas' },
  { href: '/#contacto', label: 'Contacto' },
]

export function SiteHeader() {
  const { count, setOpen } = useCart()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const overlay = pathname === '/' && !scrolled && !menuOpen

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-colors duration-500',
        overlay
          ? 'bg-transparent text-ink-foreground'
          : 'border-b border-border/70 bg-background/85 text-foreground backdrop-blur-xl',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <Link href="/" className="font-display text-2xl font-semibold tracking-tight" aria-label="OWSIX, inicio">
          OWSIX
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm opacity-70 transition-opacity duration-300 hover:opacity-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative flex size-9 items-center justify-center rounded-full transition-opacity hover:opacity-70"
          aria-label={`Abrir carrito, ${count} ${count === 1 ? 'producto' : 'productos'}`}
        >
          <ShoppingBag className="size-5" strokeWidth={1.5} />
          {count > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium leading-4 text-primary-foreground tabular-nums">
              {count}
            </span>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Móvil" className="border-t border-border/70 md:hidden">
          <ul className="flex flex-col px-5 py-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-display text-3xl text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
