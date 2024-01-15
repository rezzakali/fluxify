import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/utils/**/*.{js,jsx}',
    './src/ui/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    screens: {
      sm: '350px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {},
  },
  plugins: [],
});
