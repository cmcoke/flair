"use client"

/** adds shopping cart functionality */
import { CartProvider } from "use-shopping-cart"

/** shows toast notifications when a user performs a given action Ex. adding or removing an item from the cart */
import { Toaster } from "@/components/ui/toaster"
/** helps with identifying the breakpoints we are currently on using tailwindcss */
import { TailwindIndicator } from "@/components/tailwind-indicator"
/** allows for toggling between light or dark mode */
import { ThemeProvider } from "@/components/theme-provider"

interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <CartProvider
      currency="USD"
      shouldPersist
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster />
        {children}
        {/* <TailwindIndicator /> */}
      </ThemeProvider>
    </CartProvider>
  )
}
