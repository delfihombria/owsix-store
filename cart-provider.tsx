'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { getProduct, type Product } from '@/lib/products'

export type CartLine = { product: Product; quantity: number }

type CartContextValue = {
  lines: CartLine[]
  count: number
  subtotal: number
  isOpen: boolean
  setOpen: (open: boolean) => void
  addItem: (productId: string) => void
  setQuantity: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export const MAX_QUANTITY = 20

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [isOpen, setOpen] = useState(false)

  const addItem = useCallback((productId: string) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.min((prev[productId] ?? 0) + 1, MAX_QUANTITY),
    }))
    setOpen(true)
  }, [])

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setQuantities((prev) => {
      const next = { ...prev }
      if (quantity <= 0) delete next[productId]
      else next[productId] = Math.min(quantity, MAX_QUANTITY)
      return next
    })
  }, [])

  const removeItem = useCallback((productId: string) => setQuantity(productId, 0), [setQuantity])
  const clear = useCallback(() => setQuantities({}), [])

  const value = useMemo<CartContextValue>(() => {
    const lines = Object.entries(quantities).flatMap(([id, quantity]) => {
      const product = getProduct(id)
      return product ? [{ product, quantity }] : []
    })
    return {
      lines,
      count: lines.reduce((sum, line) => sum + line.quantity, 0),
      subtotal: lines.reduce((sum, line) => sum + line.quantity * line.product.price, 0),
      isOpen,
      setOpen,
      addItem,
      setQuantity,
      removeItem,
      clear,
    }
  }, [quantities, isOpen, addItem, setQuantity, removeItem, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
