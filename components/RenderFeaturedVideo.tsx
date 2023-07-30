import React from "react";
interface RenderFeaturedVideoProps {
  id: number;
  video: string | undefined;
}
const RenderFeaturedVideo = ({ id, video }: RenderFeaturedVideoProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
      <video
        autoPlay
        muted
        loop
        className={`${id === 1 ? "featured__video" : "featured__video__2"}`}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default RenderFeaturedVideo;
