import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { business, SEO } from '../config';

/* eslint-disable no-tabs  */
/* eslint-disable react/no-danger */
const schema = `{
	"@context": "http://schema.org",
	"@type": "LocalBusiness",
	"name": "${SEO.title}",
  "description": "${SEO.description}",
  "openingHours": "${SEO.richText.openingHours}",
	"image": "${SEO.openGraph.image}",
	"logo": "${SEO.openGraph.image}",
	"url": "${SEO.openGraph.url}",
	"telephone": "${business.contactDetails.tel}",
  "email": "${business.contactDetails.email}",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "${SEO.richText.streetAddress}",
		"addressLocality": "${SEO.richText.addressLocality}",
		"postalCode": "${SEO.richText.postalCode}",
		"addressCountry": "${SEO.richText.addressCountry}"
  },
  "priceRange": "${SEO.richText.priceRange}"
}`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head />

        <body>
          <Main />

          <NextScript />
        </body>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      </html>
    );
  }
}
