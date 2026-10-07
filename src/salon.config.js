// ─────────────────────────────────────────────────────────────────────────────
//  SALON SETTINGS
//  Everything specific to one salon lives in this file. Edit the values below,
//  replace the photos in public/img/, and the whole site updates.
//
//  After changing `name`, `logoLetter`, `seo` or `theme`, restart `npm run dev`
//  so the browser-tab title and icon pick up the change.
// ─────────────────────────────────────────────────────────────────────────────

const salon = {
  // Shown in the header, footer, browser tab and the text message.
  name: 'Salt + Stone Hair Salon',

  // Short name used beside the logo in the header and footer.
  shortName: 'Salt + Stone',

  // Letters inside the round browser-tab icon.
  logoLetter: 'S+S',

  // Logo files in public/img/: `light` sits on dark backgrounds, `dark` on light ones.
  logo: {
    light: '/img/logo-light.png',
    dark: '/img/logo-dark.png',
    alt: 'Salt + Stone Hair Salon logo',
  },

  // Big headline at the top. `accent` is shown in italics.
  heroTitle: { lead: 'Cut, color &', accent: 'confidence.' },

  // Small gold line above the headline.
  eyebrow: 'Boutique hair salon · Canyon Lake, CA',

  // One-sentence description under the headline.
  tagline:
    'Personalized, one-on-one service in a relaxing boutique atmosphere. No long waits — just beautiful hair and a great experience.',

  // Round badge on the hero photo. Set to '' to hide it.
  heroBadge: 'Now accepting new clients',

  // Short quote beside the hero photos (desktop only). Use a real review line.
  heroQuote: '“I get compliments on my hair everywhere I go.” — Dacia M.',

  phone: {
    display: '(951) 956-4206',
    // Same number in international format: + country code, then digits only.
    e164: '+19519564206',
  },

  address: {
    street: '31562 Railroad Canyon Rd',
    cityLine: 'Canyon Lake, CA 92587',
    // Shorter version used in the hero facts row.
    short: '31562 Railroad Canyon Rd',
  },

  // Social profiles shown in the footer, visit details and reviews.
  social: {
    instagram: { handle: '@saltstone.hairsalon', url: 'https://www.instagram.com/saltstone.hairsalon/' },
    yelp: { url: 'https://www.yelp.com/biz/salt-stone-hair-salon-canyon-lake' },
  },

  // Exactly 7 days, Monday first. Mark closed days with `closed: true`
  // (the booking form warns customers who pick one).
  hours: [
    { day: 'Monday', time: '11am – 6pm' },
    { day: 'Tuesday', time: '9am – 6pm' },
    { day: 'Wednesday', time: 'Closed', closed: true },
    { day: 'Thursday', time: '9am – 6pm' },
    { day: 'Friday', time: '9am – 7pm' },
    { day: 'Saturday', time: '8am – 3pm' },
    { day: 'Sunday', time: 'Closed', closed: true },
  ],

  // One-line summaries used in the hero, footer and mobile "Visit" section.
  hoursSummary: {
    open: 'Mon, Tue & Thu–Sat',
    closed: 'Wed & Sun',
  },

  // Browser tab title and Google description.
  seo: {
    title: 'Salt + Stone Hair Salon · Hair Salon in Canyon Lake, CA',
    description:
      'Salt + Stone Hair Salon — a women-owned boutique salon in Canyon Lake, CA offering personalized haircuts, color, balayage, highlights, keratin treatments and extensions.',
  },

  // Brand colors. `primary` is the dark background; `accent` is buttons and highlights.
  theme: {
    primary: '#1d3540', // deep teal, from the salon's feature wall
    accent: '#c9a477',
    accentHover: '#d8b98f',
    accentDeep: '#8a6740', // darker accent for small labels on light backgrounds
  },

  // Photos live in public/img/. Swap the files, or change the paths here.
  images: {
    heroArch: { src: '/img/interior-stations.webp', alt: 'Styling stations at Salt + Stone Hair Salon' },
    heroSide: { src: '/img/work-bronde.jpg', alt: 'Soft bronde balayage waves' },
  },

  // "Why Salt + Stone" section, from the salon's poster and business highlights.
  about: {
    title: { lead: 'Your time', accent: 'matters.' },
    script: "We'd love to have you in our chair!",
    text: 'At Salt + Stone, owner Sarah and stylist Jae offer personalized, one-on-one service — every appointment is just you and your stylist, from consultation to final style.',
    // `icon` is one of: home, sparkle, heart, calendar, badge, chat
    highlights: [
      { icon: 'home', label: 'Locally owned & operated' },
      { icon: 'heart', label: 'Women-owned & operated' },
      { icon: 'badge', label: 'Certified professionals' },
      { icon: 'sparkle', label: 'Customized solutions' },
      { icon: 'chat', label: 'Free consultations' },
      { icon: 'calendar', label: 'Available by appointment' },
    ],
  },

  gallery: {
    items: [
      { src: '/img/work-balayage.jpg', label: 'Dimensional balayage' },
      { src: '/img/work-copper.jpg', label: 'Rich copper brunette' },
      { src: '/img/work-pink.jpg', label: 'Blonde with pink peekaboos' },
    ],
  },

  // Interior photos ("The salon" section).
  space: {
    title: { lead: 'A relaxing', accent: 'boutique salon' },
    text: 'A calm, private space with no crowds and no rush. Settle in with a drink and enjoy a little time for yourself.',
    amenities: ['Good for kids', 'Complimentary beverages', 'Restroom on site'],
    photos: [
      { src: '/img/interior-shampoo.webp', alt: 'Shampoo station and styling chair under a brass chandelier' },
      { src: '/img/interior-stations.webp', alt: 'Rustic wood mirror stations with Edison lights' },
    ],
  },

  services: {
    note: "Not sure what to book? Consultations are free — text us a photo of what you have in mind and we'll point you to the right service.",
    groups: [
      {
        name: 'Cut & style',
        items: ['Haircut', "Kids' cuts", 'Bang trim', 'Beard trim', 'Curly hair', 'Hairstyling', 'Blowouts', 'Blowdry'],
      },
      {
        name: 'Color',
        items: ['Hair coloring', 'Highlights', 'Balayage', 'Ombre hair color', 'Gloss & glaze'],
      },
      {
        name: 'Smooth & texture',
        items: ['Keratin treatments', 'Brazilian straightening', 'Hair straightening', 'Hydration treatments', 'Perms'],
      },
      {
        name: 'Extras',
        items: ['Hair extensions', 'Body waxing'],
      },
    ],
  },

  reviews: {
    note: 'From recent Yelp reviews',
    // Paste real reviews (with permission). 3–6 works best.
    items: [
      { name: 'Desirey K.', when: 'Jul 2026', text: "I got my hair done by Jaelyn, and I'm so impressed with her skills! From the moment I walked in, she made me feel comfortable and genuinely welcomed. Before she started cutting my hair, she took the time to confirm exactly how much length I wanted to take off and even showed me how it would look in the mirror before making the first cut. I absolutely love how my butterfly cut turned out — it brought my hair back to life!" },
      { name: 'Dacia M.', when: 'Apr 2026', text: 'I have been going to Sarah for 5+ years and absolutely love her! I get compliments on my hair everywhere I go. Love the atmosphere and vibes.' },
      { name: 'Jessica', when: 'Apr 2026', text: 'Jae did such an amazing job on my hair and gave me exactly what I asked for! The salon was so cute and both Jae and Sarah were the kindest people and extremely helpful!' },
      { name: 'Caitlin H.', when: 'Mar 2026', text: 'Sarah is the best! She has been cutting my boys hair for a couple years now, she has the best personality and treats them as one of her own, we all love seeing her at our monthly visits :)' },
      { name: 'Marissa G.', when: 'Dec 2025', text: 'Sarah took care of my gray and roots and evened out my hair. For the first time in years, I finally had salon looking hair. She gave me advice and education on hair and hair products and going forward offered me the best solutions to combat my gray hair.' },
      { name: 'Jeannette F.', when: 'Aug 2025', text: "I can't say enough good things about Jae! She's absolutely fabulous with coloring and her attention to detail is second to none. Jae makes the entire appointment feel fun and relaxed, and I always leave feeling confident and refreshed. If you want someone who truly listens, gives great advice, and has the skills to back it up, Jae is the one to see." },
    ],
  },

  booking: {
    notesPlaceholder: 'e.g. Booking with Jae, want low-maintenance highlights, not too blonde',
    // Shown under the booking form. Set to '' to hide it.
    policy:
      'We value your time and ours. Following a no-show, a non-refundable deposit is required to book future appointments; it is applied to your service total.',
  },
};

export default salon;

// ── Derived values (no need to edit) ─────────────────────────────────────────
export const mapsUrl =
  'https://maps.google.com/?q=' +
  encodeURIComponent(`${salon.address.street} ${salon.address.cityLine}`).replace(/%20/g, '+');

export const serviceOptions = ['Not sure yet', 'Free consultation', ...salon.services.groups.flatMap((g) => g.items)];

export const timesOfDay = ['Morning', 'Midday', 'Afternoon'];
