import React from "react";
interface RenderFeaturedVideoProps {
  id: number;
  video: string | undefined;
}
const RenderFeaturedVideo = ({ id, video }: RenderFeaturedVideoProps) => {
  return (
    <video
      autoPlay
      muted
      loop
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-10 ${
        id === 1 ? "featured__video" : "featured__video__2"
      }`}
    >
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default RenderFeaturedVideo;
