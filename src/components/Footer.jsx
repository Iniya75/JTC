import { business, navItems, product, telFor } from '../data/site.js'
import Wordmark from './ui/Wordmark.jsx'

const headingClass = 'text-xs font-bold tracking-[0.2em] text-gold uppercase'

export default function Footer() {
  return (
    <footer className="bg-maroon-deep text-cream/85">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-10 lg:py-20">
        <div>
          <Wordmark tone="light" className="text-xl" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            JTC GOLD Compounded Asafoetida Powder, a traditional kitchen essential from {business.name}, Madurai.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className={`font-sans ${headingClass}`}>Quick Links</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={`font-sans ${headingClass}`}>Product</h2>
          <ul className="mt-5 space-y-2.5 text-sm leading-relaxed">
            <li>{product.name}</li>
            <li>{product.category}</li>
            <li>FSSAI No. {business.fssai}</li>
            <li>GSTIN {business.gstin}</li>
          </ul>
        </div>

        <div>
          <h2 className={`font-sans ${headingClass}`}>Contact</h2>
          <address className="mt-5 text-sm leading-relaxed not-italic">
            {business.name}
            <br />
            {business.street},
            <br />
            {business.city}, {business.state}.
          </address>
          <ul className="mt-4 space-y-1.5 text-sm">
            {business.phones.map((number) => (
              <li key={number}>
                <a href={telFor(number)} className="transition-colors hover:text-gold">
                  +91 {number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page space-y-2 py-6 text-xs text-cream/70">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>
            Sambar photo by Samphotography,{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Indian_Sambar.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-gold"
            >
              Wikimedia Commons
            </a>{' '}
            (CC BY-SA 4.0).
          </p>
        </div>
      </div>
    </footer>
  )
}
