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
  return (
    <section className=" sm:py-20  pt-10 pb-0  border-b-8 border-gray-200 bg-[#000]">
      <div className="center_div ">
        <div
          className={`w-full   flex  gap-10 items-center  ${
            id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
          } flex-col`}
        >
          <CustomContent
            title={title}
            description={description}
            containerStyles="flex-col item-start justify-center text-center lg:text-left lg:pl-8 px-4"
          />
          <div className="min-w-[500px] h-[400px] relative">
            <div className="flex items-center justify-center">
              <img
                src={image}
                alt={`feature-${id}`}
                className="z-50 sm:w-full w-[360px]  relative"
              />
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
