const appURL = 'https://github.com/AuxStudio/nextjs-simple-boilerplate';
const title = 'nextjs-simple-boilerplate';
const description = 'A Next.js, Firebase and Redux boilerplate that we use internally';

const SEO = {
  title, // default
  description, // default
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: appURL,
    title,
    description,
    image: `${appURL}/static/images/open-graph.png`,
    imageWidth: 1200,
    imageHeight: 630,
    site_name: 'nextjs-simple-boilerplate',
  },
  twitter: {
    handle: '',
    cardType: 'summary_large_image',
  },
  richText: {
    openingHours: 'Mo,Tu,We,Th,Fr 07:00-14:00',
    streetAddress: '',
    addressLocality: '',
    postalCode: '0000',
    addressCountry: '',
    priceRange: '$$$',
  },
};

export default SEO;
