import type { MetadataRoute } from 'next'
import { categories } from '@/lib/products'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://owsix.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/tienda`, changeFrequency: 'weekly', priority: 0.9 },
    ...categories.map((category) => ({
      url: `${siteUrl}/tienda?categoria=${category.id}`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
