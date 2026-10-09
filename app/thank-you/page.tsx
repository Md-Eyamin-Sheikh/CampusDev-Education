import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ধন্যবাদ | EduWeb",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; type?: string }>;
}) {
  const resolvedParams = await searchParams;
  const id = resolvedParams.id;
  
  return (
    <div className="min-h-screen bg-paper flex flex-col items-center pt-20 pb-20 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-1 overflow-hidden">
        <div className="zone-ink px-8 py-10 text-center">
          <div className="w-20 h-20 mx-auto bg-emerald-600 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">ধন্যবাদ</h1>
          <p className="text-mint-300">আপনার অনুরোধ পাঠানো হয়েছে</p>
        </div>
        <div className="p-8 text-center">
          {id && (
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-1">রেফারেন্স আইডি</p>
              <p className="font-mono font-medium text-lg text-pine-900 bg-gray-50 py-2 px-4 rounded-lg inline-block">
                {id}
              </p>
            </div>
          )}
          <div className="space-y-4">
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              হোয়াটসঅ্যাপে যোগাযোগ করুন
            </a>
            <Link
              href="/"
              className="block w-full bg-gray-100 hover:bg-gray-200 text-pine-900 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              হোম পেজে ফিরে যান
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
