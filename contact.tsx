import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { contact } from '@/lib/products'

const channels = [
  { label: 'WhatsApp', value: contact.whatsappDisplay, href: `https://wa.me/${contact.whatsapp}` },
  { label: 'Instagram', value: `@${contact.instagram}`, href: `https://instagram.com/${contact.instagram}` },
  { label: 'TikTok', value: `@${contact.tiktok}`, href: `https://www.tiktok.com/@${contact.tiktok}` },
]

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contact-title" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-32 md:px-8 md:py-40">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contacto</p>
          <h2
            id="contact-title"
            className="mt-6 font-display text-5xl font-medium tracking-tight text-foreground md:text-7xl"
          >
            Hablemos.
          </h2>
        </Reveal>
        <ul className="mt-16 flex flex-col">
          {channels.map((channel, index) => (
            <li key={channel.label}>
              <Reveal delay={index * 100}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 border-t border-foreground/10 py-8 transition-colors hover:text-primary"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{channel.label}</span>
                  <span className="flex items-center gap-4 font-display text-3xl md:text-5xl">
                    {channel.value}
                    <ArrowUpRight
                      className="size-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:size-8"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
