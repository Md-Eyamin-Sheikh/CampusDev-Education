import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "কাজের পদ্ধতি | Process | EduWeb",
};

export default function ProcessPage() {
  const steps = [
    {
      num: "১",
      title: "আলোচনা (Talk)",
      desc: "ফ্রি পরামর্শ সেশনে আমরা আপনার প্রতিষ্ঠানের চাহিদা ও লক্ষ্য নিয়ে বিস্তারিত আলোচনা করি।",
    },
    {
      num: "২",
      title: "ডেমো (Demo)",
      desc: "আমরা আপনার জন্য একটি লাইভ প্রিভিউ বা ডেমো প্রস্তুত করি যাতে আপনি কাজ শুরু করার আগেই ধারণা পান।",
    },
    {
      num: "৩",
      title: "তৈরি (Build)",
      desc: "আপনার অনুমোদন পেলে আমরা ডিজাইন ও ডেভেলপমেন্টের কাজ শুরু করি।",
    },
    {
      num: "৪",
      title: "লঞ্চ ও সেবা (Launch & Care)",
      desc: "সিস্টেমটি লাইভ করা হয় এবং আমরা প্রয়োজনীয় ট্রেনিং ও চলমান টেকনিক্যাল সাপোর্ট প্রদান করি।",
    },
  ];

  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-pine-900 mb-4">আমাদের কাজের পদ্ধতি</h1>
          <p className="text-gray-600 text-lg">স্বচ্ছ ও সহজ প্রক্রিয়ায় আপনার ডিজিটাল রূপান্তর (Typical timeline: 2-4 weeks)</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent mb-16">
          {steps.map((step, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-600 text-white font-bold text-lg shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {step.num}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-1 border border-gray-100">
                <h3 className="text-xl font-bold text-pine-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors"
          >
            আজই শুরু করুন
          </Link>
        </div>
      </div>
    </div>
  );
}
