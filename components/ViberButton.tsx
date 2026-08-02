import { PhoneCall } from "lucide-react";

export default function ViberButton() {
  // Viber URI Format (ဖုန်းနံပါတ် နေရာတွင် မိမိ ဖုန်းနံပါတ် ပြောင်းပါ)
  const viberNumber = "+959123456789"; 

  return (
    <a
      href={`viber://chat?number=${encodeURIComponent(viberNumber)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-purple-600 hover:bg-purple-700 text-white p-3.5 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      title="Viber မှ ဆက်သွယ်ရန်"
    >
      <PhoneCall className="w-6 h-6" />
    </a>
  );
}
