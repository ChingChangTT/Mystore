module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
      },

      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}