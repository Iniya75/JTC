import Reveal from './ui/Reveal.jsx'

const dishes = [
  {
    name: 'Sambar',
    note: 'A South Indian lentil and vegetable staple',
    src: '/images/food-sambar.webp',
    alt: 'White bowl of vegetable sambar on a bamboo mat',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    name: 'Rasam',
    note: 'A thin, peppery everyday classic',
    src: '/images/food-rasam.webp',
    alt: 'White bowl of peppery red rasam beside dried chillies and fresh coriander',
    span: '',
  },
  {
    name: 'Dal',
    note: 'Tempered lentils for rice or roti',
    src: '/images/food-dal.webp',
    alt: 'Dal tadka in a brass bowl topped with dried red chillies and herbs',
    span: '',
  },
  {
    name: 'Traditional Curries',
    note: 'Slow-simmered gravies and masalas',
    src: '/images/food-curry.webp',
    alt: 'Blue bowl of mattar paneer, a traditional Indian curry of peas and paneer',
    span: '',
  },
  {
    name: 'Vegetable Dishes',
    note: 'Everyday vegetables, simply cooked',
    src: '/images/food-vegetables.webp',
    alt: 'Close view of mixed vegetables in a rich tomato gravy garnished with coriander',
    span: 'md:col-span-2 lg:col-span-1',
  },
]

export default function CookingSection() {
  return (
    <section aria-labelledby="cooking-title" className="section-y bg-cream">
      <div className="container-page">
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow text-red">In the Kitchen</p>
            <h2 id="cooking-title" className="heading-section mt-5 text-maroon">
              Small Pinch. Distinctive Flavour.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">
              Asafoetida is commonly used in Indian cooking, where a pinch is often added to hot oil or ghee during
              tempering. It is a familiar part of many everyday dishes across the country.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[15rem] gap-4 sm:auto-rows-[17rem] md:grid-cols-3 lg:grid-cols-4">
          {dishes.map(({ name, note, src, alt, span }, index) => (
            <Reveal key={name} delay={index * 0.06} className={span}>
              <figure className="group relative h-full overflow-hidden rounded-3xl bg-maroon shadow-soft">
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-5 pt-12 text-white">
                  <p className="font-display text-xl font-medium">{name}</p>
                  <p className="mt-0.5 text-sm text-white/90">{note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-xs text-muted">Food photographs show typical dishes and are for illustration only.</p>
      </div>
    </section>
  )
}
