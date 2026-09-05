import Link from "next/link";
import { ArrowRight, Cpu, Globe2, Lightbulb, Smartphone, Sparkles } from "lucide-react";

const topics = [
  { icon: Cpu, title: "နည်းပညာ", text: "ခေတ်သစ်နည်းပညာ၊ AI နှင့် Digital Tools များ" },
  { icon: Smartphone, title: "Mobile & Web", text: "Website နှင့် Mobile App တည်ဆောက်ခြင်း" },
  { icon: Lightbulb, title: "အသုံးချနည်း", text: "နေ့စဉ်ဘဝအတွက် အသုံးဝင်သော နည်းလမ်းများ" },
];

export default function HomePage() {
  return (
    <div>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white shadow-lg">ABK</span>
            <div>
              <div className="font-extrabold tracking-tight text-slate-950">Aung Bo Bo Kyaw</div>
              <div className="text-xs text-slate-500">Tech & Society</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 sm:flex">
            <a href="#topics" className="hover:text-blue-600">Topics</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <Link href="/admin" className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-600">Admin</Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,.25),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,.2),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <Sparkles className="h-4 w-4 text-blue-400" /> Intelligent ideas for real life
            </div>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
              နည်းပညာကို <span className="text-blue-400">လက်တွေ့အသုံးချ</span>ပြီး ဘဝကို ပိုကောင်းအောင်တည်ဆောက်မယ်။
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              နည်းပညာ၊ AI၊ Website၊ Mobile နှင့် လူမှုဘဝအတွက် အသုံးဝင်တဲ့ အတွေးအခေါ်များကို ရိုးရှင်းပြီး လက်တွေ့ကျကျ မျှဝေတဲ့ Personal Blog ဖြစ်ပါတယ်။
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#topics" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500">စတင်လေ့လာမယ် <ArrowRight className="h-4 w-4" /></a>
              <a href="#about" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-bold text-white hover:bg-white/10">အကြောင်းအရာ</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur">
              <div className="mb-6 flex items-center justify-between"><span className="text-sm font-bold text-slate-300">INTELLIGENT HUB</span><Globe2 className="h-5 w-5 text-blue-400" /></div>
              <div className="space-y-3">
                {topics.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400"><Icon className="h-5 w-5" /></span>
                    <div><div className="font-bold">{title}</div><div className="mt-1 text-sm leading-6 text-slate-400">{text}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="topics" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl"><p className="font-bold text-blue-600">EXPLORE</p><h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">လေ့လာနိုင်တဲ့ အကြောင်းအရာများ</h2><p className="mt-4 leading-7 text-slate-600">အသုံးဝင်တဲ့ နည်းပညာဆိုင်ရာ အကြောင်းအရာတွေကို တစ်နေရာတည်းမှာ ရှာဖွေဖတ်ရှုနိုင်ပါတယ်။</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {topics.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Icon className="h-6 w-6" /></div>
              <h3 className="mt-6 text-xl font-extrabold text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600">ဖတ်ရှုမယ် <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6"><div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-12"><p className="font-bold text-blue-600">ABOUT</p><h2 className="mt-2 text-3xl font-black text-slate-950">ဉာဏ်ရည်၊ နည်းပညာနဲ့ လူမှုအကျိုးပြုမှု</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">ဒီနေရာမှာ နည်းပညာကို ရှုပ်ထွေးအောင်မဟုတ်ဘဲ လူတိုင်း လက်တွေ့အသုံးချနိုင်အောင် ရှင်းလင်းစွာ မျှဝေသွားပါမယ်။</p></div></div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6"><h2 className="text-3xl font-black text-slate-950">ဆက်သွယ်လိုပါသလား?</h2><p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">နည်းပညာဆိုင်ရာ မေးခွန်းများ၊ အကြံပြုချက်များနဲ့ ပူးပေါင်းဆောင်ရွက်လိုမှုများအတွက် ဆက်သွယ်နိုင်ပါတယ်။</p><a href="mailto:info@aungbobokyaw.com" className="mt-7 inline-flex rounded-xl bg-slate-950 px-6 py-3 font-bold text-white hover:bg-blue-600">Email ဆက်သွယ်ရန်</a></section>
    </div>
  );
}
