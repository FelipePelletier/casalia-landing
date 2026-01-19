import { MapPin, Clock } from "lucide-react"
import { siteInfo, nearbyPlaces, sectionTexts } from "@/data/site-data"

export function Location() {
  return (
    <section id="ubicacion" className="py-20 sm:py-28 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6">
              {sectionTexts.location.title}
            </h2>
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-lg font-medium text-foreground">{siteInfo.location.neighborhood}</p>
                <p className="text-muted-foreground">{siteInfo.location.city}, {siteInfo.location.province}, {siteInfo.location.country}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {sectionTexts.location.description}
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Lugares cercanos
              </h3>
              <div className="grid gap-3">
                {nearbyPlaces.map((place) => (
                  <div key={place.name} className="flex items-center gap-3 bg-secondary rounded-lg p-4">
                    <place.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{place.name}</span>
                    <span className="text-muted-foreground text-sm ml-auto">{place.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-muted">
              <iframe
                src={siteInfo.location.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación de ${siteInfo.name} en ${siteInfo.location.neighborhood}, ${siteInfo.location.city}`}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg">
              <p className="text-sm text-muted-foreground">Zona residencial</p>
              <p className="font-semibold text-foreground">Tranquila y segura</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
