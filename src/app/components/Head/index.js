import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { convertObjectToArray } from 'js-simple-utils';

import { routes, SEO } from '../../config';
import { colors } from '../../static/styles/styleConstants';

const primaryColor = colors.primary;
const defaultTitle = SEO.title;
const defaultDescription = SEO.description;

const HeadComponent = ({ title, description, router }) => {
  const { pathname } = router;
  const routesArray = convertObjectToArray(routes);
  const route = routesArray.filter((item) => item.href === pathname)[0];
  const titleToUse = title || (route && route.title) || defaultTitle;
  const descriptionToUse = description || (route && route.description) || defaultDescription;

  return (
    <Head>
      {/* Title and description */}
      <title key="title">{titleToUse}</title>

      <meta key="description" name="Description" content={descriptionToUse} />

      <meta key="keywords" name="keywords" content={SEO.keywords} />

      {/* Responsiveness */}
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0"
      />

      {/* Favicons */}
      <link
        key="apple-touch-icon"
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/icons/apple-touch-icon.png"
      />
      <link
        key="favicon-lg"
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/icons/favicon-32x32.png"
      />
      <link
        key="favicon-sm"
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/icons/favicon-16x16.png"
      />
      <link
        key="safari-icon"
        rel="mask-icon"
        href="/static/icons/safari-pinned-tab.svg"
        color={primaryColor}
      />

      {/* Theme */}
      <meta key="ms-tile-color" name="msapplication-TileColor" content={primaryColor} />
      <meta key="theme-color" name="theme-color" content={primaryColor} />

      {/* Manifest file */}
      <link
        key="manifest"
        type="application/manifest+json"
        rel="manifest"
        href="/static/manifest.json"
      />

      {/* Open graph */}
      <meta key="og:url" property="og:url" content={SEO.openGraph.url} />
      <meta key="og:type" property="og:type" content={SEO.openGraph.type} />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:image" property="og:image" content={SEO.openGraph.image} />
      <meta key="og:image:width" property="og:image:width" content={SEO.openGraph.imageWidth} />
      <meta key="og:image:height" property="og:image:height" content={SEO.openGraph.imageHeight} />
      <meta key="og:locale" property="og:locale" content={SEO.openGraph.locale} />
      <meta key="twitter:card" name="twitter:card" content={SEO.twitter.cardType} />
      <meta key="twitter:site" name="twitter:site" content={SEO.twitter.handle} />

      {/* Normalize css */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      />

      <noscript>Your browser does not support JavaScript!</noscript>
    </Head>
  );
};

HeadComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
HeadComponent.defaultProps = {};

export default withRouter(HeadComponent);
