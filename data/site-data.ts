import {
  Wifi,
  UtensilsCrossed,
  Car,
  Users,
  Bed,
  Bath,
  TreePine,
  Shield,
  Waves,
  Dog,
  ShoppingBag,
  Coffee,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Información principal del alojamiento
export const siteInfo = {
  name: "Casa Lia",
  tagline: "Bosque Peralta Ramos",
  heroTitle: "Casa Lia",
  heroSubtitle: "Tu refugio natural en Mar del Plata",
  heroDescription:
    "Disfruta de la tranquilidad del bosque a minutos de la playa. Espacio ideal para familias y grupos.",
  location: {
    neighborhood: "Bosque Peralta Ramos",
    city: "Mar del Plata",
    province: "Buenos Aires",
    country: "Argentina",
    fullAddress: "Bosque Peralta Ramos, Mar del Plata, Buenos Aires, Argentina",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12518.764562347892!2d-57.58!3d-38.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d95c7c4c6c63%3A0x62c19f9e2a0d7ea!2sBosque%20Peralta%20Ramos%2C%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar",
  },
  capacity: {
    guests: "8-9",
    maxGuests: 9,
  },
  contact: {
    email: "lacasadelia1@gmail.com",
    airbnbUrl:
      "https://www.airbnb.com.ar/rooms/1587810392400296553?check_in=2026-01-30&check_out=2026-02-01&source_impression_id=p3_1768849459_P33F0GPix_Pnbh50&federated_search_id=1878b51a-865d-43ad-95bc-b7d9db33f072",
  },
};

// Navegación
export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#galeria", label: "Galería" },
  { href: "#amenidades", label: "Amenidades" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

// Imágenes de la galería
export const galleryImages = [
  {
    src: "/images/living1.jfif",
    alt: "Amplia sala de estar con luz natural",
  },
  {
    src: "/images/living2.jfif",
    alt: "2do angulo de amplia sala de estar con luz natural",
  },
  {
    src: "/images/living3.jfif",
    alt: "3er angulo de amplia sala de estar con luz natural",
  },
  {
    src: "/images/living4.jfif",
    alt: "4to angulo de amplia sala de estar con luz natural",
  },
  {
    src: "/images/living5.jfif",
    alt: "5to angulo de amplia sala de estar con luz natural",
  },
  {
    src: "/images/living6.jfif",
    alt: "6to angulo de amplia sala de estar con luz natural",
  },
  {
    src: "/images/cocina1.jfif",
    alt: "Cocina amplia y bien equipada",
  },
  {
    src: "/images/cocina2.jfif",
    alt: "2do angulo de cocina amplia y bien equipada",
  },
  {
    src: "/images/cocina3.jfif",
    alt: "3er angulo de cocina amplia y bien equipada",
  },
  {
    src: "/images/cocina4.jfif",
    alt: "4to angulo de cocina amplia y bien equipada",
  },
  { src: "/images/parking1.jfif", alt: "Parking amplio" },
  { src: "/images/dormitorio1.jfif", alt: "Dormitorio 1 cómodo" },
  { src: "/images/banodom1.jfif", alt: "Banio de dormitorio 1 cómodo" },
  { src: "/images/bano2dom1.jfif", alt: "Banio 2 de dormitorio 1 cómodo" },
  { src: "/images/dormitorio2.jfif", alt: "Dormitorio 2 cómodo" },
  { src: "/images/dormitorio22.jfif", alt: "2do angulo dormitorio cómodo" },
  { src: "/images/dormitorio222.jfif", alt: "3er angulo dormitorio 2 cómodo" },
  { src: "/images/bano1.jfif", alt: "Banio del living" },
  { src: "/images/bano2.jfif", alt: "Inodoro con bidet" },
  { src: "/images/parque1.jfif", alt: "Parque de la casa" },
  { src: "/images/parque2.jfif", alt: "2do angulo del parque de la casa" },
  { src: "/images/parque3.jfif", alt: "3er angulo del parque de la casa" },
  { src: "/images/parque5.jfif", alt: "5to angulo del parque de la casa" },
  { src: "/images/parque6.jfif", alt: "6to angulo del parque de la casa" },
  { src: "/images/lavarropa.jfif", alt: "Lavarropa de la casa" },
  { src: "/images/termotanque.jfif", alt: "Termotanque de la casa" },
];

// Amenidades
export interface Amenity {
  icon: LucideIcon;
  title: string;
  description: string;
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
    description:
      "Equipada con todo lo necesario para preparar tus comidas, incluye parrilla en el exterior",
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
    description:
      "2 habitaciones con 1 cama matrimonial y 1 individual por cada una, sumada a una cama nido con 3 colchones. Ropa de cama incluida",
  },
  {
    icon: Bath,
    title: "Baños completos",
    description: "Toallas y artículos de higiene incluidos",
  },
  {
    icon: Dog,
    title: "Pet friendly",
    description: `Se permiten mascotas`,
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Alarma de casa y camaras de seguridad incluidas",
  },
];

// Lugares cercanos
export interface NearbyPlace {
  icon: LucideIcon;
  name: string;
  time: string;
}

export const nearbyPlaces: NearbyPlace[] = [
  { icon: Waves, name: "Playas del Sur", time: "5 min en auto" },
  {
    icon: ShoppingBag,
    name: "Centro Comercial Puerto",
    time: "15 min en auto",
  },
  { icon: Coffee, name: "Restaurantes locales", time: "15 min en auto" },
];

// Beneficios de reservar directo
export const directBookingBenefits = [
  "Mejor precio sin comisiones de plataformas",
  "Comunicación directa con el propietario",
  "Flexibilidad en fechas y condiciones",
  "Atención personalizada antes y durante tu estadía",
];

// Textos de secciones
export const sectionTexts = {
  gallery: {
    title: "Conoce Casa Lia",
    subtitle:
      "Espacios amplios y luminosos pensados para tu comodidad y descanso",
  },
  amenities: {
    title: "Todo lo que necesitas",
    subtitle:
      "Casa Lia cuenta con todas las comodidades para que tu estadía sea perfecta",
  },
  location: {
    title: "Ubicación privilegiada",
    description: `Ubicada en el encantador ${siteInfo.location.neighborhood}, Casa Lia ofrece la combinación perfecta entre naturaleza y accesibilidad. A pocos minutos de las mejores playas de ${siteInfo.location.city} y rodeada de la tranquilidad del bosque.`,
  },
  contact: {
    title: "Reserva tu estadía",
    subtitle:
      "Consulta disponibilidad y reserva directamente. Responderemos a la brevedad.",
  },
  footer: {
    description: `Tu refugio en el ${siteInfo.location.neighborhood}. Disfruta de la naturaleza, la tranquilidad y la cercanía a las mejores playas de ${siteInfo.location.city}.`,
  },
};
