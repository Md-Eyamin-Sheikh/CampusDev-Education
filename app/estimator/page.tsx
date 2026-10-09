import { Metadata } from "next";
import EstimatorForm from "./EstimatorForm";

export const metadata: Metadata = {
  title: "প্রজেক্ট এস্টিমেটর | Estimator | EduWeb",
};

export default function EstimatorPage() {
  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-pine-900 mb-4">বাজেট এস্টিমেটর</h1>
          <p className="text-gray-600">আপনার প্রয়োজনীয় ফিচারের ওপর ভিত্তি করে আনুমানিক বাজেট জানুন</p>
        </div>
        <div className="bg-white rounded-2xl shadow-1 p-6 md:p-10 border border-gray-100">
          <EstimatorForm />
        </div>
      </div>
    </div>
  );
}
