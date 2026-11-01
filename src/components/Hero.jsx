import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, BadgeCheck, FileText, MapPin } from 'lucide-react'
import { business, links } from '../data/site.js'
import Button from './ui/Button.jsx'
import ProductPicture from './ui/ProductPicture.jsx'
import WhatsAppIcon from './ui/WhatsAppIcon.jsx'

const highlights = [
  { icon: BadgeCheck, title: 'AGMARK branding', text: 'Displayed on packaging' },
  { icon: FileText, title: 'FSSAI details', text: `No. ${business.fssai}` },
  { icon: MapPin, title: 'Madurai-based', text: 'Tamil Nadu business' },
]

// Fine golden specks, like powder caught in light. Positions are % of the arch.
const specks = [
  [14, 30, 5], [22, 58, 3], [80, 24, 4], [88, 52, 6], [70, 12, 3], [33, 16, 3],
  [12, 74, 4], [90, 78, 3], [60, 8, 2], [26, 40, 2], [78, 66, 2],
]

const enter = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const x = useSpring(pointerX, { stiffness: 70, damping: 18 })
  const y = useSpring(pointerY, { stiffness: 70, damping: 18 })
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7])
  const rotateX = useTransform(y, [-0.5, 0.5], [4, -4])

  const onPointerMove = (event) => {
    if (event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }
  const onPointerLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      <div className="container-page grid items-center gap-14 pt-10 pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pt-14 lg:pb-28">
        <div>
          <motion.p {...enter(0.05)} className="eyebrow flex items-center gap-3 text-red">
            <span className="h-px w-9 bg-red" aria-hidden="true" />
            Quality in Every Pinch
          </motion.p>

          <motion.h1
            {...enter(0.15)}
            className="mt-6 text-[2.75rem] leading-[1.04] font-medium tracking-tight text-maroon sm:text-6xl xl:text-7xl"
          >
            Bring Home the Authentic Taste of <em className="font-normal text-red">Tradition.</em>
          </motion.h1>

          <motion.p {...enter(0.25)} className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            Discover JTC GOLD Compounded Asafoetida Powder – a traditional kitchen essential that adds distinctive
            aroma and flavour to your everyday cooking.
          </motion.p>

          <motion.div {...enter(0.35)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#product">
              Explore Our Product <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <Button href={links.whatsapp} external variant="outline">
              <WhatsAppIcon /> Order on WhatsApp
            </Button>
          </motion.div>

          <motion.ul
            {...enter(0.45)}
            className="mt-12 grid gap-5 border-t border-maroon/15 pt-7 sm:grid-cols-3 sm:gap-4"
          >
            {highlights.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3">
                <Icon size={20} className="mt-0.5 shrink-0 text-red" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink">{title}</p>
                  <p className="mt-0.5 text-xs leading-snug text-muted">{text}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          className="relative mx-auto w-full max-w-[29rem]"
          style={{ perspective: 1100 }}
        >
          <div className="arch absolute -inset-3 border border-maroon/20" aria-hidden="true" />
          <div className="arch relative aspect-[4/5] overflow-hidden bg-[radial-gradient(circle_at_50%_48%,#a81f27_0%,#75131b_46%,#4c0b11_100%)] shadow-lift">
            <div className="kolam absolute inset-0 opacity-[0.09]" aria-hidden="true" />
            <div
              className="absolute top-1/2 left-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-3xl"
              aria-hidden="true"
            />
            {specks.map(([left, top, size], index) => (
              <motion.span
                key={index}
                aria-hidden="true"
                className="absolute rounded-full bg-gold/70"
                style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
                animate={{ y: [0, -14, 0], opacity: [0.25, 0.85, 0.25] }}
                transition={{ duration: 5 + index * 0.6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
              />
            ))}
            <div className="absolute inset-x-[16%] bottom-[7.5%] h-7 rounded-[50%] bg-black/55 blur-xl" aria-hidden="true" />
          </div>

          <motion.div
            className="absolute inset-x-0 bottom-[9%] mx-auto w-[47%]"
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ProductPicture loading="eager" fetchPriority="high" className="h-auto w-full drop-shadow-[0_24px_30px_rgb(0_0_0/0.4)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
