import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          className="fixed right-5 bottom-5 z-40 grid size-12 place-items-center rounded-full bg-maroon text-gold shadow-lift ring-1 ring-gold/30 transition-colors hover:bg-red hover:text-white sm:right-8 sm:bottom-8"
        >
          <ArrowUp size={20} aria-hidden="true" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
