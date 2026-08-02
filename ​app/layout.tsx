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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="my">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col justify-between">
        <Preloader />
        <div>
          <MarqueeBanner />
          {/* Header/Navbar ဒီနေရာမှာ ထည့်နိုင်ပါတယ် */}
          <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        </div>
        <ViberButton />
        <Footer />
      </body>
    </html>
  );
}

