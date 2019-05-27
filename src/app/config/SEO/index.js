import app from '../app';

const { name, url } = app;
const description = 'A Next.js, Firebase and Redux boilerplate that we use internally'; // TODO: Replace this

const SEO = {
  title: name,
  description,
  keywords: 'nextjs boilerplate javascript react', // TODO: Replace this
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url,
    title: name,
    description,
    image: `${url}/static/images/open-graph.png`,
    imageWidth: 1200,
    imageHeight: 630,
    site_name: 'nextjs-simple-boilerplate', // TODO: Replace this
  },
  twitter: {
    handle: '',
    cardType: 'summary_large_image',
  },
  // TODO: Update these details
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
