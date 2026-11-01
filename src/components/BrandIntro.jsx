import Reveal from './ui/Reveal.jsx'

const facts = [
  { label: 'Brand', value: 'JTC GOLD' },
  { label: 'Product', value: 'Compounded Asafoetida Powder' },
  { label: 'Also known as', value: 'Hing · Perungayam' },
]

export default function BrandIntro() {
  return (
    <section aria-labelledby="brand-title" className="section-y bg-white">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-md lg:order-1">
          <div className="arch overflow-hidden bg-maroon-deep shadow-lift">
            <img
              src="/images/brand-spices.webp"
              alt="Small bowls of colourful Indian spice powders arranged in a circle on a dark surface"
              loading="lazy"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:order-2">
          <Reveal>
            <p className="eyebrow text-red">The Brand</p>
            <h2 id="brand-title" className="heading-section mt-5 text-maroon">
              Tradition, Quality &amp; Flavour in Every Pack.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                JTC GOLD is a compounded asafoetida powder, the seasoning Indian kitchens know as hing, and Tamil
                homes as perungayam. A small amount brings the characteristic aroma of asafoetida to everyday cooking.
              </p>
              <p>
                It is offered by Vimal Trading Company of Madurai, and every pack carries the bright red and yellow
                JTC GOLD label, so it is easy to recognise on the shelf and in your kitchen.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-9 divide-y divide-maroon/10 border-y border-maroon/10">
              {facts.map(({ label, value }) => (
                <div key={label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5">
                  <dt className="text-sm text-muted">{label}</dt>
                  <dd className="font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
