"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Honeypot check
    if (data.website_url) {
      setLoading(false);
      return; // spam bot
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken: "dev-bypass" }),
      });

      if (!res.ok) throw new Error("Submission failed");
      
      const result = await res.json();
      router.push(`/thank-you?id=${result.id || "REQ-" + Date.now()}&type=consultation`);
    } catch (err) {
      setError("ফর্ম জমা দেওয়া সম্ভব হয়নি। দয়া করে হোয়াটসঅ্যাপে যোগাযোগ করুন।");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="website_url" value="" />
      
      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm mb-4">
          {error} <a href="https://wa.me/8801XXXXXXXXX" className="underline font-bold">WhatsApp: 01XXXXXXXXX</a>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">পুরো নাম <span className="text-red-500">*</span></label>
          <input required type="text" name="fullName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ফোন নম্বর <span className="text-red-500">*</span></label>
          <input required type="tel" name="phone" placeholder="01XXXXXXXXX" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">প্রতিষ্ঠানের নাম <span className="text-red-500">*</span></label>
          <input required type="text" name="institutionName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">প্রতিষ্ঠানের ধরণ</label>
          <select name="institutionType" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white">
            <option value="school">স্কুল (School)</option>
            <option value="college">কলেজ (College)</option>
            <option value="madrasa">মাদ্রাসা (Madrasa)</option>
            <option value="coaching">কোচিং (Coaching)</option>
            <option value="kindergarten">কিন্ডারগার্টেন (Kindergarten)</option>
            <option value="technical">কারিগরি (Technical)</option>
            <option value="other">অন্যান্য (Other)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">আপনার পদবী / Role</label>
          <input type="text" name="role" placeholder="উদাঃ প্রিন্সিপাল, ডিরেক্টর" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">জেলা (District)</label>
          <input type="text" name="district" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">বিস্তারিত বার্তা (ঐচ্ছিক)</label>
        <textarea name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"></textarea>
      </div>

      <div className="flex items-start">
        <input required type="checkbox" name="consentGiven" id="consent" value="true" className="mt-1 w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500" />
        <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
          আমি সম্মত যে এই তথ্য EduWeb পরামর্শের জন্য ব্যবহার করবে
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold py-3 px-4 rounded-lg transition-colors"
      >
        {loading ? "পাঠানো হচ্ছে..." : "অনুরোধ পাঠান"}
      </button>
    </form>
  );
}
