const variants = {
  primary: 'bg-red text-white shadow-[0_14px_30px_-14px_rgb(215_25_32/0.8)] hover:bg-maroon',
  gold: 'bg-gold text-maroon-deep shadow-[0_14px_30px_-14px_rgb(255_201_40/0.7)] hover:bg-white',
  outline: 'border border-maroon/25 text-maroon hover:border-maroon hover:bg-maroon hover:text-white',
  light: 'border border-white/35 text-white hover:border-white hover:bg-white hover:text-maroon',
}

const base =
  'inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3 text-sm font-bold ' +
  'transition duration-300 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0'

export default function Button({ as: Tag = 'a', variant = 'primary', className = '', external, children, ...props }) {
  const newTab = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...newTab} {...props}>
      {children}
    </Tag>
  )
}
