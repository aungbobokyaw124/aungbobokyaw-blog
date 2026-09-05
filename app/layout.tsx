import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/Preloader";
import MarqueeBanner from "@/components/MarqueeBanner";
import ViberButton from "@/components/ViberButton";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aung Bo Bo Kyaw — Tech & Society Blog",
  description: "နည်းပညာနှင့် လူမှုအကျိုးပြု ဆောင်းပါးများ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="my">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        <Preloader />
        <MarqueeBanner />
        <main className="flex-1">{children}</main>
        <ViberButton />
        <Footer />
      </body>
    </html>
  );
}
