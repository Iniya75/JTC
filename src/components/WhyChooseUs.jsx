import { motion } from 'framer-motion'
import { ClipboardCheck, CookingPot, Handshake, Wind } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'

const features = [
  {
    icon: CookingPot,
    title: 'Traditional Kitchen Essential',
    text: 'A familiar ingredient used in traditional Indian cooking.',
  },
  {
    icon: Wind,
    title: 'Distinctive Aroma',
    text: 'Adds the characteristic aroma of asafoetida to recipes.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Information',
    text: 'AGMARK branding as shown on the pack, with FSSAI details displayed clearly.',
  },
  {
    icon: Handshake,
    title: 'Trusted Business',
    text: 'Business identity and contact information presented transparently.',
  },
]

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="section-y relative overflow-hidden bg-maroon text-cream">
      <div className="kolam absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="container-page relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">Why Choose Us</p>
          <h2 id="why-title" className="heading-section mt-5">
            Why Choose JTC GOLD?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="group h-full rounded-3xl border border-white/10 bg-white/[0.06] p-7 transition-colors duration-300 hover:border-gold/50 hover:bg-white/10"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-gold text-maroon-deep transition-transform duration-300 group-hover:-rotate-6">
                  <Icon size={26} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="mt-7 text-xl leading-snug font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/80">{text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
