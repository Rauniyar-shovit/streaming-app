import React from "react";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard = () => {
  return (
    <div className="group bg-primary-black  col-span relative h-[12vw]">
      <img
        src={`https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg`}
        alt="thumbnail"
        className="cursor-poiter object-cover  transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
      />
      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <img
          src={`https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg`}
          alt="thumbnail"
          className="cursor-poiter object-cover transition   duration shadow-xl rounded-t-md  delay-300 w-full h-[12vw]"
        />
        <div className="z-10 bg-primary-black p-2 lg:p-4 w-full transition shadow-md roun-b-md">
          Hello
        </div>
      </div>
      MovieCard
    </div>
  );
};

export default MovieCard;
