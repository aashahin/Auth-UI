import "@/styles/globals.css";
import 'flowbite';
import { ThemeProvider } from "@/context/theme";
import { useEffect } from "react";
import TapNav from "@/components/TapNav";
import { usePathname} from 'next/navigation';
import {Toaster} from "react-hot-toast";
import {AuthProvider} from "@/context/auth";

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  const showHeader = !pathname.startsWith("/wsq") && !pathname.startsWith("/auth");

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    document.documentElement.classList.add(theme);
    document.body.style.backgroundColor = theme === "dark" ? "#1D1F21" : "#fff";
    document.body.style.color = theme === "dark" ? "#fff" : "#000";
  }, []);
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="bg-white dark:bg-gray-900">
          <Toaster />
          {showHeader && <TapNav />}
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}
