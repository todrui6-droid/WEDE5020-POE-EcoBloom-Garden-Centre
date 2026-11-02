# WEDE5020 POE Part 3 - EcoBloom

**Student:** Fortune Moetapele  
**Module:** Web Development (Introduction) WEDE5020  
**Live Site: https://astonishing-youtiao-aafccd.netlify.app  
**GitHub:** https://github.com/your-username/ecobloom-wede5020

## 1. Project Overview
EcoBloom is an eco-friendly products store. The website showcases sustainable products, why choose us, and allows customers to enquire and contact. Built with HTML5, CSS3, JavaScript, fully responsive.

## 2. Changelog

### Part 2 - What Was Already Done (Your Current README Content)
**2.3 Typography:** Used font-family Poppins & Open Sans, font-size clamp() and rem for scale, font-weight 400/700, line-height 1.6, letter-spacing 0.02em

**2.4 Layout:** Flexbox used for header/nav/hero with display:flex, flex-direction, justify-content, align-items. Grid used for .cards and .why with grid-template-columns repeat(3,1fr)

**2.5 Visual:** color, background-color, border, box-shadow, border-radius. Pseudo :hover on .card/.btn/nav a, :focus with outline, :active scale.

**3.1 Breakpoints:** 1024px desktop, 768px tablet (3 cols -> 2 cols), 650px mobile (2 cols -> 1 col). Tested with DevTools.

**3.2 Relative Units:** rem for fonts, % for padding (7%), vh for hero (65vh), fr, clamp().

**3.3 Responsive Images:** Used srcset (480w,800w,1200w) and sizes (100vw mobile, 50vw tablet, 33vw desktop) on all product images in #products section.

### Part 2 Feedback Fixes (73/85 to target 85/85)
| Feedback | Fix Implemented | File |
|----------|-----------------|------|
| Pseudo-Classes 7/10 - could be improved | Confirmed :hover on .card/.btn/nav a, :focus with outline, :active scale(0.98). Added transition: all 0.3s ease for smoothness | style.css |
| Media Queries 7/10 - mostly responsive | Added fine-tuning for 768px (3->2 cols) and 650px (2->1 col). Tested in DevTools, fixed nav wrapping | style.css |
| Layout Structure 4/5 - minor alignment | Fixed .cards grid gap 24px, centered .why section, added align-items:center to header flex | style.css |
| Navigation Menu 4/5 | Fixed mobile nav - hamburger menu now toggles correctly at 650px, spacing 16px | style.css + main.js |
| Images 4/5 | Verified srcset implementation on all product images, added alt="EcoBloom sustainable product [name]" | index.html, products section |

### Part 3 - New Features
- **JS Interactive:** Accordion FAQ, Leaflet map (contact.html), Lightbox on product images, AOS scroll animations
- **Dynamic Content:** Products loaded from JS array in #products, live search filter #searchInput
- **SEO:** Meta titles/descriptions, robots.txt, sitemap.xml, Open Graph tags
- **Forms:** enquiry.html (shows price/availability) + contact.html (mailto + AJAX + inline errors)
- **Deployment:** Netlify HTTPS

## 3. Part 3 Technical Details

### 2.1 Interactive Elements
- Accordion: FAQ in about.html
- Map: Leaflet map in contact.html - shows EcoBloom location
- Lightbox: Product images open larger
- Animations: AOS fade-up on .cards

### 2.2 Dynamic Content
- `const ecoProducts = [{name:"Bamboo Toothbrush", price:"R45", img:"bamboo-toothbrush-ecobloom-480w.jpg"},...]` loaded via JS
- Search: filters ecoProducts by name as user types

### 3.1 On-Page SEO for EcoBloom
- **Keywords:** eco-friendly products South Africa, sustainable products, bamboo products, zero waste store, EcoBloom
- **Title Example:** `EcoBloom | Eco-Friendly & Sustainable Products in SA | Shop Now`
- **Meta Description:** `Shop eco-friendly products at EcoBloom. Sustainable bamboo, zero waste & natural products in South Africa. Delivery nationwide.`
- **Headers:** H1: EcoBloom Sustainable Living, H2: Our Products / Why Choose Us
- **Images:** Renamed to `bamboo-toothbrush-ecobloom-480w.jpg` etc. Alt: `Bamboo toothbrush - EcoBloom eco-friendly product`
- **Internal Links:** Nav + footer + "Shop Now" buttons link products -> enquiry

### 3.2 Off-Page SEO
- Backlinks: Eco-friendly blogs, Faithful to Nature directory, Facebook Eco groups, Instagram @ecobloom_sa
- Social: Open Graph tags + links to Instagram/Facebook in footer
- Local SEO: Keywords "South Africa", "Gauteng" + address in contact.html

### 3.3 Technical SEO
- robots.txt and sitemap.xml in root
- Speed: Images srcset + compressed <200KB, CSS minified, lazy loading loading="lazy"
- Security: Netlify HTTPS + form validation

### 4.1 Forms
- **enquiry.html:** Fields: name, email, phone, product select, quantity radio, terms checkbox. After validation: `Thank you [name]! Bamboo Toothbrush x2 - R90. In stock, delivery in 2-3 days to [email]`
- **contact.html:** Fields: name, email, messageType select, message textarea, phone. Validation + inline errors + AJAX + mailto compilation to info@ecobloom.co.za

## 4. References
- Leafletjs.com (2026) Leaflet Maps
- AOS (2026) Animate On Scroll Library
- MDN Web Docs (2026) srcset and sizes attribute
- Google Fonts - Poppins, Open Sans

## 5. How to Run
Open index.html or visit live Netlify link.