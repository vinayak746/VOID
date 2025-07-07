import React from "react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "../components/MovieCard";
import BlurCircle from "../components/BlurCircle";

const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh] text-white mt-50">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px" />

      <h1 className="text-2xl md:text-3xl font-semibold tracking-wide mb-8 border-b border-white/10 pb-4 w-fit">
        Now Showing
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {dummyShowsData.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">No Movies Available</h1>
      <p className="text-gray-400 text-lg max-w-md">
        The VOID is silent... for now. Return later to thread your story.
      </p>
    </div>
  );
};

export default Movies;
