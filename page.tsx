import { Candles } from '@/components/home/candles'
import { CatalogSection } from '@/components/home/catalog-section'
import { Collections } from '@/components/home/collections'
import { Concept } from '@/components/home/concept'
import { Contact } from '@/components/home/contact'
import { Diffusers } from '@/components/home/diffusers'
import { Hero } from '@/components/home/hero'
import { Vision } from '@/components/home/vision'
import { Wholesale } from '@/components/home/wholesale'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Concept />
      <Collections />
      <CatalogSection />
      <Candles />
      <Diffusers />
      <Wholesale />
      <Vision />
      <Contact />
    </main>
  )
}
