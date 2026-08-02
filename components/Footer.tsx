import Link from "next/link";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Col 1: About */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Aung Bo Bo Kyaw</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            နည်းပညာဆိုင်ရာ ဗဟုသုတများ၊ နည်းပညာဖြင့် လူမှုအသိုက်အဝန်းကို အကျိုးပြုနိုင်မည့် ဆောင်းပါးများကို မျှဝေပေးနေသော ဘလော့ဂ်ဖြစ်ပါသည်။
          </p>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400">ပင်မစာမျက်နှာ</Link></li>
            <li><Link href="/tech" className="hover:text-blue-400">နည်းပညာ ဆောင်းပါးများ</Link></li>
            <li><Link href="/society" className="hover:text-blue-400">လူမှုအကျိုးပြု</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">ကျွန်ုပ်အကြောင်း</Link></li>
          </ul>
        </div>

        {/* Col 3: Policies */}
        <div>
          <h4 className="text-white font-semibold mb-3">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400">Terms of Service</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">ဆက်သွယ်ရန်</Link></li>
          </ul>
        </div>

        {/* Col 4: Socials */}
        <div>
          <h4 className="text-white font-semibold mb-3">Follow Me</h4>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" className="hover:text-blue-400"><Github className="w-5 h-5" /></a>
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-400"><Facebook className="w-5 h-5" /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:info@aungbobokyaw.com" className="hover:text-blue-400"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500 max-w-6xl mx-auto px-4">
        © {new Date().getFullYear()} aungbobokyaw.com. All rights reserved. Designed for Tech & Society Impact.
      </div>
    </footer>
  );
}
