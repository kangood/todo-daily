import {
  createContext,
  useEffect,
  useState,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

import type { ReactNode } from "react";

// 定义需要共享的几个变量的类型
type TC = {
  theme: string;
  changeTheme: Dispatch<SetStateAction<string>>;
  accent: string;
  setAccent: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<TC | null>(null);

// 获取localStorage中存储的主题，然后默认主题颜色是蓝色
const getInitialAccent = () => {
  // [typeof window]可以判断出当前是客户端/服务端渲染；undefined代表服务端执行，则直接返回，避免localStorage报错
  if (typeof window === "undefined") return "blue";
  return localStorage.getItem("accent") ?? "blue";
};

// 获取localStorage中存储的主题，然后默认主题黑白是白色
const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const savedTheme = localStorage.getItem("theme");
  // 获取浏览器主题色，[window.matchMedia...dark...]查询当前是否为dark模式
  const perfersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return savedTheme ?? (perfersDark ? "dark" : "light");
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  // 可以通过changeTheme方法去改变theme的值，使用useState会让页面重新渲染
  const [theme, changeTheme] = useState<string>(getInitialTheme());
  const [accent, setAccent] = useState<string>(getInitialAccent());

  // 使用useEffect在第一次加载时执行，执行顺序在return的那些DOM之后
  useEffect(() => {
    const root = document.documentElement;
    // 使用JS代码修改颜色的样式
    root.style.setProperty("--main-accent", `rgb(var(--accent-${accent}))`);
    // 在localStorage中存储选中的主题颜色
    localStorage.setItem("accent", accent);
    // 如果主题是暗黑模式，就在根节点添加[class="dark"]，否则就删除
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // 第二参数[]内的变量变化时也会执行useEffect内容
  }, [theme, accent]);

  // 共享这几个变量
  const value: TC = { theme, changeTheme, accent, setAccent };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  // 这里做一个判断，如果获取是空值，就抛出异常，消除null值返回的可能性，这样后面获取的时候就不会报错了
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("userTheme must be used within a ThemeProvider");
  }
  return context;
};
