import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, MapPin, Phone } from 'lucide-react'
import { business, links, telFor } from '../data/site.js'
import Button from './ui/Button.jsx'
import Reveal from './ui/Reveal.jsx'
import WhatsAppIcon from './ui/WhatsAppIcon.jsx'

export default function ContactSection() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-cream pb-20 sm:pb-24 lg:pb-32">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(120deg,#d71920_0%,#a01620_45%,#75131b_100%)] px-6 py-16 text-center text-white shadow-lift sm:px-12 lg:py-24">
            <div className="kolam absolute inset-0 opacity-[0.07]" aria-hidden="true" />
            <div className="relative">
              <h2 id="contact-title" className="heading-section">
                Interested in JTC GOLD?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/95">
                Connect with us to enquire about our product, pricing and availability.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  as="button"
                  type="button"
                  variant="light"
                  onClick={() => setShowDetails((value) => !value)}
                  aria-expanded={showDetails}
                  aria-controls="contact-details"
                >
                  Contact Us
                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </Button>
                <Button href={links.whatsapp} external variant="gold">
                  <WhatsAppIcon /> WhatsApp Now
                </Button>
                <Button href={links.phone} variant="light">
                  <Phone size={17} aria-hidden="true" /> Call Now
                </Button>
              </div>

              <AnimatePresence initial={false}>
                {showDetails && (
                  <motion.div
                    id="contact-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="mx-auto mt-8 grid max-w-2xl gap-6 rounded-2xl bg-white p-6 text-left text-ink sm:grid-cols-2 sm:p-8">
                      <div>
                        <p className="flex items-center gap-2 text-sm font-bold text-maroon">
                          <Phone size={16} aria-hidden="true" /> Phone
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {business.phones.map((number) => (
                            <li key={number}>
                              <a href={telFor(number)} className="font-semibold hover:text-red">
                                +91 {number}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="flex items-center gap-2 text-sm font-bold text-maroon">
                          <MapPin size={16} aria-hidden="true" /> Address
                        </p>
                        <address className="mt-3 leading-relaxed text-muted not-italic">
                          {business.name}
                          <br />
                          {business.street},
                          <br />
                          {business.city}, {business.state}.
                        </address>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
