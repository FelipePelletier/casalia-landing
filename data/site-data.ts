import { Wifi, UtensilsCrossed, Car, Users, Bed, Bath, TreePine, Shield, Waves, ShoppingBag, Coffee } from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Información principal del alojamiento
export const siteInfo = {
  name: "Casa Lia",
  tagline: "Bosque Peralta Ramos",
  heroTitle: "Casa Lia",
  heroSubtitle: "Tu refugio natural en Mar del Plata",
  heroDescription: "Disfruta de la tranquilidad del bosque a minutos de la playa. Espacio ideal para familias y grupos.",
  location: {
    neighborhood: "Bosque Peralta Ramos",
    city: "Mar del Plata",
    province: "Buenos Aires",
    country: "Argentina",
    fullAddress: "Bosque Peralta Ramos, Mar del Plata, Buenos Aires, Argentina",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12518.764562347892!2d-57.58!3d-38.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d95c7c4c6c63%3A0x62c19f9e2a0d7ea!2sBosque%20Peralta%20Ramos%2C%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar",
  },
  capacity: {
    guests: "8-9",
    maxGuests: 9,
  },
  contact: {
    email: "contacto@casalia.com",
    airbnbUrl: "https://airbnb.com",
  },
}

// Navegación
export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#galeria", label: "Galería" },
  { href: "#amenidades", label: "Amenidades" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
]

// Imágenes de la galería
export const galleryImages = [
  { src: "/images/sala-estar.jpg", alt: "Amplia sala de estar con luz natural" },
  { src: "/images/cocina.jpg", alt: "Cocina completa y equipada" },
  { src: "/images/dormitorio.jpg", alt: "Dormitorio principal cómodo" },
  { src: "/images/exterior.jpg", alt: "Vista exterior de la casa" },
  { src: "/images/jardin.jpg", alt: "Jardín y área de estacionamiento" },
  { src: "/images/comedor.jpg", alt: "Comedor para toda la familia" },
]

// Amenidades
export interface Amenity {
  icon: LucideIcon
  title: string
  description: string
}

export const amenities: Amenity[] = [
  {
    icon: Wifi,
    title: "WiFi de alta velocidad",
    description: "Conexión estable para trabajo remoto o entretenimiento",
  },
  {
    icon: UtensilsCrossed,
    title: "Cocina completa",
    description: "Equipada con todo lo necesario para preparar tus comidas",
  },
  {
    icon: Car,
    title: "Estacionamiento privado",
    description: "Espacio seguro para tu vehículo dentro de la propiedad",
  },
  {
    icon: Users,
    title: `Capacidad ${siteInfo.capacity.guests} personas`,
    description: "Ideal para familias grandes o grupos de amigos",
  },
  {
    icon: Bed,
    title: "Habitaciones confortables",
    description: "Camas cómodas con ropa de cama de calidad",
  },
  {
    icon: Bath,
    title: "Baños completos",
    description: "Toallas y artículos de higiene incluidos",
  },
  {
    icon: TreePine,
    title: "Entorno natural",
    description: `Rodeado del tranquilo ${siteInfo.location.neighborhood}`,
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Barrio residencial tranquilo y seguro",
  },
]

// Lugares cercanos
export interface NearbyPlace {
  icon: LucideIcon
  name: string
  time: string
}

export const nearbyPlaces: NearbyPlace[] = [
  { icon: Waves, name: "Playa Perla Norte", time: "10 min en auto" },
  { icon: ShoppingBag, name: "Centro Comercial", time: "15 min en auto" },
  { icon: Coffee, name: "Restaurantes locales", time: "5 min en auto" },
]

// Beneficios de reservar directo
export const directBookingBenefits = [
  "Mejor precio sin comisiones de plataformas",
  "Comunicación directa con el propietario",
  "Flexibilidad en fechas y condiciones",
  "Atención personalizada antes y durante tu estadía",
]

// Textos de secciones
export const sectionTexts = {
  gallery: {
    title: "Conoce Casa Lia",
    subtitle: "Espacios amplios y luminosos pensados para tu comodidad y descanso",
  },
  amenities: {
    title: "Todo lo que necesitas",
    subtitle: "Casa Lia cuenta con todas las comodidades para que tu estadía sea perfecta",
  },
  location: {
    title: "Ubicación privilegiada",
    description: `Ubicada en el encantador ${siteInfo.location.neighborhood}, Casa Lia ofrece la combinación perfecta entre naturaleza y accesibilidad. A pocos minutos de las mejores playas de ${siteInfo.location.city} y rodeada de la tranquilidad del bosque.`,
  },
  contact: {
    title: "Reserva tu estadía",
    subtitle: "Consulta disponibilidad y reserva directamente. Responderemos a la brevedad.",
  },
  footer: {
    description: `Tu refugio en el ${siteInfo.location.neighborhood}. Disfruta de la naturaleza, la tranquilidad y la cercanía a las mejores playas de ${siteInfo.location.city}.`,
  },
}
