import React from "react";
import { CustomContent } from ".";
import { FeatureSectionProps } from "@/types";
import { Download, RenderFeaturedVideo } from "./";

const FeatureSection = ({
  id,
  title,
  description,
  image,
  video,
}: FeatureSectionProps) => {
  console.log(video);
  return (
    <section className="mt-20 pb-20 border-b-8 border-gray-200">
      <div className="w-[80%] mx-auto">
        <div
          className={`w-full  flex  gap-10 items-center  ${
            id % 2 === 0 ? "flex-row-reverse" : ""
          }`}
        >
          <CustomContent
            title={title}
            description={description}
            containerStyles="flex-col item-start justify-center  pl-8"
          />
          <div className="min-w-[500px] h-[400px] relative">
            <div>
              <img src={image} alt={`feature-${id}`} className="z-20 " />
              {(id === 1 || id === 2) && (
                <RenderFeaturedVideo id={id} video={video} />
              )}
              {id === 4 && <Download />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
