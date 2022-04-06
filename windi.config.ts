import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';

export default defineConfig({
  theme: {
    colors: {
      cyan: {
        300: 'hsl(172, 67%, 75%)',
        500: 'hsl(172, 67%, 45%)',
        700: 'hsl(183, 100%, 15%)',
      },
      powder: {
        50: 'hsl(189, 41%, 97%)',
        200: 'hsl(185, 41%, 84%)',
        300: 'hsl(184, 14%, 56%)',
        400: 'hsl(186, 14%, 43%)',
      },
      red: colors.red,
      transparent: 'transparent',
      white: '#FFFFFF',
    },
    fontFamily: {
      space: ['Space Mono', 'monospace'],
    },
  },
});
