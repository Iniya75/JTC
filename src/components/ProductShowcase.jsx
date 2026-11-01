import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageSquareText } from 'lucide-react'
import { images, links, product, productAlt } from '../data/site.js'
import Button from './ui/Button.jsx'
import Reveal from './ui/Reveal.jsx'
import WhatsAppIcon from './ui/WhatsAppIcon.jsx'

const views = [
  { id: 'pack', label: 'Full pack', src: images.product.webp, alt: productAlt, fit: 'object-contain p-8 sm:p-12' },
  {
    id: 'label',
    label: 'Label',
    src: images.label,
    alt: 'Front label of the JTC GOLD pack showing the brand name, AGMARK branding and product name',
    fit: 'object-contain p-6 sm:p-10',
  },
]

export default function ProductShowcase() {
  const [viewId, setViewId] = useState('pack')
  const [origin, setOrigin] = useState('50% 50%')
  const [zoomed, setZoomed] = useState(false)
  const view = views.find(({ id }) => id === viewId)

  const onPointerMove = (event) => {
    if (event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    setOrigin(`${((event.clientX - rect.left) / rect.width) * 100}% ${((event.clientY - rect.top) / rect.height) * 100}%`)
    setZoomed(true)
  }

  const details = [
    { label: 'Category', value: product.category },
    { label: 'Type', value: product.type },
    { label: 'Pack size', value: product.packSize ?? 'Available on enquiry' },
    { label: 'Price', value: product.price ?? 'Available on enquiry' },
  ]

  return (
    <section id="product" aria-labelledby="product-title" className="section-y bg-cream">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-red">Our Product</p>
          <h2 id="product-title" className="heading-section mt-5 text-maroon">
            One Pack. A Kitchen Essential.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <article className="grid overflow-hidden rounded-[2rem] bg-white shadow-soft lg:grid-cols-[1.05fr_1fr]">
            <div className="bg-[radial-gradient(circle_at_50%_45%,#fff3c4_0%,#fff9e9_62%)] p-5 sm:p-8">
              <div
                onPointerMove={onPointerMove}
                onPointerLeave={() => setZoomed(false)}
                className="relative aspect-square cursor-zoom-in overflow-hidden rounded-2xl"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={view.id}
                    src={view.src}
                    alt={view.alt}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 h-full w-full ${view.fit}`}
                  />
                </AnimatePresence>
                <div
                  className="pointer-events-none absolute inset-0 hidden transition-opacity duration-200 lg:block"
                  style={{ opacity: zoomed ? 1 : 0, background: 'linear-gradient(#fff9e9,#fff9e9)' }}
                  aria-hidden="true"
                >
                  <img
                    src={view.src}
                    alt=""
                    className={`h-full w-full ${view.fit}`}
                    style={{ transform: 'scale(2)', transformOrigin: origin }}
                  />
                </div>
              </div>

              <div className="mt-5 flex justify-center gap-3" role="group" aria-label="Choose product view">
                {views.map(({ id, label, src }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setViewId(id)}
                    aria-pressed={viewId === id}
                    aria-label={`Show ${label.toLowerCase()} image`}
                    className={`size-20 overflow-hidden rounded-xl border-2 bg-white p-1.5 transition hover:-translate-y-0.5 ${
                      viewId === id ? 'border-red' : 'border-maroon/10 hover:border-maroon/40'
                    }`}
                  >
                    <img src={src} alt="" loading="lazy" className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-14">
              <p className="eyebrow text-red">{product.category}</p>
              <h3 className="mt-4 text-3xl leading-tight font-medium text-maroon sm:text-4xl">{product.name}</h3>
              <p className="mt-5 leading-relaxed text-muted">
                A compounded asafoetida powder for the everyday Indian kitchen, used to add the distinctive aroma of
                hing to home-cooked dishes.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-maroon/10 pt-7">
                {details.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-ink">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button href="#contact" variant="outline" className="flex-1">
                  <MessageSquareText size={17} aria-hidden="true" /> Product Enquiry
                </Button>
                <Button href={links.whatsapp} external className="flex-1">
                  <WhatsAppIcon /> Order on WhatsApp
                </Button>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
