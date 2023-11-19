import Image from "next/image";
import React from "react";

const Thumbnail = () => {
  return (
    //     <div className="relative hover:hidden  flex-col ">
    //       <div className="relative h-56 min-w-[400px]  2xl:h-[125px] 2xl:min-w-[225px] cursor-pointer  ">
    //         <Image
    //           src={
    //             "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
    //           }
    //           alt="thumbnail"
    //           className="rounded-sm object-cover md:rounded "
    //           fill
    //         />
    //       </div>
    //       <div className=" bottom-0">Hello</div>
    //     </div>
    //   );
    // };

    // <div className="square one">
    //   <div className="cover"></div>
    //   <div className="text">Never Gonna Give You Up!</div>
    // </div>

    <div className="relative  preview_container mt-10 ">
      <div className="relative w-full h-full  cursor-pointer  ">
        <Image
          src={
            "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
          }
          alt="thumbnail"
          className="rounded-sm object-cover md:rounded "
          fill
        />
      </div>
      <div className=" preview__details">Never Gonna Give You Up!</div>
    </div>
  );
};

export default Thumbnail;
