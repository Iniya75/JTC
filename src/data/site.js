// Single source of truth for business details, product placeholders and links.
// Update values here; every section reads from this file.

export const business = {
  name: 'Vimal Trading Company',
  // Spelling follows the Tax Invoice. The project brief spelled it "Venkalakudi".
  street: '24/2, Venkalakadi 1st Street',
  city: 'Madurai - 1',
  state: 'Tamil Nadu',
  fssai: '12413012000348',
  gstin: '33AAAFV7777R1Z9',
  phones: ['9487579946'], // First number is used for WhatsApp and Call Now.
}

export const product = {
  brand: 'JTC GOLD',
  name: 'JTC GOLD Compounded Asafoetida Powder',
  category: 'Indian Spices & Seasonings',
  type: 'Compounded Asafoetida Powder (Hing)',
  // Replace null with real values, e.g. price: '₹120', packSize: '50 g'.
  price: null,
  packSize: null,
}

export const images = {
  product: { webp: '/images/jtc-gold-product.webp', png: '/images/jtc-gold-product.png' },
  label: '/images/jtc-gold-label.webp',
  agmark: '/images/jtc-gold-agmark.webp',
}

export const productAlt =
  'JTC GOLD Compounded Asafoetida Powder in a white jar with a red and yellow label showing AGMARK branding'

const whatsappMessage =
  'Hello, I am interested in JTC GOLD Compounded Asafoetida Powder. Please share the product details, pricing and availability.'

export const links = {
  whatsapp: `https://wa.me/91${business.phones[0]}?text=${encodeURIComponent(whatsappMessage)}`,
  phone: `tel:+91${business.phones[0]}`,
}

export const telFor = (number) => `tel:+91${number}`

export const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Our Product', id: 'product' },
  { label: 'About Us', id: 'about' },
  { label: 'Quality', id: 'quality' },
  { label: 'Contact', id: 'contact' },
]
