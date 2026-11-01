import { business, images, product } from '../data/site.js'
import Reveal from './ui/Reveal.jsx'

const records = [
  { label: 'Brand', value: product.brand },
  { label: 'Business name', value: business.name },
  { label: 'FSSAI No.', value: business.fssai, mono: true },
  { label: 'GSTIN', value: business.gstin, mono: true },
]

export default function QualitySection() {
  return (
    <section id="quality" aria-labelledby="quality-title" className="section-y bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <p className="eyebrow text-red">Quality &amp; Trust</p>
            <h2 id="quality-title" className="heading-section mt-5 text-maroon">
              Clear Information, Openly Shared.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Good food starts with knowing what you are buying and who you are buying it from. Here are the details
              shown on our pack and held by our business.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <img
                src={images.agmark}
                alt="AGMARK wording as printed on the JTC GOLD label"
                width="486"
                height="124"
                loading="lazy"
                className="h-auto w-44 shrink-0 rounded-lg"
              />
              <figcaption className="text-sm leading-relaxed text-muted">
                <strong className="block font-bold text-ink">AGMARK, as visible on the product</strong>
                Shown here exactly as it is printed on the JTC GOLD label.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <dl className="divide-y divide-maroon/10 rounded-3xl bg-cream px-7 py-3 shadow-soft sm:px-10 sm:py-5">
            {records.map(({ label, value, mono }) => (
              <div key={label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5">
                <dt className="text-sm text-muted">{label}</dt>
                <dd className={`font-semibold text-ink ${mono ? 'tracking-wider tabular-nums' : ''}`}>{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
