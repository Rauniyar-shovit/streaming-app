import React from "react";
import { FaqContent, GetStarted } from ".";

const FAQs = () => {
  return (
    <section id="faqs " className="mt-20 border-b-8 border-gray-200">
      <div className="max-w-[80%] mx-auto">
        <h1 className="text-[48px] font-bold tracking-tight text-center">
          Frequently Asked Questions
        </h1>
        <FaqContent />
      </div>

      <GetStarted className="mt-10 mb-20" />
    </section>
  );
};

export default FAQs;
