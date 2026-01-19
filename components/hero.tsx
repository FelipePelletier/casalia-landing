import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Star } from "lucide-react"
import { siteInfo } from "@/data/site-data"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-casa.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Star className="h-5 w-5 text-accent fill-accent" />
          <span className="text-card text-sm font-medium tracking-wide uppercase">
            {siteInfo.tagline}
          </span>
          <Star className="h-5 w-5 text-accent fill-accent" />
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-card mb-6 text-balance leading-tight">
          {siteInfo.heroTitle}
        </h1>

        <p className="text-xl sm:text-2xl text-card/90 mb-4 max-w-2xl mx-auto leading-relaxed">
          {siteInfo.heroSubtitle}
        </p>

        <p className="text-lg text-card/80 mb-10 max-w-xl mx-auto">
          {siteInfo.heroDescription}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" asChild className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#contacto">Consultar disponibilidad</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-base px-8 py-6 border-card text-card hover:bg-card/10 bg-transparent"
          >
            <Link href="#galeria">Ver fotos</Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2 text-card/90">
            <MapPin className="h-5 w-5" />
            <span>{siteInfo.location.city}, {siteInfo.location.country}</span>
          </div>
          <div className="flex items-center gap-2 text-card/90">
            <Users className="h-5 w-5" />
            <span>Hasta {siteInfo.capacity.maxGuests} huéspedes</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-card/60 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-card/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
