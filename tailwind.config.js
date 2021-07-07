const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: true, // disable purge in dev
  },
};
