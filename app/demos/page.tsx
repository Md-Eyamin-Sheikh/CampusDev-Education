import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "আমাদের প্রজেক্ট ও ডেমো | Demos | EduWeb",
  description: "View our portfolio of digital education management systems.",
};

export default async function DemosPage() {
  let portfolioItems: any[] = [];
  
  try {
    const { getPortfolio } = await import("../../lib/repos/portfolio.repo");
    portfolioItems = await getPortfolio();
  } catch (error) {
    // using empty fallback
  }

  return (
    <div className="min-h-screen bg-paper pb-20">
      <div className="zone-ink bg-pine-900 text-white pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">পোর্টফোলিও ও ডেমো</h1>
          <p className="text-mint-300 text-lg max-w-2xl mx-auto">
            আমাদের তৈরি কিছু সফল প্রজেক্ট ও সিস্টেমের ডেমো
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        {portfolioItems && portfolioItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item: any, i: number) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-1 border border-gray-100 text-left">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-pine-900 mb-2">{item.name}</h3>
                  <Link href={`/demos/${item.slug || i}`} className="text-emerald-600 font-medium">
                    বিস্তারিত দেখুন &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 max-w-2xl mx-auto shadow-1 border border-gray-100">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-2xl font-bold text-pine-900 mb-4">শীঘ্রই আসছে</h2>
            <p className="text-gray-600 mb-8">
              আমাদের ভেরিফাইড পোর্টফোলিও খুব শীঘ্রই প্রকাশ করা হবে। সরাসরি ডেমো দেখতে আমাদের সাথে যোগাযোগ করুন।
            </p>
            <Link
              href="/contact"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
