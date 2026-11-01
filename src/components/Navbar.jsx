import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { links, navItems } from '../data/site.js'
import Button from './ui/Button.jsx'
import WhatsAppIcon from './ui/WhatsAppIcon.jsx'
import Wordmark from './ui/Wordmark.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const pendingTarget = useRef(null)

  // The collapsing menu changes page height and would cancel a smooth scroll,
  // so menu links scroll only once it has finished closing.
  const scrollToPending = () => {
    if (!pendingTarget.current) return
    document.getElementById(pendingTarget.current)?.scrollIntoView()
    history.pushState(null, '', `#${pendingTarget.current}`)
    pendingTarget.current = null
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlights the section crossing the upper-middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting)
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white/95 shadow-soft backdrop-blur' : 'bg-cream'
      }`}
    >
      <nav aria-label="Main" className="container-page flex h-20 items-center justify-between gap-6">
        <a href="#home" className="shrink-0" aria-label="JTC GOLD home">
          <Wordmark className="text-lg" />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`relative py-2 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-red after:transition-transform after:duration-300 hover:text-red ${
                  active === id ? 'text-red after:scale-x-100' : 'text-ink after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="grid size-11 place-items-center rounded-full text-maroon transition-colors hover:bg-maroon hover:text-gold"
          >
            <WhatsAppIcon size={21} />
          </a>
          <Button href={links.whatsapp} external className="!min-h-11 !px-6 whitespace-nowrap max-[379px]:!hidden">
            Buy Now
          </Button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-11 place-items-center rounded-full text-maroon transition-colors hover:bg-maroon/10 lg:hidden"
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence onExitComplete={scrollToPending}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden border-t border-maroon/10 lg:hidden"
          >
            <ul className="container-page py-4">
              {navItems.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(event) => {
                      event.preventDefault()
                      pendingTarget.current = id
                      setOpen(false)
                    }}
                    className="block border-b border-maroon/10 py-4 font-display text-2xl text-maroon hover:text-red"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-5 pb-2">
                <Button href={links.whatsapp} external className="w-full">
                  Buy Now
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
