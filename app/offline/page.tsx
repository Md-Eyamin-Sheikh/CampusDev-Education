import { Metadata } from "next";
import OfflineRetryButton from "./OfflineRetryButton";

export const metadata: Metadata = {
  title: "অফলাইন | EduWeb",
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 zone-ink bg-pine-900 text-white pb-20">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-8 text-gold-500 opacity-80">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636a9 9 0 00-12.728 0m1.414 1.414a7 7 0 00-9.9 0m1.414 1.414a5 5 0 00-7.07 0m1.414 1.414a3 3 0 00-4.242 0M12 18h.01m-2.828-5.657l5.656 5.657m-5.656 0l5.656-5.657"
            />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">ইন্টারনেট সংযোগ নেই</h1>
        <p className="text-mint-300 mb-10 text-lg">
          সংযোগ ফিরে এলে পেজটি স্বয়ংক্রিয়ভাবে লোড হবে
        </p>

        <div className="space-y-4">
          <OfflineRetryButton />
          
          <a
            href="https://wa.me/8801XXXXXXXXX"
            className="block w-full bg-transparent border-2 border-emerald-600 hover:bg-emerald-600/20 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            হোয়াটসঅ্যাপে মেসেজ দিন
          </a>
        </div>
      </div>
    </div>
  );
}
