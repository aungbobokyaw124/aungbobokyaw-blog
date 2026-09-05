"use client";

import Marquee from "react-fast-marquee";
import { Megaphone } from "lucide-react";

export default function MarqueeBanner() {
  return (
    <div className="bg-blue-600 text-white py-2 px-4 flex items-center gap-3 text-sm font-medium">
      <div className="flex items-center gap-1 bg-blue-800 px-2 py-0.5 rounded text-xs shrink-0 font-bold">
        <Megaphone className="w-3.5 h-3.5" /> သတင်းထူး
      </div>
      <Marquee speed={50} gradient={false} pauseOnHover>
        <span className="mx-6">📢 aungbobokyaw.com မှ ကြိုဆိုပါတယ်။ နည်းပညာနှင့် လူမှုအကျိုးပြု ဆောင်းပါးများကို လေ့လာဖတ်ရှုနိုင်ပါပြီ။</span>
        <span className="mx-6">💡 နည်းပညာဆိုင်ရာ မေးခွန်းများရှိပါက တိုက်ရိုက် ဆက်သွယ်နိုင်ပါသည်။</span>
      </Marquee>
    </div>
  );
}
