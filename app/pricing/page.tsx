import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "প্যাকেজ ও প্রাইসিং | Pricing | EduWeb",
  description: "Affordable web development packages for educational institutions.",
};

const fallbackPackages = [
  {
    id: "starter",
    nameBn: "স্টার্টিং প্যাকেজ",
    nameEn: "Starter",
    price: "৮,০০০",
    features: ["ডাইনামিক ওয়েবসাইট", "নোটিশ বোর্ড", "ফটো গ্যালারি", "বেসিক এসইও", "১ বছরের ফ্রি ডোমেইন ও হোস্টিং"],
    highlight: false,
  },
  {
    id: "pro",
    nameBn: "প্রফেশনাল প্যাকেজ",
    nameEn: "Professional",
    price: "১৮,০০০",
    features: ["সব স্টার্টিং ফিচার", "অনলাইন ভর্তি ফর্ম", "ডিজিটাল রেজাল্ট সিস্টেম", "শিক্ষক ডিরেক্টরি", "কাস্টম ইমেইল", "সিকিউরিটি প্যানেল"],
    highlight: true,
  },
  {
    id: "enterprise",
    nameBn: "এন্টারপ্রাইজ প্যাকেজ",
    nameEn: "Enterprise",
    price: "৩৫,০০০",
    features: ["সব প্রফেশনাল ফিচার", "স্টুডেন্ট পোর্টাল", "অ্যাডভান্সড পেমেন্ট গেটওয়ে", "অ্যাকাউন্টিং মডিউল", "এসএমএস ইন্টিগ্রেশন", "ডেডিকেটেড সাপোর্ট"],
    highlight: false,
  },
];

export default async function PricingPage() {
  let packages: any[] = fallbackPackages;

  try {
    const { getPackages } = await import("../../lib/repos/packages.repo");
    const data = await getPackages();
    if (data && data.length > 0) packages = data;
  } catch (e) {
    // fallback
  }

  return (
    <div className="min-h-screen bg-paper pb-20">
      <div className="zone-ink bg-pine-900 text-white pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">প্যাকেজ ও মূল্য</h1>
          <p className="text-mint-300 text-lg">আপনার প্রতিষ্ঠানের প্রয়োজন অনুযায়ী সঠিক প্যাকেজটি বেছে নিন</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl p-8 flex flex-col h-full ${
                pkg.highlight
                  ? "shadow-2xl border-2 border-gold-500 transform md:-translate-y-4"
                  : "shadow-1 border border-gray-100"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gold-500 text-pine-900 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                    জনপ্রিয়
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold text-pine-900">{pkg.nameBn}</h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">{pkg.nameEn}</p>
              
              <div className="mb-6">
                <span className="text-sm text-gray-500">শুরু হয়</span>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-pine-900">৳{pkg.price}</span>
                  <span className="text-gray-500 ml-1"> থেকে</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-emerald-600 mr-2 font-bold">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full text-center py-3 px-4 rounded-lg font-bold transition-colors ${
                  pkg.highlight
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-pine-900"
                }`}
              >
                যোগাযোগ করুন
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-pine-900 rounded-2xl p-8 text-center text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-2">আপনার সঠিক বাজেট জানতে চান?</h2>
          <p className="text-mint-300 mb-6">আমাদের এস্টিমেটর টুল ব্যবহার করে আপনার প্রয়োজনীয় ফিচারের ওপর ভিত্তি করে বাজেট জানুন।</p>
          <Link
            href="/estimator"
            className="inline-block bg-gold-500 hover:bg-yellow-500 text-pine-900 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            বাজেট ক্যালকুলেট করুন
          </Link>
        </div>
      </div>
    </div>
  );
}
