import { MapPin } from 'lucide-react'
import { business } from '../data/site.js'
import Reveal from './ui/Reveal.jsx'

export default function AboutUs() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y bg-cream">
      <div className="container-page grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow text-red">About Us</p>
            <h2 id="about-title" className="heading-section mt-5 text-maroon">
              From Madurai, With a Commitment to Quality.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-7 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
              <p>
                {business.name} is a business based in Madurai, Tamil Nadu, and the name behind JTC GOLD Compounded
                Asafoetida Powder.
              </p>
              <p>
                We believe customers deserve to know exactly who they are dealing with. That is why our address,
                registration details and phone numbers are all on this page, and why we are always happy to answer
                your questions about the product.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="self-center">
          <address className="arch relative overflow-hidden bg-maroon px-8 pt-24 pb-10 text-center text-cream not-italic shadow-lift">
            <div className="kolam absolute inset-0 opacity-[0.07]" aria-hidden="true" />
            <div className="relative">
              <MapPin size={28} className="mx-auto text-gold" aria-hidden="true" />
              <p className="mt-5 font-display text-2xl">{business.name}</p>
              <p className="mt-4 leading-relaxed text-cream/90">
                {business.street},
                <br />
                {business.city}, {business.state}.
              </p>
            </div>
          </address>
        </Reveal>
      </div>
    </section>
  )
}
