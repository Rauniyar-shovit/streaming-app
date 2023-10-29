import React from "react";
import { FaqContent, GetStarted } from ".";

const FAQs = () => {
  return (
    <section id="faqs " className="pt-20 border-b-8 border-gray-200 bg-[#000]">
      <div className="center_div ">
        <h1 className="lg:text-5xl text-4xl font-bold tracking-tight mb-3 text-center">
          Frequently Asked Questions
        </h1>
        <FaqContent />
      </div>

      <div className="center_div">
        <GetStarted className="mt-10 mb-20" />
      </div>
    </section>
  );
};

export default FAQs;
