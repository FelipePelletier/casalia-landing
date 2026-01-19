import Link from "next/link"
import { MapPin, Mail } from "lucide-react"
import { siteInfo, navLinks, sectionTexts } from "@/data/site-data"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2">
            <Link href="/" className="font-serif text-2xl font-semibold text-background">
              {siteInfo.name}
            </Link>
            <p className="text-background/70 mt-3 max-w-md">
              {sectionTexts.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Navegación</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span>{siteInfo.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Mail className="h-5 w-5 shrink-0" />
                <span>{siteInfo.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            {new Date().getFullYear()} {siteInfo.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              Términos y condiciones
            </Link>
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
