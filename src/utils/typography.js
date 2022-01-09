import Typography from 'typography';
import wordpress2016Theme from 'typography-theme-wordpress-2016';

// const wordpress2016Theme = require('typography-theme-wordpress-2016');

wordpress2016Theme.baseFontSize = '18px';

const typography = new Typography(wordpress2016Theme);

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { scale, rhythm } = typography;
