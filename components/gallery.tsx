"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { galleryImages, sectionTexts } from "@/data/site-data"

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-4">
            {sectionTexts.gallery.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {sectionTexts.gallery.subtitle}
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-8">
          <div className="overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-[16/9]">
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={image.src}
                  className="min-w-full h-full relative cursor-pointer"
                  onClick={() => openLightbox(index)}
                  onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Ver ${image.alt} en pantalla completa`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg bg-card/90 hover:bg-card"
            onClick={prevSlide}
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg bg-card/90 hover:bg-card"
            onClick={nextSlide}
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-card w-6" : "bg-card/50"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                index === currentIndex ? "ring-2 ring-primary ring-offset-2" : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Seleccionar ${image.alt}`}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" sizes="150px" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-card hover:bg-card/10"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Cerrar galería"
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-card hover:bg-card/10"
            onClick={(e) => {
              e.stopPropagation()
              prevLightbox()
            }}
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div
            className="relative w-full max-w-5xl aspect-[4/3] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src || "/placeholder.svg"}
              alt={galleryImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-card hover:bg-card/10"
            onClick={(e) => {
              e.stopPropagation()
              nextLightbox()
            }}
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-card">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
