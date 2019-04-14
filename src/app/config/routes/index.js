import app from '../app';
import SEO from '../SEO';

const getTitle = (page) => {
  const title = `${page} | ${app.name}`;

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
