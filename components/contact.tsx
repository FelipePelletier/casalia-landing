"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, MessageCircle, ExternalLink, Check } from "lucide-react"
import Link from "next/link"
import { siteInfo, sectionTexts, directBookingBenefits } from "@/data/site-data"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-secondary scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-4">
            {sectionTexts.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {sectionTexts.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-2xl p-8 shadow-sm">
            <h3 className="font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="checkin">Fecha de llegada</Label>
                  <Input id="checkin" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkout">Fecha de salida</Label>
                  <Input id="checkout" type="date" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Cantidad de huéspedes</Label>
                <Input id="guests" type="number" min="1" max={siteInfo.capacity.maxGuests} placeholder="Ej: 6" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje (opcional)</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos sobre tu viaje o cualquier consulta que tengas..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitted}>
                {isSubmitted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Mensaje enviado
                  </>
                ) : (
                  "Consultar disponibilidad"
                )}
              </Button>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl text-foreground mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Reserva en Airbnb
              </h3>
              <p className="text-muted-foreground mb-6">
                También puedes reservar directamente a través de Airbnb con protección de pago 
                y todas las garantías de la plataforma.
              </p>
              <Button variant="outline" asChild className="w-full bg-transparent" size="lg">
                <Link href={siteInfo.contact.airbnbUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver en Airbnb
                </Link>
              </Button>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-semibold text-xl mb-4">Beneficios de reservar directo</h3>
              <ul className="space-y-3">
                {directBookingBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
