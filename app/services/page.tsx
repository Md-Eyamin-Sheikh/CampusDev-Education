import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "সার্ভিসসমূহ | Services | EduWeb",
    description: "EduWeb services for schools, colleges, madrasas, and other institutions.",
  };
}

const fallbackServices = [
  { id: "school", nameBn: "স্কুল", nameEn: "School", icon: "🏫", desc: "আধুনিক স্কুল ম্যানেজমেন্ট এবং ওয়েবসাইট।" },
  { id: "college", nameBn: "কলেজ", nameEn: "College", icon: "🏛️", desc: "কলেজের জন্য সম্পূর্ণ ডিজিটাল সমাধান।" },
  { id: "madrasa", nameBn: "মাদ্রাসা", nameEn: "Madrasa", icon: "🕌", desc: "মাদ্রাসার জন্য বিশেষায়িত ডিজিটাল ম্যানেজমেন্ট।" },
  { id: "coaching", nameBn: "কোচিং সেন্টার", nameEn: "Coaching Center", icon: "📚", desc: "কোচিং সেন্টারের ভর্তি ও রেজাল্ট সিস্টেম।" },
  { id: "kindergarten", nameBn: "কিন্ডারগার্টেন", nameEn: "Kindergarten", icon: "🎈", desc: "ছোটদের স্কুলের জন্য আকর্ষণীয় ওয়েবসাইট।" },
  { id: "technical", nameBn: "কারিগরি প্রতিষ্ঠান", nameEn: "Technical Institute", icon: "⚙️", desc: "কারিগরি ও ভোকেশনাল ইনস্টিটিউটের পোর্টাল।" },
];

export default async function ServicesPage() {
  let services: any[] = fallbackServices;
  
  try {
    const { getServices } = await import("../../lib/repos/services.repo");
    const data = await getServices();
    if (data && data.length > 0) {
      services = data;
    }
  } catch (error) {
    // using fallback
  }

  return (
    <div className="min-h-screen bg-paper pb-20">
      <div className="zone-ink bg-pine-900 text-white pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">আমাদের সার্ভিসসমূহ</h1>
          <p className="text-mint-300 text-lg max-w-2xl mx-auto">
            আপনার শিক্ষাপ্রতিষ্ঠানের ধরন অনুযায়ী আমাদের ডিজিটাল সেবা বেছে নিন
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl p-6 shadow-1 border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold text-pine-900 mb-1">{service.nameBn}</h2>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">{service.nameEn}</h3>
              <p className="text-gray-600 text-sm flex-grow mb-6">{service.desc}</p>
              <Link
                href={`/services/${service.id}`}
                className="inline-block text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
              >
                বিস্তারিত দেখুন &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
