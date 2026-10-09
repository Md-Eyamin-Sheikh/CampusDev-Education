import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | About Us | EduWeb",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-1 overflow-hidden">
          <div className="zone-ink bg-pine-900 p-10 md:p-16 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">আমাদের সম্পর্কে</h1>
            <p className="text-2xl font-medium text-gold-500">
              "বাংলাদেশের প্রতিটি শিক্ষাপ্রতিষ্ঠানকে ডিজিটাল করা"
            </p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="prose prose-pine max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                EduWeb হলো শিক্ষাপ্রতিষ্ঠানগুলোর জন্য একটি আধুনিক ডিজিটাল সেবা প্রদানকারী সংস্থা। আমরা স্কুল, কলেজ, মাদ্রাসা ও অন্যান্য শিক্ষাপ্রতিষ্ঠানের জন্য ডাইনামিক ওয়েবসাইট এবং কমপ্লিট ম্যানেজমেন্ট সিস্টেম তৈরি করি। আমাদের লক্ষ্য হলো প্রযুক্তি ব্যবহারের মাধ্যমে শিক্ষার মান উন্নয়ন ও প্রশাসনিক কাজকে আরও সহজ ও দ্রুত করা।
              </p>
            </div>

            <h2 className="text-2xl font-bold text-pine-900 mb-8 text-center">আমাদের মূলনীতি</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-pine-900 mb-2">বিশ্বাস (Trust)</h3>
                <p className="text-gray-600 text-sm">স্বচ্ছতা ও সততার সাথে গ্রাহকের আস্থা অর্জন।</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-pine-900 mb-2">মান (Quality)</h3>
                <p className="text-gray-600 text-sm">সর্বোচ্চ মানের ডিজাইন ও টেকনোলজি ব্যবহার।</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-pine-900 mb-2">সহায়তা (Support)</h3>
                <p className="text-gray-600 text-sm">প্রজেক্ট ডেলিভারির পরও সার্বক্ষণিক সাপোর্ট।</p>
              </div>
            </div>

            <div className="border-t pt-10 text-center">
              <h2 className="text-2xl font-bold text-pine-900 mb-6">যোগাযোগ করুন</h2>
              <p className="text-gray-600 mb-2">অফিস: ঢাকা, বাংলাদেশ (TODO: Update Address)</p>
              <p className="text-gray-600 mb-6">ইমেইল: info@eduweb.com.bd</p>
              <Link
                href="/contact"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors"
              >
                পরামর্শের জন্য যোগাযোগ করুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
