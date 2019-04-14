import { createMuiTheme } from '@material-ui/core/styles';

import { colors } from '../styleConstants';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.accent2,
    },
  },
});

export default theme;
