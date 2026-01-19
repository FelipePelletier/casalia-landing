import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Casa Lia - Bosque Peralta Ramos | Alquiler Vacacional en Mar del Plata',
  description: 'Alquiler vacacional en el Bosque Peralta Ramos, Mar del Plata. Casa amplia para 8-9 huéspedes con WiFi, cocina completa y estacionamiento. Reserva directo y ahorra.',
  keywords: ['alquiler vacacional mar del plata', 'casa bosque peralta ramos', 'alojamiento mar del plata', 'casa lia mar del plata', 'airbnb mar del plata', 'alquiler temporario playa'],
  authors: [{ name: 'Casa Lia' }],
  openGraph: {
    title: 'Casa Lia - Bosque Peralta Ramos | Alquiler Vacacional',
    description: 'Casa amplia para 8-9 huéspedes en el tranquilo Bosque Peralta Ramos, Mar del Plata. WiFi, cocina completa y estacionamiento.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Casa Lia - Bosque Peralta Ramos',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Lia - Bosque Peralta Ramos',
    description: 'Alquiler vacacional en Mar del Plata para 8-9 huéspedes',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://casalia.vercel.app',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Casa Lia - Bosque Peralta Ramos",
              "description": "Casa amplia para 8-9 huéspedes en el Bosque Peralta Ramos, Mar del Plata",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mar del Plata",
                "addressRegion": "Buenos Aires",
                "addressCountry": "Argentina"
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "WiFi" },
                { "@type": "LocationFeatureSpecification", "name": "Cocina completa" },
                { "@type": "LocationFeatureSpecification", "name": "Estacionamiento" }
              ]
            })
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
