import "@/styles/globals.css";
import { ThemeProvider } from "@/context/theme";
import {Suspense, useEffect} from "react";
import TapNav from "@/components/TapNav";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/auth";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {darkTheme, lightTheme} from "@/components/theme/dark";

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  const showHeader =
    !pathname.startsWith("/wsq") && !pathname.startsWith("/auth");

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    document.documentElement.classList.add(theme);
  }, []);

  return (
    <ThemeProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <AuthProvider>
            <Toaster />
            {showHeader && <TapNav />}
            <Component {...pageProps} />
          </AuthProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </ThemeProvider>
  );
}
