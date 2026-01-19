import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Gallery } from "@/components/gallery"
import { Amenities } from "@/components/amenities"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Amenities />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
