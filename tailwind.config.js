export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6c63ff", // 💜 New default accent
        dark: "#0a192f",
        light: "#ccd6f6",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        sm: '0 2px 4px 0 #0a192f, inset 0 1px 1px rgba(255, 255, 255, 0.1)', // Light theme: dark, 3D
        DEFAULT: '0 3px 6px 0 #0a192f, 0 2px 4px -1px #0a192f, inset 0 1px 1px rgba(255, 255, 255, 0.1)', // Light theme: dark, 3D
        md: '0 6px 12px -2px #0a192f, 0 3px 7px -3px #0a192f, inset 0 1px 2px rgba(255, 255, 255, 0.15)', // Light theme: dark, 3D
        lg: '0 12px 20px -4px #0a192f, 0 6px 10px -4px #0a192f, inset 0 1px 3px rgba(255, 255, 255, 0.15)', // Light theme: dark, 3D
        xl: '0 20px 30px -6px #0a192f, 0 10px 15px -5px #0a192f, inset 0 2px 4px rgba(255, 255, 255, 0.2)', // Light theme: dark, 3D
        '2xl': '0 30px 50px -12px #0a192f, inset 0 2px 5px rgba(255, 255, 255, 0.2)', // Light theme: dark, 3D
        'dark-sm': '0 4px 8px 0 #ccd6f6, inset 0 1px 2px rgba(0, 0, 0, 0.3)', // Dark theme: light, 3D, more visible
        'dark': '0 6px 12px 0 #ccd6f6, 0 4px 8px -1px #ccd6f6, inset 0 1px 3px rgba(0, 0, 0, 0.3)', // Dark theme: light, 3D, more visible
        'dark-md': '0 10px 20px -2px #ccd6f6, 0 6px 14px -3px #ccd6f6, inset 0 2px 4px rgba(0, 0, 0, 0.35)', // Dark theme: light, 3D, more visible
        'dark-lg': '0 18px 30px -4px #ccd6f6, 0 10px 18px -4px #ccd6f6, inset 0 2px 5px rgba(0, 0, 0, 0.35)', // Dark theme: light, 3D, more visible
        'dark-xl': '0 28px 40px -6px #ccd6f6, 0 14px 22px -5px #ccd6f6, inset 0 3px 6px rgba(0, 0, 0, 0.4)', // Dark theme: light, 3D, more visible
        'dark-2xl': '0 40px 70px -12px #ccd6f6, inset 0 4px 8px rgba(0, 0, 0, 0.4)', // Dark theme: light, 3D, more visible
      },
    },
  },
  plugins: [],
}