import app from '../app';

const { url } = app;
const title = 'nextjs-simple-boilerplate'; // TODO: Replace this
const description = 'A Next.js, Firebase and Redux boilerplate that we use internally'; // TODO: Replace this

const SEO = {
  title, // default
  description, // default
  keywords: 'nextjs boilerplate javascript react', // TODO: Replace this
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url,
    title,
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
