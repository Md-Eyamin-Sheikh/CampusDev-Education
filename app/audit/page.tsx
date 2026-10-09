import { Metadata } from "next";
import AuditForm from "./AuditForm";

export const metadata: Metadata = {
  title: "ফ্রি ওয়েবসাইট অডিট | Free Audit | EduWeb",
};

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-pine-900 mb-4">ফ্রি ওয়েবসাইট অডিট</h1>
          <p className="text-gray-600">আপনার বর্তমান ওয়েবসাইটের পারফরম্যান্স ও সমস্যার ফ্রি রিপোর্ট পেতে ফর্মটি পূরণ করুন</p>
        </div>
        <div className="bg-white rounded-2xl shadow-1 p-8 md:p-10 border border-gray-100">
          <AuditForm />
        </div>
      </div>
    </div>
  );
}
