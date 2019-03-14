import ReactGA from 'react-ga';

export default function logEvent({ category, action, value, label, nonInteraction }) {
  ReactGA.event({ category, action, value, label, nonInteraction });
}
