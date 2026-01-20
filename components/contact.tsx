"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  MessageCircle,
  ExternalLink,
  Check,
  Loader2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import {
  siteInfo,
  sectionTexts,
  directBookingBenefits,
} from "@/data/site-data";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    checkin: "",
    checkout: "",
    huespedes: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.huespedes ? `${formData.huespedes} huespedes` : "",
          fechas:
            formData.checkin && formData.checkout
              ? `${formData.checkin} al ${formData.checkout}`
              : "",
          mensaje: formData.mensaje || "Consulta de disponibilidad",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      setStatus("success");
      setFormData({
        nombre: "",
        email: "",
        checkin: "",
        checkout: "",
        huespedes: "",
        mensaje: "",
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Error al enviar el mensaje",
      );
    }
  };

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

            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-xl text-foreground mb-2">
                  Mensaje enviado
                </h4>
                <p className="text-muted-foreground">
                  Te responderemos a la brevedad. Gracias por tu interes en Casa
                  Lia.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-destructive/10 text-destructive rounded-lg">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo *</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkin">Fecha de llegada</Label>
                    <Input
                      id="checkin"
                      name="checkin"
                      type="date"
                      value={formData.checkin}
                      onChange={handleChange}
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkout">Fecha de salida</Label>
                    <Input
                      id="checkout"
                      name="checkout"
                      type="date"
                      value={formData.checkout}
                      onChange={handleChange}
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="huespedes">Cantidad de huéspedes</Label>
                  <Input
                    id="huespedes"
                    name="huespedes"
                    type="number"
                    min="1"
                    max={siteInfo.capacity.maxGuests}
                    value={formData.huespedes}
                    onChange={handleChange}
                    placeholder="Ej: 6"
                    disabled={status === "loading"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje (opcional)</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu viaje o cualquier consulta que tengas..."
                    rows={4}
                    disabled={status === "loading"}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Consultar disponibilidad"
                  )}
                </Button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl text-foreground mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Reserva en Airbnb
              </h3>
              <p className="text-muted-foreground mb-6">
                También puedes reservar directamente a través de Airbnb con
                protección de pago y todas las garantías de la plataforma.
              </p>
              <Button
                variant="outline"
                asChild
                className="w-full bg-transparent"
                size="lg"
              >
                <Link
                  href={siteInfo.contact.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver en Airbnb
                </Link>
              </Button>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-semibold text-xl mb-4">
                Beneficios de reservar directo
              </h3>
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
  );
}
