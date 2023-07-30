import { features } from "@/constants";
import React from "react";
import FeatureSection from "./FeatureSection";

const Features = () => {
  return (
    <>
      {features.map((feature) => (
        <FeatureSection
          title={feature.title}
          description={feature.description}
          image={feature.image}
          id={feature.id}
          key={feature.id}
          video={feature.video}
        />
      ))}
    </>
  );
};

export default Features;
