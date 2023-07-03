import { type Config } from "tailwindcss";

export default {
  // 开启tailwind的暗黑模式，即可使用class="dark"变黑
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 自定义颜色，在className写入text-[]使用
      colors: {
        "primary": 'var(--main-accent)',
        "accent-red": 'rgb(var(--accent-red))',
        'accent-yellow': 'rgb(var(--accent-yellow))',
        'accent-blue': 'rgb(var(--accent-blue))',
        'accent-pink': 'rgb(var(--accent-pink))',
        'accent-purple': 'rgb(var(--accent-purple))',
        'accent-orange': 'rgb(var(--accent-orange))',
        'accent-green': 'rgb(var(--accent-green))',
      }
    },
    // 重写不同尺寸的屏幕大小
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // }
  },
  plugins: [],
} satisfies Config;
