export default function Wordmark({ tone = 'dark', className = '' }) {
  const [jtc, gold] = tone === 'light' ? ['text-cream', 'text-gold'] : ['text-red', 'text-maroon']
  return (
    <span className={`inline-flex items-baseline gap-1.5 font-display leading-none ${className}`}>
      <span className={`text-[1.75em] font-semibold tracking-tight ${jtc}`}>JTC</span>
      <span className={`text-[0.8em] font-semibold tracking-[0.24em] ${gold}`}>GOLD</span>
    </span>
  )
}
