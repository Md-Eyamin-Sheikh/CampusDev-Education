import { Metadata } from "next";

export const metadata: Metadata = {
  title: "প্রাইভেসি পলিসি | Privacy Policy | EduWeb",
  description: "EduWeb - Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-1">
        <h1 className="text-3xl md:text-4xl font-bold text-pine-900 mb-2">প্রাইভেসি পলিসি</h1>
        <h2 className="text-xl text-gray-500 mb-8 pb-8 border-b">Privacy Policy</h2>
        
        <div className="prose prose-pine max-w-none space-y-8">
          <section>
            <h3 className="text-xl font-bold text-pine-900 mb-3">Effective Date: October 2026</h3>
            <p className="text-gray-600">
              This privacy policy sets out how EduWeb uses and protects any information that you give EduWeb when you use this website.
            </p>
            <p className="text-red-500 text-sm mt-2 font-medium">
              Disclaimer: This is a placeholder privacy policy and should be reviewed by a legal professional before use.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-pine-900 mb-3">1. আমরা কী তথ্য সংগ্রহ করি (What data we collect)</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>আপনার নাম (Name)</li>
              <li>ফোন নম্বর (Phone Number)</li>
              <li>শিক্ষাপ্রতিষ্ঠানের নাম এবং ধরণ (Institution Name and Type)</li>
              <li>ইমেইল ঠিকানা, যদি প্রদান করা হয় (Email address, if provided)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-pine-900 mb-3">2. তথ্য কীভাবে ব্যবহৃত হয় (How it's used)</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>আপনাকে পরামর্শ এবং সেবা প্রদান করতে (Consultation)</li>
              <li>প্রজেক্ট ম্যানেজমেন্ট এবং যোগাযোগের জন্য (Project management)</li>
              <li>আমাদের সেবার মান উন্নত করতে (To improve our services)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-pine-900 mb-3">3. থার্ড পার্টি পলিসি (Third Party Policy)</h3>
            <p className="text-gray-600">
              আমরা আপনার ব্যক্তিগত তথ্য কোনো থার্ড পার্টির কাছে বিক্রি বা ভাড়া দেই না। 
              We do not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-pine-900 mb-3">4. যোগাযোগ (Contact for Data Requests)</h3>
            <p className="text-gray-600">
              আপনার ডেটা সম্পর্কিত কোনো অনুরোধ বা প্রশ্নের জন্য আমাদের ইমেইল করুন:<br/>
              <a href="mailto:privacy@eduweb.com.bd" className="text-emerald-600 hover:underline">privacy@eduweb.com.bd</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
