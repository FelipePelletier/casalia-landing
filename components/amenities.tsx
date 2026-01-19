import { amenities, sectionTexts } from "@/data/site-data"

export function Amenities() {
  return (
    <section id="amenidades" className="py-20 sm:py-28 bg-secondary scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-4">
            {sectionTexts.amenities.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {sectionTexts.amenities.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <amenity.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{amenity.title}</h3>
              <p className="text-muted-foreground text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
