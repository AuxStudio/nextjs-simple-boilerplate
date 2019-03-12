import firebase from './firebase';
import routes from './routes';
import SEO from './SEO';
import styleConstants from './styleConstants';
import version from './version';

const config = {
  firebase,
  routes,
  SEO,
  styleConstants,
  version,
};

export { firebase, routes, SEO, styleConstants, version };

export default config;
