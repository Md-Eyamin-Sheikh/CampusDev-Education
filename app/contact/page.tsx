import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "যোগাযোগ | Contact | EduWeb",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-pine-900 mb-4">যোগাযোগ করুন</h1>
          <p className="text-gray-600">ফ্রি পরামর্শের জন্য নিচের ফর্মটি পূরণ করুন</p>
        </div>
        <div className="bg-white rounded-2xl shadow-1 p-8 md:p-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
