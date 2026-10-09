"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuditForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    if (data.website_url_honeypot) {
      setLoading(false);
      return; 
    }

    try {
      await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      // Always redirect to thank you on success or fake success
      const id = "AUDIT-" + Date.now();
      router.push(`/thank-you?id=${id}&type=audit`);
    } catch (err) {
      const id = "AUDIT-" + Date.now();
      router.push(`/thank-you?id=${id}&type=audit`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="website_url_honeypot" value="" />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">ওয়েবসাইটের লিংক (URL) <span className="text-red-500">*</span></label>
        <input required type="url" name="websiteUrl" placeholder="https://www.example.edu.bd" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">প্রতিষ্ঠানের নাম <span className="text-red-500">*</span></label>
        <input required type="text" name="institutionName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">ফোন নম্বর <span className="text-red-500">*</span></label>
        <input required type="tel" name="phone" placeholder="01XXXXXXXXX" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" />
      </div>

      <div className="flex items-start">
        <input required type="checkbox" name="consentGiven" id="consent" value="true" className="mt-1 w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500" />
        <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
          আমি সম্মত যে এই তথ্য অডিট রিপোর্ট প্রদানের জন্য ব্যবহৃত হবে
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold py-3 px-4 rounded-lg transition-colors"
      >
        {loading ? "অডিট শুরু হচ্ছে..." : "অডিট রিকুয়েস্ট পাঠান"}
      </button>
    </form>
  );
}
