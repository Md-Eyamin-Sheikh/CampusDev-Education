import { Metadata } from "next";

export const metadata: Metadata = {
  title: "শর্তাবলী | Terms of Service | EduWeb",
  description: "EduWeb - Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-1">
        <h1 className="text-3xl md:text-4xl font-bold text-pine-900 mb-2">সেবার শর্তাবলী</h1>
        <h2 className="text-xl text-gray-500 mb-8 pb-8 border-b">Terms of Service</h2>
        
        <div className="prose prose-pine max-w-none space-y-8">
          <section>
            <p className="text-gray-600">
              EduWeb-এর সেবা গ্রহণ করার মাধ্যমে আপনি নিম্নলিখিত শর্তাবলীতে সম্মত হচ্ছেন।
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-pine-900 mb-3">1. সেবার বিবরণ (Service Description)</h3>
            <p className="text-gray-600">
              EduWeb শিক্ষাপ্রতিষ্ঠানের জন্য ওয়েবসাইট ডেভেলপমেন্ট, ম্যানেজমেন্ট সিস্টেম এবং ডিজিটাল সেবা প্রদান করে থাকে। আমাদের প্রতিটি প্রজেক্ট নির্দিষ্ট চুক্তির ভিত্তিতে পরিচালিত হয়।
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-pine-900 mb-3">2. পেমেন্ট শর্তাবলী (Payment Terms)</h3>
            <p className="text-gray-600">
              প্রজেক্ট শুরু করার পূর্বে নির্দিষ্ট পরিমাণের অগ্রিম (Advance) পেমেন্ট আবশ্যক। বাকি পেমেন্ট প্রজেক্ট ডেলিভারি বা মাইলস্টোন অনুযায়ী প্রদান করতে হবে।
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-pine-900 mb-3">3. রিভিশন পলিসি (Revision Policy)</h3>
            <p className="text-gray-600">
              চুক্তি অনুযায়ী নির্দিষ্ট সংখ্যক রিভিশন প্রদান করা হবে। অতিরিক্ত পরিবর্তনের জন্য অতিরিক্ত চার্জ প্রযোজ্য হতে পারে।
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-pine-900 mb-3">4. মেধা সম্পদ (Intellectual Property)</h3>
            <p className="text-gray-600">
              সম্পূর্ণ পেমেন্ট সম্পন্ন হওয়ার পর ওয়েবসাইটের ফ্রন্ট-এন্ড ডিজাইনের স্বত্ব গ্রাহকের কাছে হস্তান্তর করা হবে। তবে, EduWeb-এর নিজস্ব কোডবেস এবং সিস্টেম ইঞ্জিনের স্বত্ব EduWeb-এর কাছে সংরক্ষিত থাকবে।
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-pine-900 mb-3">5. দায়বদ্ধতার সীমাবদ্ধতা (Limitation of Liability)</h3>
            <p className="text-gray-600">
              EduWeb কোনো প্রত্যক্ষ, পরোক্ষ বা আনুষঙ্গিক ক্ষতির জন্য দায়ী থাকবে না যা ওয়েবসাইট বা আমাদের সিস্টেম ব্যবহারের ফলে হতে পারে।
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-pine-900 mb-3">6. আইন (Governing Law)</h3>
            <p className="text-gray-600">
              এই শর্তাবলী গণপ্রজাতন্ত্রী বাংলাদেশের আইন অনুযায়ী পরিচালিত হবে। 
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-pine-900 mb-3">7. যোগাযোগ (Contact for Disputes)</h3>
            <p className="text-gray-600">
              যেকোনো বিরোধ বা প্রশ্নের জন্য আমাদের ইমেইল করুন:<br/>
              <a href="mailto:legal@eduweb.com.bd" className="text-emerald-600 hover:underline">legal@eduweb.com.bd</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
