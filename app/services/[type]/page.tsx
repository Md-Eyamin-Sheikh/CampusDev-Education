import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

const serviceMap: Record<string, { bn: string; en: string }> = {
  school: { bn: "স্কুল", en: "School" },
  college: { bn: "কলেজ", en: "College" },
  madrasa: { bn: "মাদ্রাসা", en: "Madrasa" },
  coaching: { bn: "কোচিং সেন্টার", en: "Coaching Center" },
  kindergarten: { bn: "কিন্ডারগার্টেন", en: "Kindergarten" },
  technical: { bn: "কারিগরি প্রতিষ্ঠান", en: "Technical Institute" },
};

export async function generateStaticParams() {
  return Object.keys(serviceMap).map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = serviceMap[resolvedParams.type];
  if (!service) {
    return { title: "Not Found" };
  }
  return {
    title: `${service.bn} | Services | EduWeb`,
    description: `Digital services and management systems for ${service.en}s.`,
  };
}

export default async function ServiceTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const resolvedParams = await params;
  const { type } = resolvedParams;
  const service = serviceMap[type];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-paper pb-20">
      <div className="zone-ink bg-pine-900 text-white pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-mint-300 text-sm font-medium tracking-wider uppercase mb-4">
            {service.en} Solution
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.bn} ম্যানেজমেন্ট সিস্টেম</h1>
          <p className="text-mint-300 text-lg">
            আপনার {service.bn}-কে আধুনিক ও ডিজিটাল করতে আমাদের বিশেষায়িত ওয়েবসাইট ও সিস্টেম
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-1 p-8 mb-8">
          <h2 className="text-2xl font-bold text-pine-900 mb-6">আমাদের ফিচারসমূহ</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">✓</span> ডাইনামিক ওয়েবসাইট ও নোটিশ বোর্ড
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">✓</span> অনলাইন ভর্তি সিস্টেম
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">✓</span> ডিজিটাল রেজাল্ট ম্যানেজমেন্ট
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">✓</span> শিক্ষক ও শিক্ষার্থী ডাটাবেস
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">✓</span> গ্যালারি ও ইভেন্ট ম্যানেজমেন্ট
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">✓</span> বাংলা ও ইংরেজি ডাবল ল্যাঙ্গুয়েজ
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg text-center transition-colors shadow-md"
          >
            ফ্রি পরামর্শ নিন
          </Link>
          <Link
            href="/demos"
            className="bg-white border-2 border-pine-900 text-pine-900 font-bold py-3 px-8 rounded-lg text-center hover:bg-gray-50 transition-colors"
          >
            ডেমো দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
}
