module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
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