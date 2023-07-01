import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 自定义颜色，在className写入text-accent-red使用
      colors: {
        "primary": "#FF4F5A",
        "accent-red": "#FF4F5A",
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },
  plugins: [],
} satisfies Config;
