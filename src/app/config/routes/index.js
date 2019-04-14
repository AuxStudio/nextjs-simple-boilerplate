import SEO from '../SEO';

const getTitle = (page) => {
  const title = `${page} | APP NAME`; // TODO:

  return title;
};

const routes = {
  home: {
    title: getTitle('Home'),
    description: SEO.description,
    href: '/',
  },
};

export default routes;
