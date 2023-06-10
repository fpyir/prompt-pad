/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'btn-primary-bg': 'var(--btn-primary-bg)',
        'btn-secondary-bg': 'var(--btn-secondary-bg)',
        'btn-secondary-border': 'var(--btn-secondary-border)',
        'btn-primary-text': 'var(--btn-primary-text)',
        'btn-secondary-text': 'var(--btn-secondary-text)',
        'btn-primary-bg-hover': 'var(--btn-primary-bg-hover)',
        'btn-secondary-bg-hover': 'var(--btn-secondary-bg-hover)',
        'btn-primary-outline': 'var(--btn-primary-outline)',
        'btn-secondary-outline': 'var(--btn-secondary-outline)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
