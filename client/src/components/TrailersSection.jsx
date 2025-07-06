import { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import ReactPlayer from "react-player";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "lucide-react";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  const handleError = (error) => {
    console.error("Error loading video:", error);
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden py-20 relative">
      <BlurCircle top="-100px" right="-100px" />
      <p className="text-gray-300 font-medium text-lg max-w-[960px] uppercase tracking-widest">
        Trailers
      </p>

      {/* Video Player */}
      <div className="relative mt-8 aspect-video max-w-[960px] mx-auto rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(248,69,101,0.15)] ring-1 ring-white/5 backdrop-blur weaver-thread">
        <ReactPlayer
          src={currentTrailer.videoUrl}
          controls
          width="100%"
          height="100%"
          playing
          muted
          onError={handleError}
        />
      </div>

      {/* Thumbnails */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10 max-w-5xl mx-auto">
        {dummyTrailers.map((trailer, idx) => (
          <div
            key={trailer.id || idx}
            onClick={() => setCurrentTrailer(trailer)}
            className={`relative group rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
              currentTrailer.id === trailer.id
                ? "ring-2 ring-primary scale-105 brightness-100"
                : "hover:ring-[1.5px] hover:ring-fuchsia-700/40 hover:scale-105 hover:brightness-100 brightness-75"
            } animate-float`}
          >
            {/* Shadowy blur tendrils */}
            <div className="absolute top-0 left-0 w-2/5 h-2/5 bg-purple-900/30 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-2/5 h-2/5 bg-fuchsia-900/30 blur-2xl rounded-full translate-x-1/2 translate-y-1/2 z-10 pointer-events-none" />

            {/* Thumbnail image */}
            <img
              src={trailer.image}
              alt="trailer"
              className="rounded-xl w-full h-full object-cover z-0 relative"
            />

            {/* Arcane thread overlays */}
            <svg
              className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,100 C25,20 75,20 100,100"
                stroke="rgba(124,58,237,0.35)"
                strokeWidth="0.8"
                fill="none"
              />
              <path
                d="M0,0 C30,90 70,90 100,0"
                stroke="rgba(248,69,101,0.2)"
                strokeWidth="0.6"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.3"
                fill="none"
              />
            </svg>

            {/* Center play icon */}
            <div className="absolute inset-0 z-30 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-700/10 group-hover:bg-pink-500/15 backdrop-blur-md flex items-center justify-center transition duration-300 shadow-[0_0_25px_#5B21B6] group-hover:shadow-[0_0_40px_#F84565] animate-pulse">
                <PlayCircleIcon
                  className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition"
                  strokeWidth={1.4}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
