import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Demo: ${resolvedParams.slug} | EduWeb`,
  };
}

export default async function DemoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let item = null;

  try {
    const { getPortfolioBySlug } = await import("../../../lib/repos/portfolio.repo");
    item = await getPortfolioBySlug(slug);
  } catch (error) {
    // fallback
  }

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-1 p-8">
        <h1 className="text-3xl font-bold text-pine-900 mb-4">{item.institutionNameBn || slug}</h1>
        <p className="text-gray-600 mb-8">{item.summaryBn || "বিস্তারিত বিবরণ উপলব্ধ নয়।"}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {(item.tags || ["Educational", "Web"]).map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-gray-100 text-sm font-medium text-gray-700 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={item.liveUrl || "#"}
          target="_blank"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          লাইভ ওয়েবসাইট দেখুন
        </Link>
      </div>
    </div>
  );
}
