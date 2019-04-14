import events from './events';

const analytics = {
  trackingID: process.env.REACT_APP_GA_TRACKING_ID,
  events,
};

export default analytics;
