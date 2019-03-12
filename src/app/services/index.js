import auth from './auth';
import firestore from './firestore';
import storage from './storage';

const services = {
  auth,
  firestore,
  storage,
};

export { auth, firestore, storage };

export default services;
