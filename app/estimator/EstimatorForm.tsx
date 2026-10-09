"use client";

import { useState } from "react";

export default function EstimatorForm() {
  const [loading, setLoading] = useState(false);
  const [estimate, setEstimate] = useState<string | null>(null);

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
      // Mock calculation logic for client-side display
      const modules = formData.getAll("modules");
      const size = data.sizeBand as string;
      
      let basePrice = 12000;
      if (size === "medium") basePrice += 5000;
      if (size === "large") basePrice += 10000;
      
      const modulePrice = modules.length * 2000;
      const totalMin = basePrice + modulePrice;
      const totalMax = totalMin + 8000;

      const formatBn = (num: number) => num.toLocaleString("bn-BD");

      setTimeout(() => {
        setEstimate(`আনুমানিক বাজেট: ৳${formatBn(totalMin)} – ৳${formatBn(totalMax)}`);
        setLoading(false);
      }, 1000);

    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div>
      {estimate ? (
        <div className="text-center py-10 space-y-6">
          <div className="inline-block bg-emerald-50 text-emerald-800 border-2 border-emerald-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-2">আপনার প্রজেক্টের বাজেট</h2>
            <p className="text-3xl font-bold text-pine-900">{estimate}</p>
          </div>
          <p className="text-gray-600">সঠিক এবং চূড়ান্ত বাজেটের জন্য আমাদের সাথে যোগাযোগ করুন।</p>
          <a href="/contact" className="inline-block bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg">
            পরামর্শ নিন
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <input type="hidden" name="website_url_honeypot" value="" />
          
          <div>
            <label className="block text-lg font-bold text-pine-900 mb-3">১. প্রতিষ্ঠানের ধরণ</label>
            <select name="institutionType" className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white">
              <option value="school">স্কুল</option>
              <option value="college">কলেজ</option>
              <option value="madrasa">মাদ্রাসা</option>
              <option value="other">অন্যান্য</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-bold text-pine-900 mb-3">২. শিক্ষার্থীর সংখ্যা</label>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex-1 flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50">
                <input required type="radio" name="sizeBand" value="small" className="text-emerald-600 focus:ring-emerald-500" />
                <span className="ml-2 font-medium">২০০ এর কম</span>
              </label>
              <label className="flex-1 flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50">
                <input required type="radio" name="sizeBand" value="medium" className="text-emerald-600 focus:ring-emerald-500" />
                <span className="ml-2 font-medium">২০০ - ১০০০</span>
              </label>
              <label className="flex-1 flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50">
                <input required type="radio" name="sizeBand" value="large" className="text-emerald-600 focus:ring-emerald-500" />
                <span className="ml-2 font-medium">১০০০+</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-lg font-bold text-pine-900 mb-3">৩. প্রয়োজনীয় মডিউল</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["notices", "results", "admissions", "gallery", "teachers", "downloads"].map(mod => (
                <label key={mod} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:border-emerald-500">
                  <input type="checkbox" name="modules" value={mod} className="text-emerald-600 rounded focus:ring-emerald-500" />
                  <span className="ml-2 capitalize">{mod}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-lg font-bold text-pine-900 mb-3">৪. ভাষা (Languages)</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="checkbox" name="languages" value="bn" defaultChecked className="text-emerald-600 rounded" />
                <span className="ml-2">বাংলা</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="languages" value="en" className="text-emerald-600 rounded" />
                <span className="ml-2">English</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ফোন নম্বর (ফলাফল পাঠাতে) <span className="text-red-500">*</span></label>
            <input required type="tel" name="phone" placeholder="01XXXXXXXXX" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          <div className="flex items-start">
            <input required type="checkbox" name="consentGiven" id="consent" value="true" className="mt-1 w-4 h-4 text-emerald-600 rounded" />
            <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
              আমি সম্মত যে এই তথ্য ব্যবহারের জন্য সংরক্ষিত হবে
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold py-3 px-4 rounded-lg text-lg transition-colors"
          >
            {loading ? "হিসাব করা হচ্ছে..." : "বাজেট দেখুন"}
          </button>
        </form>
      )}
    </div>
  );
}
