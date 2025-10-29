/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        body: "#0d0e0f", // ✅ added custom body background color
      },

      spacing: {
        'nudge-left': '12px',   // move right by 12px
        'nudge-right': '16px', 
      },

      fontFamily: {
        suisse: ['SuisseIntl', 'sans-serif'],
      },

      keyframes: {
        "scroll-up": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0%)" },
        },

        // 🎨 Smooth ambient gradient animation
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },

      animation: {
        "scroll-up": "scroll-up 20s linear infinite",
        "scroll-down": "scroll-down 20s linear infinite",

        // 🌌 Slower, cinematic gradient motion
        gradientMove: "gradientMove 20s ease-in-out infinite",
      },
    },
  },

  safelist: [
    "bg-[#0d0e0f]",
    "bg-transparent",
    "animate-scroll-up",
    "animate-scroll-down",
  ],

  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};























// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   safelist: [
//      "bg-[#0d0e0f]",
//     "bg-transparent"
//   ],

//   darkMode: "class",

//   theme: {
//     extend: {
//       fontFamily: {
//         suisse: ['SuisseIntl', 'sans-serif'],
//       },

//       keyframes: {
//         "scroll-up": {
//           "0%": { transform: "translateY(0%)" },
//           "100%": { transform: "translateY(-50%)" },
//         },
//          gradientMove: {
//           '0%, 100%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//         },
//         "scroll-down": {
//           "0%": { transform: "translateY(-50%)" },
//           "100%": { transform: "translateY(0%)" },
//         },
//       },

//       animation: {
//         "scroll-up": "scroll-up 20s linear infinite",
//         "scroll-down": "scroll-down 20s linear infinite",
//         gradientMove: 'gradientMove 8s ease-in-out infinite',
//       },
//     },
//   },

//   // optional safety net in case your build still strips dynamic classes
//   safelist: [
//     'animate-scroll-up',
//     'animate-scroll-down',
//   ],

//   plugins: [
//     require('tailwind-scrollbar-hide'),
//   ],
// };
