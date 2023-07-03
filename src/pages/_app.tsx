import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ThemeContextProvider } from "~/contexts/useTheme";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      {/* 调用全局主题共享Provider，这样子孙元素组件就都可以获取到了 */}
      <ThemeContextProvider>
        {/* h-screen是撑满浏览器高度；w-full是撑满父元素宽度；[dark:bg-black]可以让dark模式背景变黑色 */}
        <div className="dark:bg-black">
          <Component {...pageProps} />
        </div>
      </ThemeContextProvider>
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
