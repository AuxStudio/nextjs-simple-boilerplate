import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { app, SEO } from '../config';

/* eslint-disable no-tabs  */
/* eslint-disable react/no-danger */
const schema = `{
	"@context": "http://schema.org",
	"@type": "Localapp",
	"name": "${SEO.title}",
  "description": "${SEO.description}",
  "openingHours": "${SEO.richText.openingHours}",
	"image": "${SEO.openGraph.image}",
	"logo": "${SEO.openGraph.image}",
	"url": "${SEO.openGraph.url}",
	"telephone": "${app.contactDetails.tel}",
  "email": "${app.contactDetails.email}",
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

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
        </body>
      </html>
    );
  }
}
