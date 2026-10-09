"use client";

export default function OfflineRetryButton() {
  return (
    <button
      onClick={() => window.location.reload()}
      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-md"
    >
      আবার চেষ্টা করুন
    </button>
  );
}
