"use client";

import React, { useState } from "react";
import { FaqCard } from ".";
import { faqs } from "@/constants";

const FaqContent = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div className="flex flex-col gap-2 mt-10 mx-2">
      {faqs.map((faq, index) => (
        <FaqCard
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
          onClick={() => toggle(index)}
          open={selected === index}
        />
      ))}
    </div>
  );
};

export default FaqContent;
